import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { WordDrifter } from './WordDrifter'

gsap.registerPlugin(ScrollTrigger)

const FONT_SPEC = '"Instrument Serif", "Times New Roman", serif'
const CONVERGE_WORD = 'sword'

const smoothStep = (edge0: number, edge1: number, x: number) => {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)))
  return t * t * (3 - 2 * t)
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduced
}

function generateMicroGrain(): string {
  try {
    const canvas = document.createElement('canvas')
    canvas.width = canvas.height = 140
    const ctx = canvas.getContext('2d')!
    const imgData = ctx.createImageData(140, 140)
    for (let i = 0; i < imgData.data.length; i += 4) {
      // Warm dark paper fiber specks
      const val = 30 + Math.floor(Math.random() * 40)
      imgData.data[i] = val + 8
      imgData.data[i + 1] = val + 4
      imgData.data[i + 2] = val
      imgData.data[i + 3] = Math.random() * 14
    }
    ctx.putImageData(imgData, 0, 0)
    return `url(${canvas.toDataURL('image/png')})`
  } catch {
    return 'none'
  }
}

export default function DeepdriftHero() {
  const trackRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const drifterRef = useRef<WordDrifter | null>(null)
  const lenisRef = useRef<Lenis | null>(null)
  const reduced = usePrefersReducedMotion()

  const [status, setStatus] = useState<'loading' | 'ready' | 'failed'>('loading')
  const [count, setCount] = useState(0)
  const [grainUrl] = useState(generateMicroGrain)
  const [isBlooming, setIsBlooming] = useState(false)

  const toggleBloom = () => {
    const next = !isBlooming
    setIsBlooming(next)
    drifterRef.current?.setRoseMode(next)
    if (next) {
      lenisRef.current?.scrollTo(0, { immediate: false, duration: 1.0 })
    }
  }

  /* ------------------------------------------------ Engine Mount */
  useEffect(() => {
    const canvas = canvasRef.current
    const stage = stageRef.current
    if (!canvas || !stage) return

    let disposed = false
    let drifter: WordDrifter
    try {
      drifter = new WordDrifter(canvas, { word: CONVERGE_WORD, font: FONT_SPEC })
    } catch {
      setStatus('failed')
      return
    }
    drifterRef.current = drifter

    const fontsReady = Promise.race([
      Promise.all([
        document.fonts.load(`16px ${FONT_SPEC}`),
        document.fonts.load(`italic 100px ${FONT_SPEC}`),
      ]),
      new Promise((resolve) => setTimeout(resolve, 2400)),
    ])

    let ro: ResizeObserver | null = null
    let io: IntersectionObserver | null = null
    let visible = true
    const handleVisibility = () => (document.hidden || !visible ? drifter.pause() : drifter.play())

    fontsReady.then(() => {
      if (disposed) return
      drifter.resize(stage.clientWidth, stage.clientHeight)
      setCount(drifter.count)
      setStatus('ready')

      ro = new ResizeObserver(() => drifter.resize(stage.clientWidth, stage.clientHeight))
      ro.observe(stage)

      io = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting
        handleVisibility()
      })
      if (trackRef.current) io.observe(trackRef.current)
      document.addEventListener('visibilitychange', handleVisibility)
      drifter.play()
    })

    return () => {
      disposed = true
      ro?.disconnect()
      io?.disconnect()
      document.removeEventListener('visibilitychange', handleVisibility)
      drifter.dispose()
      drifterRef.current = null
    }
  }, [])

  useEffect(() => {
    drifterRef.current?.setStatic(reduced)
  }, [reduced, status])

  /* ------------------------------------------------ Interaction */
  useEffect(() => {
    const stage = stageRef.current
    if (!stage || status !== 'ready') return

    const getLocalPos = (e: PointerEvent) => {
      const rect = stage.getBoundingClientRect()
      return { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const isTargetingInteractive = (e: PointerEvent) =>
      !!(e.target as HTMLElement).closest('input, button, form')

    const onPointerMove = (e: PointerEvent) => {
      if (isTargetingInteractive(e)) return drifterRef.current?.setPointer(0, 0, false)
      const pos = getLocalPos(e)
      drifterRef.current?.setPointer(pos.x, pos.y, e.pointerType === 'mouse' || e.buttons > 0)
    }

    const onPointerDown = (e: PointerEvent) => {
      if (isTargetingInteractive(e)) return
      const pos = getLocalPos(e)
      drifterRef.current?.burst(pos.x, pos.y)
      drifterRef.current?.setPointer(pos.x, pos.y, true)
    }

    const onPointerUp = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') drifterRef.current?.setPointer(0, 0, false)
    }

    const onPointerLeave = () => drifterRef.current?.setPointer(0, 0, false)

    stage.addEventListener('pointermove', onPointerMove)
    stage.addEventListener('pointerdown', onPointerDown)
    stage.addEventListener('pointerup', onPointerUp)
    stage.addEventListener('pointercancel', onPointerLeave)
    stage.addEventListener('pointerleave', onPointerLeave)

    return () => {
      stage.removeEventListener('pointermove', onPointerMove)
      stage.removeEventListener('pointerdown', onPointerDown)
      stage.removeEventListener('pointerup', onPointerUp)
      stage.removeEventListener('pointercancel', onPointerLeave)
      stage.removeEventListener('pointerleave', onPointerLeave)
    }
  }, [status])

  /* ------------------------------------------------ Lenis Smooth Scrolling */
  useEffect(() => {
    if (reduced) return
    const lenis = new Lenis({ lerp: 0.08 })
    lenisRef.current = lenis
    lenis.on('scroll', ScrollTrigger.update)
    const tick = (t: number) => lenis.raf(t * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)
    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [reduced])

  /* ------------------------------------------------ Scroll Narrative */
  useLayoutEffect(() => {
    const track = trackRef.current
    if (!track) return

    if (isBlooming) {
      ScrollTrigger.refresh()
      return
    }

    const ctx = gsap.context(() => {
      if (!reduced) {
        gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.25 })
          .from('.dd-coord', { opacity: 0, scale: 0.85, duration: 1.5, stagger: 0.1 })
          .from('.dd-headline .row-inner', { yPercent: 115, duration: 1.5, stagger: 0.1 }, 0.3)
          .from('.dd-kicker, .dd-register__count, .dd-scrollhint__text', {
            opacity: 0,
            y: 12,
            duration: 1.1,
            stagger: 0.08,
          }, 0.75)
      }

      const timelineState = { progress: 0 }
      const applyProgress = (p: number) => {
        drifterRef.current?.setState({
          bloom: 0.45 + 0.55 * smoothStep(0.02, 0.44, p),
          scatter: smoothStep(0.38, 0.62, p),
          morph: smoothStep(0.55, 0.93, p),
        })
      }

      const tl = gsap.timeline({ paused: true, defaults: { ease: 'none' } })
      tl.to(timelineState, { progress: 1, duration: 1, onUpdate: () => applyProgress(timelineState.progress) }, 0)
        .to('.dd-scrollhint', { opacity: 0, duration: 0.05 }, 0)
        .to('.dd-headline', { opacity: 0, y: -20, duration: 0.12 }, 0.12)
        .to('.dd-register', { opacity: 0, duration: 0.10 }, 0.22)
        .fromTo('.dd-recollection', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.09 }, 0.86)

      ScrollTrigger.create({
        trigger: track,
        start: 'top top',
        end: 'bottom bottom',
        animation: reduced ? undefined : tl,
        scrub: reduced ? false : 0.8,
        onUpdate(self) {
          if (reduced) {
            const p = self.progress > 0.55 ? 1 : self.progress > 0.25 ? 0.44 : 0
            tl.progress(p)
          }
        },
      })
      applyProgress(0)
    }, stageRef)

    return () => ctx.revert()
  }, [reduced, isBlooming])

  return (
    <main className="dd-root" data-status={status} style={{ ['--dd-grain' as string]: grainUrl }}>
      <section ref={trackRef} className={`dd-track ${isBlooming ? 'dd-track--blooming' : ''}`} aria-label="Deepdrift: an ocean of quiet human memories">
        <div ref={stageRef} className={`dd-stage ${isBlooming ? 'dd-stage--blooming' : ''}`}>
          <div className="dd-bg" aria-hidden="true">
            <span className="dd-aura dd-aura--1" />
            <span className="dd-aura dd-aura--2" />
            <span className="dd-aura dd-aura--3" />
            <span className="dd-aura dd-aura--4" />
          </div>

          <canvas ref={canvasRef} className="dd-canvas" aria-hidden="true" />
          <div className="dd-grain" aria-hidden="true" />

          {/* Ambient corner marks */}
          <span className="dd-coord dd-coord--tl" aria-hidden="true">♡</span>
          <span className="dd-coord dd-coord--tr" aria-hidden="true">♱</span>
          <span className="dd-coord dd-coord--bl" aria-hidden="true">಄</span>
          <span className="dd-coord dd-coord--br" aria-hidden="true">𖣂</span>

          <p className="dd-kicker">
            <span>{isBlooming ? 'Transmutation' : 'Saturn'}</span>
            <span className="dd-kicker__dot" />
            <span>{isBlooming ? 'In full bloom' : 'In celestial orbit'}</span>
          </p>

          <h1 className="dd-headline">
            <span className="row-wrap">
              <span className="row-inner">{isBlooming ? 'in bloom..' : 'i remember..'}</span>
            </span>
          </h1>

          <p className="dd-register" aria-live="polite">
            <span className="dd-register__count">{String(count).padStart(4, '0')}</span>
            <span>{isBlooming ? 'petals unfolded' : 'memories in orbit'}</span>
          </p>

          {!isBlooming && (
            <div className="dd-recollection" aria-hidden="false">
              <p>Every word here is something I did not let go.</p>
            </div>
          )}

          {/* Bloom Button */}
          <button
            type="button"
            className={`dd-bloom-btn ${isBlooming ? 'is-active' : ''}`}
            onClick={toggleBloom}
            aria-label={isBlooming ? 'Return to celestial orbit' : 'Bloom into a rose'}
          >
            <span className="dd-bloom-btn__glyph" aria-hidden="true">{isBlooming ? '✦' : '🌸'}</span>
            <span className="dd-bloom-btn__text">{isBlooming ? 'return' : 'bloom'}</span>
          </button>

          {!isBlooming && (
            <div className="dd-scrollhint" aria-hidden="true">
              <span className="dd-scrollhint__text">Scroll to release</span>
            </div>
          )}

          {status === 'failed' && (
            <p className="dd-error">The canvas could not be drawn here, but the words continue downward.</p>
          )}
        </div>
      </section>
    </main>
  )
}
