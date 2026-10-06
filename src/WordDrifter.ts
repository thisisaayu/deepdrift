/**
 * WordDrifter
 * Aesthetic Philosophy: Words + Binary + Blocks on Aged Parchment.
 * Palette: Mineral Teal, Sakura Petal Rose, Sumi Black, Dark Charcoal, Light Ivory.
 *
 * 1. Top: A 3D rotating kinetic Saturn composed of poetic words, binary streams, and shaded block glyphs.
 * 2. Bottom: Exact 1:1 reconstitution of sword.txt without ANY character overlapping.
 *    Single monospace characters tile with clean breathing space, flanked by floating memory marginalia.
 */

export const SATURN_WORDS = [
  'sehnsucht', 'mondschein', 'stille', 'burnt rice', 'cold tea', 'frost',
  'old dog', 'midnight', 'ember', 'rain', 'shadow', 'traum', 'heimat',
  'keyhole', 'sweater', 'lullaby', 'wet gravel', 'salt crust', 'screen door',
  'warm pocket', 'cedar smoke', 'soft murmur', 'broken watch', 'pine cone',
  'attic dust', 'open window', 'first snow', 'warm mug', 'fog horn',
  'cast iron', 'wind chime', 'river stone', 'faded stamp', 'candle wick'
]

export const BINARY_GLYPHS = [
  '0', '1', '01', '10', '00', '11', '101', '010', '001', '110',
  '0101', '1010', '0011', '1100', '0', '1', '0', '1', '01', '10',
  '1', '0', '00', '11', '010', '101', '1', '0', '01', '10',
  '0', '1', '101', '010', '0', '1'
]

export const BLOCK_GLYPHS = [
  '█', '▓', '▒', '░', '■', '▪', '▫', '◆', '◇', '●', '○', '▲', '▼',
  '░', '▒', '▓', '█', '■', '▫', '▪', '◆', '◇', '█', '▓', '▒', '░',
  '■', '●', '○', '░', '▒', '▓', '█', '■'
]

export const CLOUD_WORDS = [
  'cumulus', 'nimbus', 'stratus', 'vapor', 'tempest', 'gale',
  'thunder', 'drift', 'haze', 'ozone', 'surge', 'volt',
  'charge', 'arc', 'flash', 'spark', 'static', 'whisper',
  'cold front', 'pressure', 'ionized', 'mist', 'hail', 'dark sky'
]

export const CLOUD_BINARY = [
  '01', '10', '110', '001', '1011', '0100', '1110', '0001',
  '11', '00', '101', '010', '1100', '0011', '1', '0'
]

export const CLOUD_BLOCKS = [
  '█', '▓', '▒', '░', '▪', '▫', '◆', '▲', '▼', '⚡', 'ϟ', '↯', '⌁'
]

export type SwordPoint = {
  gx: number
  gy: number
  ch: string
  part: 'pommel' | 'grip' | 'guard' | 'blade' | 'tip'
}

/**
 * Exact 98 character coordinates parsed directly from sword.txt:
 * Rows 0-1: Pommel
 * Rows 2-4: Hilt grip
 * Rows 5-7: Crossguard quillons
 * Rows 8-22: Double-edged blade
 * Rows 23-24: Blade tip point
 */
export const SWORD_ASCII_POINTS: SwordPoint[] = [
  { gx: 6, gy: 0, ch: '.', part: 'pommel' },
  { gx: 7, gy: 0, ch: '-', part: 'pommel' },
  { gx: 8, gy: 0, ch: '.', part: 'pommel' },
  { gx: 5, gy: 1, ch: '{', part: 'pommel' },
  { gx: 6, gy: 1, ch: '{', part: 'pommel' },
  { gx: 7, gy: 1, ch: '@', part: 'pommel' },
  { gx: 8, gy: 1, ch: '}', part: 'pommel' },
  { gx: 9, gy: 1, ch: '}', part: 'pommel' },
  { gx: 6, gy: 2, ch: '8', part: 'grip' },
  { gx: 7, gy: 2, ch: '@', part: 'grip' },
  { gx: 8, gy: 2, ch: '8', part: 'grip' },
  { gx: 6, gy: 3, ch: '8', part: 'grip' },
  { gx: 7, gy: 3, ch: '8', part: 'grip' },
  { gx: 8, gy: 3, ch: '8', part: 'grip' },
  { gx: 6, gy: 4, ch: '8', part: 'grip' },
  { gx: 7, gy: 4, ch: '@', part: 'grip' },
  { gx: 8, gy: 4, ch: '8', part: 'grip' },
  { gx: 1, gy: 5, ch: '_', part: 'guard' },
  { gx: 6, gy: 5, ch: ')', part: 'guard' },
  { gx: 7, gy: 5, ch: '8', part: 'guard' },
  { gx: 8, gy: 5, ch: '(', part: 'guard' },
  { gx: 13, gy: 5, ch: '_', part: 'guard' },
  { gx: 0, gy: 6, ch: '(', part: 'guard' },
  { gx: 1, gy: 6, ch: '@', part: 'guard' },
  { gx: 2, gy: 6, ch: ')', part: 'guard' },
  { gx: 3, gy: 6, ch: '_', part: 'guard' },
  { gx: 4, gy: 6, ch: '_', part: 'guard' },
  { gx: 5, gy: 6, ch: '/', part: 'guard' },
  { gx: 6, gy: 6, ch: '8', part: 'guard' },
  { gx: 7, gy: 6, ch: '@', part: 'guard' },
  { gx: 8, gy: 6, ch: '8', part: 'guard' },
  { gx: 9, gy: 6, ch: '\\', part: 'guard' },
  { gx: 10, gy: 6, ch: '_', part: 'guard' },
  { gx: 11, gy: 6, ch: '_', part: 'guard' },
  { gx: 12, gy: 6, ch: '(', part: 'guard' },
  { gx: 13, gy: 6, ch: '@', part: 'guard' },
  { gx: 14, gy: 6, ch: ')', part: 'guard' },
  { gx: 1, gy: 7, ch: '`', part: 'guard' },
  { gx: 2, gy: 7, ch: '~', part: 'guard' },
  { gx: 3, gy: 7, ch: '"', part: 'guard' },
  { gx: 4, gy: 7, ch: '-', part: 'guard' },
  { gx: 5, gy: 7, ch: '=', part: 'guard' },
  { gx: 6, gy: 7, ch: ')', part: 'guard' },
  { gx: 7, gy: 7, ch: ':', part: 'guard' },
  { gx: 8, gy: 7, ch: '(', part: 'guard' },
  { gx: 9, gy: 7, ch: '=', part: 'guard' },
  { gx: 10, gy: 7, ch: '-', part: 'guard' },
  { gx: 11, gy: 7, ch: '"', part: 'guard' },
  { gx: 12, gy: 7, ch: '~', part: 'guard' },
  { gx: 13, gy: 7, ch: '`', part: 'guard' },
  { gx: 6, gy: 8, ch: '|', part: 'blade' },
  { gx: 7, gy: 8, ch: '.', part: 'blade' },
  { gx: 8, gy: 8, ch: '|', part: 'blade' },
  { gx: 6, gy: 9, ch: '|', part: 'blade' },
  { gx: 7, gy: 9, ch: 'S', part: 'blade' },
  { gx: 8, gy: 9, ch: '|', part: 'blade' },
  { gx: 6, gy: 10, ch: '|', part: 'blade' },
  { gx: 7, gy: 10, ch: '\'', part: 'blade' },
  { gx: 8, gy: 10, ch: '|', part: 'blade' },
  { gx: 6, gy: 11, ch: '|', part: 'blade' },
  { gx: 7, gy: 11, ch: '.', part: 'blade' },
  { gx: 8, gy: 11, ch: '|', part: 'blade' },
  { gx: 6, gy: 12, ch: '|', part: 'blade' },
  { gx: 7, gy: 12, ch: 'P', part: 'blade' },
  { gx: 8, gy: 12, ch: '|', part: 'blade' },
  { gx: 6, gy: 13, ch: '|', part: 'blade' },
  { gx: 7, gy: 13, ch: '\'', part: 'blade' },
  { gx: 8, gy: 13, ch: '|', part: 'blade' },
  { gx: 6, gy: 14, ch: '|', part: 'blade' },
  { gx: 7, gy: 14, ch: '.', part: 'blade' },
  { gx: 8, gy: 14, ch: '|', part: 'blade' },
  { gx: 6, gy: 15, ch: '|', part: 'blade' },
  { gx: 7, gy: 15, ch: 'U', part: 'blade' },
  { gx: 8, gy: 15, ch: '|', part: 'blade' },
  { gx: 6, gy: 16, ch: '|', part: 'blade' },
  { gx: 7, gy: 16, ch: '\'', part: 'blade' },
  { gx: 8, gy: 16, ch: '|', part: 'blade' },
  { gx: 6, gy: 17, ch: '|', part: 'blade' },
  { gx: 7, gy: 17, ch: '.', part: 'blade' },
  { gx: 8, gy: 17, ch: '|', part: 'blade' },
  { gx: 6, gy: 18, ch: '|', part: 'blade' },
  { gx: 7, gy: 18, ch: 'N', part: 'blade' },
  { gx: 8, gy: 18, ch: '|', part: 'blade' },
  { gx: 6, gy: 19, ch: '|', part: 'blade' },
  { gx: 7, gy: 19, ch: '\'', part: 'blade' },
  { gx: 8, gy: 19, ch: '|', part: 'blade' },
  { gx: 6, gy: 20, ch: '|', part: 'blade' },
  { gx: 7, gy: 20, ch: '.', part: 'blade' },
  { gx: 8, gy: 20, ch: '|', part: 'blade' },
  { gx: 6, gy: 21, ch: '|', part: 'blade' },
  { gx: 7, gy: 21, ch: 'K', part: 'blade' },
  { gx: 8, gy: 21, ch: '|', part: 'blade' },
  { gx: 6, gy: 22, ch: '|', part: 'blade' },
  { gx: 7, gy: 22, ch: '\'', part: 'blade' },
  { gx: 8, gy: 22, ch: '|', part: 'blade' },
  { gx: 6, gy: 23, ch: '\\', part: 'tip' },
  { gx: 8, gy: 23, ch: '/', part: 'tip' },
  { gx: 7, gy: 24, ch: '^', part: 'tip' }
]

// 6 floating margin annotations that flank the sword without ever overlapping the blade
export const SWORD_FLANK_MEMORIES = [
  { text: 'sehnsucht', gx: 2, gy: 11 },
  { text: 'burnt rice', gx: 2, gy: 15 },
  { text: 'stille', gx: 2, gy: 19 },
  { text: 'mondschein', gx: 12, gy: 11 },
  { text: 'cold tea', gx: 12, gy: 15 },
  { text: 'frost', gx: 12, gy: 19 },
]

export const PARCHMENT_PALETTE = {
  // Sumi Black & Dark Inks
  black: '24, 22, 20',           // rich carbon black
  dark: '48, 44, 40',            // deep charcoal stone
  darkTeal: '18, 72, 74',        // deep spruce teal
  // Mineral Teals
  teal: '28, 118, 120',          // vivid celadon teal
  tealLight: '72, 172, 170',     // pale sea-glass teal
  // Sakura Blossom Petal Inks
  sakura: '236, 136, 158',       // soft sakura rose
  sakuraLight: '248, 188, 202',  // pale sakura petal
  sakuraDeep: '202, 92, 118',    // deep camellia rose
  // Light Parchment Highlights
  light: '248, 244, 236',        // bone ivory
  lightIvory: '242, 234, 220',   // warm aged linen
}

type Anatomy =
  | { kind: 'globe'; lat: number; lon0: number }
  | { kind: 'ring'; tier: 'crepe' | 'main' | 'outer'; relRadius: number; angle0: number }

export type Particle = {
  saturnText: string
  swordCh: string
  isWord: boolean
  isSwordFlank: boolean
  fontFamily: string
  size: number
  colorSaturn: string
  colorSword: string
  anatomy: Anatomy
  gx: number
  gy: number
  x: number
  y: number
  vx: number
  vy: number
  rot: number
  alpha: number
  delay: number
  seed: number
  tone: number
  // cached target coordinates
  fx: number
  fy: number
  frot: number
  mx: number
  my: number
  mDelay: number
  rx: number
  ry: number
  colorRose: string
}

export type CloudParticle = {
  text: string
  isWord: boolean
  fontFamily: string
  size: number
  colorBase: string
  cluster: number // 0 = left bank, 1 = right bank
  relX: number
  relY: number
  x: number
  y: number
  seed: number
  floatSpeed: number
  popDelay: number
  popProgress: number
  alpha: number
}

export type LightningStrike = {
  trunk: Array<{ x: number; y: number }>
  branches: Array<Array<{ x: number; y: number }>>
  sparks: Array<{ x: number; y: number; glyph: string }>
  clusterOrigin: number
  startTime: number
  duration: number
  color: 'sakura' | 'teal'
}

type Vec = { x: number; y: number }

const rand = (seed: number) => {
  const x = Math.sin(seed * 153.3 + 269.1) * 43758.5453
  return x - Math.floor(x)
}

const clamp01 = (v: number) => Math.max(0, Math.min(1, v))
const easeCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

export type DriftState = {
  bloom: number  // expansion of the celestial ring arcs
  scatter: number // particles lifting and dispersing like cosmic dust
  morph: number   // morphing into sword.txt
}

export class WordDrifter {
  private ctx: CanvasRenderingContext2D
  private particles: Particle[] = []
  private cloudParticles: CloudParticle[] = []
  private cloudPopStart = 0
  private activeLightning: LightningStrike | null = null
  private nextLightningTime = 0
  private W = 1
  private H = 1
  private dpr = 1
  private scale = 1
  private fontScale = 1
  private sprites = new Map<string, { c: HTMLCanvasElement; hw: number; hh: number }>()
  private center: Vec = { x: 0, y: 0 }
  private pointer: Vec & { active: boolean } = { x: -9999, y: -9999, active: false }
  private shock: { x: number; y: number; t: number } | null = null
  private raf = 0
  private running = false
  private start = performance.now()
  private last = performance.now()
  private fontSerif: string
  private fontMono = '"IBM Plex Mono", ui-monospace, monospace'
  private staticMode = false
  private roseMode = false

  state: DriftState = { bloom: 0.45, scatter: 0, morph: 0 }

  private canvas: HTMLCanvasElement

  constructor(canvas: HTMLCanvasElement, opts: { word?: string; font: string }) {
    this.canvas = canvas
    const ctx = canvas.getContext('2d')
    if (!ctx) throw new Error('Canvas 2D unavailable')
    this.ctx = ctx
    this.fontSerif = opts.font
  }

  get count() {
    return this.particles.length
  }

  setStatic(v: boolean) {
    this.staticMode = v
  }

  setRoseMode(v: boolean) {
    const prev = this.roseMode
    this.roseMode = v
    if (v && !prev) {
      this.cloudPopStart = performance.now()
      this.triggerLightning(performance.now())
    }
  }

  get isRoseMode() {
    return this.roseMode
  }

  setState(s: Partial<DriftState>) {
    Object.assign(this.state, s)
  }

  resize(w: number, h: number) {
    const dprMax = Math.min(window.devicePixelRatio || 1, 2)
    this.dpr = Math.max(1, Math.min(dprMax, Math.sqrt(4.2e6 / Math.max(1, w * h))))
    this.sprites.clear()
    this.W = w
    this.H = h
    this.canvas.width = Math.round(w * this.dpr)
    this.canvas.height = Math.round(h * this.dpr)
    this.scale = Math.min(h * 0.74, w * 0.90)
    this.fontScale = Math.max(0.80, Math.min(1.20, this.scale / 600))
    // Anchor position: centered in the viewport
    this.center = { x: w * 0.52, y: h * 0.49 }

    const isInitial = this.particles.length === 0
    if (isInitial) {
      this.build()
      this.buildClouds()
    }
    this.computeMorphTargets()

    if (isInitial) {
      for (const p of this.particles) {
        p.x = p.fx + (rand(p.seed) - 0.5) * 40
        p.y = p.fy + 35 + rand(p.seed + 1) * 60
      }
    }
  }

  /**
   * Builds the dual system (words + binary + blocks).
   * 98 exact sword.txt points + 6 flanking memory annotations = 104 particles.
   */
  private build() {
    let wordIdx = 0
    let binIdx = 0
    let blkIdx = 0

    const nextItem = (i: number): { text: string; isWord: boolean } => {
      const mode = i % 3
      if (mode === 0) {
        return { text: SATURN_WORDS[wordIdx++ % SATURN_WORDS.length], isWord: true }
      } else if (mode === 1) {
        return { text: BINARY_GLYPHS[binIdx++ % BINARY_GLYPHS.length], isWord: false }
      } else {
        return { text: BLOCK_GLYPHS[blkIdx++ % BLOCK_GLYPHS.length], isWord: false }
      }
    }

    // 1. Globe of Saturn (34 particles across 5 latitudes with wide breathing space)
    const latitudes = [-0.8, -0.4, 0, 0.4, 0.8]
    const countsPerLat = [5, 8, 10, 7, 4] // sum = 34
    const latColors = [
      PARCHMENT_PALETTE.teal,
      PARCHMENT_PALETTE.black,
      PARCHMENT_PALETTE.sakura,
      PARCHMENT_PALETTE.darkTeal,
      PARCHMENT_PALETTE.tealLight,
    ]

    let swordIdx = 0

    latitudes.forEach((lat, li) => {
      const count = countsPerLat[li]
      const color = latColors[li]
      for (let i = 0; i < count; i++) {
        const lon0 = (i / count) * Math.PI * 2
        const { text, isWord } = nextItem(swordIdx)
        const target = SWORD_ASCII_POINTS[swordIdx++]
        this.addParticle({ kind: 'globe', lat, lon0 }, target, text, isWord, color)
      }
    })

    // 2. The Rings of Saturn (64 points of sword + 6 flank = 70 ring particles)
    // Ring A: Inner Crepe Ring (16 particles) - delicate sakura petal wash
    for (let i = 0; i < 16; i++) {
      const angle0 = (i / 16) * Math.PI * 2
      const relRadius = 0.27 + (i % 2) * 0.016
      const { text, isWord } = nextItem(swordIdx)
      const target = SWORD_ASCII_POINTS[swordIdx++]
      this.addParticle({ kind: 'ring', tier: 'crepe', relRadius, angle0 }, target, text, isWord, PARCHMENT_PALETTE.sakuraLight)
    }

    // Ring B: Dense Luminous Main Ring (32 particles) - mineral teal & sumi black
    for (let i = 0; i < 32; i++) {
      const angle0 = (i / 32) * Math.PI * 2
      const relRadius = 0.32 + (i % 3) * 0.016
      const { text, isWord } = nextItem(swordIdx)
      const target = SWORD_ASCII_POINTS[swordIdx++]
      const col = i % 2 === 0 ? PARCHMENT_PALETTE.teal : PARCHMENT_PALETTE.black
      this.addParticle({ kind: 'ring', tier: 'main', relRadius, angle0 }, target, text, isWord, col)
    }

    // Ring C: Outer Ring (16 sword points + 6 flank memories)
    for (let i = 0; i < 16; i++) {
      const angle0 = (i / 22) * Math.PI * 2
      const relRadius = 0.41 + (i % 2) * 0.016
      const { text, isWord } = nextItem(swordIdx)
      const target = SWORD_ASCII_POINTS[swordIdx++]
      const col = i % 2 === 0 ? PARCHMENT_PALETTE.sakura : PARCHMENT_PALETTE.tealLight
      this.addParticle({ kind: 'ring', tier: 'outer', relRadius, angle0 }, target, text, isWord, col)
    }

    // The 6 flank memory particles
    SWORD_FLANK_MEMORIES.forEach((flank, fi) => {
      const angle0 = ((16 + fi) / 22) * Math.PI * 2
      const relRadius = 0.43
      const col = fi % 2 === 0 ? PARCHMENT_PALETTE.sakuraDeep : PARCHMENT_PALETTE.teal
      this.addFlankParticle({ kind: 'ring', tier: 'outer', relRadius, angle0 }, flank, col)
    })
  }

  private addParticle(
    anatomy: Anatomy,
    target: SwordPoint,
    saturnText: string,
    isWord: boolean,
    colorSaturn: string
  ) {
    const seed = this.particles.length + 1

    // Determine color in sword based on part
    let colorSword = PARCHMENT_PALETTE.black
    if (target.part === 'pommel' || target.part === 'grip') {
      colorSword = PARCHMENT_PALETTE.dark
    } else if (target.part === 'guard') {
      colorSword = PARCHMENT_PALETTE.teal
    } else if (target.ch === 'S' || target.ch === 'P' || target.ch === 'U' || target.ch === 'N' || target.ch === 'K') {
      colorSword = PARCHMENT_PALETTE.sakuraDeep
    } else if (target.ch === '.' || target.ch === '\'') {
      colorSword = PARCHMENT_PALETTE.tealLight
    }

    const p: Particle = {
      saturnText,
      swordCh: target.ch,
      isWord,
      isSwordFlank: false,
      fontFamily: isWord ? this.fontSerif : this.fontMono,
      size: isWord ? 11 : 12.5,
      colorSaturn,
      colorSword,
      anatomy,
      gx: target.gx,
      gy: target.gy,
      seed,
      tone: 0.88 + rand(seed + 9) * 0.12,
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      rot: 0,
      alpha: 0,
      delay: 0,
      fx: 0,
      fy: 0,
      frot: 0,
      mx: 0,
      my: 0,
      mDelay: 0,
      rx: 0,
      ry: 0,
      colorRose: PARCHMENT_PALETTE.sakura,
    }
    this.particles.push(p)
    this.calculateSpecimenTarget(p, 0)
    const distFromCenter = Math.hypot(p.fx - this.center.x, p.fy - this.center.y)
    p.delay = clamp01(distFromCenter / (this.scale * 0.6)) * 1.2 + rand(seed + 4) * 0.2
    return p
  }

  private addFlankParticle(anatomy: Anatomy, flank: { text: string; gx: number; gy: number }, color: string) {
    const seed = this.particles.length + 1
    const p: Particle = {
      saturnText: flank.text,
      swordCh: flank.text,
      isWord: true,
      isSwordFlank: true,
      fontFamily: this.fontSerif,
      size: 11,
      colorSaturn: color,
      colorSword: color,
      anatomy,
      gx: flank.gx,
      gy: flank.gy,
      seed,
      tone: 1,
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      rot: 0,
      alpha: 0,
      delay: 0,
      fx: 0,
      fy: 0,
      frot: 0,
      mx: 0,
      my: 0,
      mDelay: 0,
      rx: 0,
      ry: 0,
      colorRose: color,
    }
    this.particles.push(p)
    this.calculateSpecimenTarget(p, 0)
    const distFromCenter = Math.hypot(p.fx - this.center.x, p.fy - this.center.y)
    p.delay = clamp01(distFromCenter / (this.scale * 0.6)) * 1.2 + rand(seed + 4) * 0.2
    return p
  }

  plant(text: string, from: Vec) {
    const clean = text.trim().slice(0, 14)
    if (!clean) return
    const randomTarget = SWORD_ASCII_POINTS[Math.floor(Math.random() * SWORD_ASCII_POINTS.length)]
    const p = this.addParticle(
      { kind: 'ring', tier: 'main', relRadius: 0.33, angle0: Math.random() * Math.PI * 2 },
      randomTarget,
      clean,
      true,
      PARCHMENT_PALETTE.sakuraDeep
    )
    p.x = from.x
    p.y = from.y
    p.delay = 0
    p.alpha = 1
    p.vy = -6.5
    this.computeMorphTargets()
  }

  /**
   * 3D Celestial Projection with Continuous Rotation:
   * - Globe spins along its polar axis with front/back hemisphere depth.
   * - Rings orbit along equatorial plane with Keplerian differential speeds.
   * - Front rings pass in front of globe; back rings pass behind with occlusion.
   * - Wide breathing distance between globe and rings.
   */
  private calculateSpecimenTarget(p: Particle, time: number) {
    const { bloom } = this.state
    const S = this.scale

    // Astronomical tilt: -24 degrees
    const tilt = -0.42
    const cosTilt = Math.cos(tilt)
    const sinTilt = Math.sin(tilt)

    const globeRadius = 0.15 * S
    const a = p.anatomy

    let X = 0
    let Y = 0
    let Z = 0
    let angle = 0

    if (a.kind === 'globe') {
      const spinSpeed = this.staticMode ? 0 : 0.14
      const lon = a.lon0 + time * spinSpeed

      const rLat = Math.cos(a.lat) * globeRadius
      const y0 = Math.sin(a.lat) * globeRadius
      const x0 = rLat * Math.sin(lon)
      const z0 = rLat * Math.cos(lon)

      // Tilt projection
      X = x0
      Y = y0 * cosTilt - z0 * sinTilt
      Z = y0 * sinTilt + z0 * cosTilt

      // Depth shading
      if (Z < 0) {
        p.alpha = Math.max(0.15, 0.48 + (Z / globeRadius) * 0.35)
      } else {
        p.alpha = 1.0
      }

      angle = (X / globeRadius) * 0.18
    } else if (a.kind === 'ring') {
      const spinSpeed = this.staticMode ? 0 : (a.tier === 'crepe' ? 0.11 : a.tier === 'main' ? 0.08 : 0.06)
      const curAngle = a.angle0 + time * spinSpeed

      const r = a.relRadius * S * (1 + bloom * 0.15)
      const x0 = r * Math.cos(curAngle)
      const z0 = r * Math.sin(curAngle)

      X = x0
      Y = -z0 * sinTilt
      Z = z0 * cosTilt

      if (Z < 0) {
        const distFromCenter = Math.hypot(X, Y / -sinTilt)
        if (distFromCenter < globeRadius * 1.05) {
          p.alpha = 0.08
        } else {
          p.alpha = 0.88
        }
      } else {
        p.alpha = 1.0
      }

      const dx = -Math.sin(curAngle)
      const dy = Math.cos(curAngle) * -sinTilt
      angle = Math.atan2(dy, dx)
      if (Math.cos(angle) < 0) angle += Math.PI
    }

    p.fx = this.center.x + X
    p.fy = this.center.y + Y
    p.frot = angle
  }

  /**
   * Exact 1:1 morph mapping to sword.txt template:
   * Maps each particle directly to its corresponding point in sword.txt,
   * centered vertically and scaled with exact terminal monospace proportions.
   */
  private computeMorphTargets() {
    const W = this.W
    const H = this.H
    if (!this.particles.length) return

    const cx = W / 2
    const cy = H * 0.44

    // Total height of sword on canvas (fits with ample room above the outro text)
    const totalLen = Math.min(H * 0.70, 510)
    // Row height step: 25 rows (0..24)
    const dy = totalLen / 24
    // Monospace column step: ratio ~0.54
    const dx = dy * 0.54

    const topY = cy - totalLen / 2

    this.particles.forEach((p) => {
      // In sword.txt, the central spine is at x = 7
      const targetX = cx + (p.gx - 7) * dx
      const targetY = topY + p.gy * dy

      p.mx = targetX
      p.my = targetY
      // Cascade delay from pommel down to blade tip
      p.mDelay = (p.gy / 24) * 0.40
    })

    this.computeRoseTargets()
  }

  /**
   * Reconstitutes all 104 particles into a blossoming botanical rose:
   * 16 spiral bud core + 30 middle petal cups + 30 broad outer flared petals
   * + 8 calyx sepals + 10 curving stem + 10 serrated rose leaves.
   */
  private computeRoseTargets() {
    const cx = this.center.x
    const cy = this.center.y
    const S = this.scale

    const rosePts: Array<{ x: number; y: number; col: string }> = []

    // 1. Core spiral bud (16 points) - deep sakura
    for (let i = 0; i < 16; i++) {
      const th = i * 0.72
      const r = (8 + i * 3.4) * (S / 520)
      rosePts.push({
        x: cx + r * Math.cos(th) * 1.25,
        y: (cy - 30) + r * Math.sin(th),
        col: PARCHMENT_PALETTE.sakuraDeep,
      })
    }

    // 2. Middle layered petal cups (30 points) - radiant sakura
    for (let p = 0; p < 3; p++) {
      const baseTh = p * (Math.PI * 2 / 3)
      for (let j = 0; j < 10; j++) {
        const t = (j / 9.0) * Math.PI
        const r = (38 + 18 * Math.sin(t)) * (S / 520)
        const ang = baseTh + (t - Math.PI / 2) * 0.85
        rosePts.push({
          x: cx + r * Math.cos(ang) * 1.35,
          y: (cy - 30) + r * Math.sin(ang) * 0.95,
          col: PARCHMENT_PALETTE.sakura,
        })
      }
    }

    // 3. Outer sweeping petals (30 points) - soft sakura blush
    for (let p = 0; p < 5; p++) {
      const baseTh = p * (Math.PI * 2 / 5) + 0.35
      for (let j = 0; j < 6; j++) {
        const t = (j / 5.0) * Math.PI
        const r = (78 + 34 * Math.sin(t)) * (S / 520)
        const ang = baseTh + (t - Math.PI / 2) * 0.92
        rosePts.push({
          x: cx + r * Math.cos(ang) * 1.45,
          y: (cy - 30) + r * Math.sin(ang) * 0.92,
          col: PARCHMENT_PALETTE.sakuraLight,
        })
      }
    }

    // 4. Calyx emerald sepals (8 points) - celadon teal
    for (let i = 0; i < 8; i++) {
      const t = (i - 3.5) / 3.5
      rosePts.push({
        x: cx + t * 50 * (S / 520),
        y: (cy + 25) + Math.abs(t) * 20 * (S / 520),
        col: PARCHMENT_PALETTE.teal,
      })
    }

    // 5. S-curving stem (10 points) - spruce teal
    for (let i = 0; i < 10; i++) {
      const t = i / 9.0
      rosePts.push({
        x: cx + Math.sin(t * Math.PI) * 15 * (S / 520),
        y: (cy + 42) + t * 140 * (S / 520),
        col: PARCHMENT_PALETTE.darkTeal,
      })
    }

    // 6. Left serrated rose leaf (5 points) - mineral teal
    for (let i = 0; i < 5; i++) {
      rosePts.push({
        x: cx - (20 + i * 16) * (S / 520),
        y: cy + (80 + i * 9) * (S / 520),
        col: PARCHMENT_PALETTE.teal,
      })
    }

    // 7. Right serrated rose leaf (5 points) - mineral teal
    for (let i = 0; i < 5; i++) {
      rosePts.push({
        x: cx + (20 + i * 16) * (S / 520),
        y: cy + (110 - i * 7) * (S / 520),
        col: PARCHMENT_PALETTE.teal,
      })
    }

    // Assign to particles
    this.particles.forEach((p, i) => {
      const rpt = rosePts[i % rosePts.length]
      p.rx = rpt.x
      p.ry = rpt.y
      p.colorRose = rpt.col
    })
  }

  /**
   * Puffy billowing cumulus cloud banks in Words + Binary + Blocks.
   * Positioned strategically near the rose without any overlap.
   */
  private buildClouds() {
    this.cloudParticles = []
    let wordIdx = 0
    let binIdx = 0
    let blkIdx = 0

    // Cumulus lobe geometry for natural billowing cloud forms
    const lobes = [
      { cx: 0, cy: 0, count: 8, rx: 44, ry: 22 },
      { cx: -16, cy: -26, count: 6, rx: 34, ry: 16 },
      { cx: -52, cy: 6, count: 6, rx: 30, ry: 18 },
      { cx: 46, cy: 12, count: 6, rx: 30, ry: 16 },
    ]

    for (let cluster = 0; cluster < 2; cluster++) {
      const mirror = cluster === 0 ? 1 : -1

      lobes.forEach((lobe, lobeIdx) => {
        for (let j = 0; j < lobe.count; j++) {
          const idx = lobeIdx * 10 + j + cluster * 50
          const mode = (lobeIdx + j) % 3

          let text: string
          let isWord = false
          let fontFamily: string

          if (mode === 0) {
            text = CLOUD_WORDS[wordIdx++ % CLOUD_WORDS.length]
            isWord = true
            fontFamily = this.fontSerif
          } else if (mode === 1) {
            text = CLOUD_BINARY[binIdx++ % CLOUD_BINARY.length]
            fontFamily = this.fontMono
          } else {
            text = CLOUD_BLOCKS[blkIdx++ % CLOUD_BLOCKS.length]
            fontFamily = this.fontMono
          }

          const ang = (j / lobe.count) * Math.PI * 2 + rand(idx) * 0.8
          const rad = Math.sqrt(rand(idx + 1))
          const lx = lobe.cx + Math.cos(ang) * lobe.rx * rad
          const ly = lobe.cy + Math.sin(ang) * lobe.ry * rad

          const relX = lx * mirror
          const relY = ly

          const colPick = rand(idx + 2)
          let colorBase: string
          if (colPick < 0.35) {
            colorBase = PARCHMENT_PALETTE.darkTeal
          } else if (colPick < 0.65) {
            colorBase = PARCHMENT_PALETTE.dark
          } else if (colPick < 0.82) {
            colorBase = '138, 72, 88' // dusky sakura
          } else {
            colorBase = '92, 100, 102' // slate storm mist
          }

          const size = isWord ? (11 + rand(idx + 3) * 2) : (10.5 + rand(idx + 3) * 2.5)
          const popDelay = (rand(idx + 4) * 0.30) + (cluster * 0.08)

          this.cloudParticles.push({
            text,
            isWord,
            fontFamily,
            size,
            colorBase,
            cluster,
            relX,
            relY,
            x: 0,
            y: 0,
            seed: rand(idx + 5) * 100,
            floatSpeed: 0.7 + rand(idx + 6) * 0.5,
            popDelay,
            popProgress: 0,
            alpha: 0,
          })
        }
      })
    }
  }

  /**
   * Centers for Left and Right cloud banks flanking above the rose petals.
   */
  private getCloudBankCenters() {
    const cx = this.center.x
    const cy = this.center.y
    const S = this.scale
    const scaleNorm = S / 520
    const isNarrow = this.W < 720

    // Keep safe distance from rose blossom (radius ~ 155 * scaleNorm)
    const offsetX = isNarrow
      ? Math.min(cx * 0.74, 170 * scaleNorm)
      : Math.min(cx * 0.76, 260 * scaleNorm)
    const offsetY = isNarrow
      ? (142 * scaleNorm)
      : (120 * scaleNorm)

    return {
      left: { x: cx - offsetX, y: (cy - 30) - offsetY },
      right: { x: cx + offsetX, y: (cy - 30) - (offsetY * 0.94) },
    }
  }

  /**
   * Recursive midpoint displacement for authentic jagged lightning.
   */
  private buildLightningSegment(
    ax: number, ay: number,
    bx: number, by: number,
    disp: number,
    depth: number,
    pts: Array<{ x: number; y: number }>
  ) {
    if (depth <= 0) {
      pts.push({ x: bx, y: by })
      return
    }
    const dx = bx - ax
    const dy = by - ay
    const len = Math.hypot(dx, dy) || 1
    const nx = -dy / len
    const ny = dx / len
    const offset = (Math.random() - 0.5) * disp
    const mx = (ax + bx) * 0.5 + nx * offset + (Math.random() - 0.5) * (disp * 0.25)
    const my = (ay + by) * 0.5 + ny * offset + (Math.random() - 0.5) * (disp * 0.25)
    this.buildLightningSegment(ax, ay, mx, my, disp * 0.56, depth - 1, pts)
    this.buildLightningSegment(mx, my, bx, by, disp * 0.56, depth - 1, pts)
  }

  /**
   * Triggers a vivid jagged lightning strike with branches, sparks, and cloud flash.
   */
  triggerLightning(now: number, clickX?: number, clickY?: number) {
    const centers = this.getCloudBankCenters()
    const S = this.scale
    const scaleNorm = S / 520

    let startX = 0
    let startY = 0
    let endX = 0
    let endY = 0
    let clusterOrigin = 0

    if (clickX !== undefined && clickY !== undefined) {
      const distL = Math.hypot(clickX - centers.left.x, clickY - centers.left.y)
      const distR = Math.hypot(clickX - centers.right.x, clickY - centers.right.y)
      if (distL <= distR) {
        clusterOrigin = 0
        startX = centers.left.x + (Math.random() - 0.5) * 40 * scaleNorm
        startY = centers.left.y + (Math.random() - 0.5) * 20 * scaleNorm
      } else {
        clusterOrigin = 1
        startX = centers.right.x + (Math.random() - 0.5) * 40 * scaleNorm
        startY = centers.right.y + (Math.random() - 0.5) * 20 * scaleNorm
      }
      endX = clickX
      endY = clickY
    } else {
      const mode = Math.random()
      if (mode < 0.45) {
        // Mode 0: Cloud to cloud arc across the sky above rose
        clusterOrigin = 2
        startX = centers.left.x + 30 * scaleNorm
        startY = centers.left.y + (Math.random() - 0.5) * 20 * scaleNorm
        endX = centers.right.x - 30 * scaleNorm
        endY = centers.right.y + (Math.random() - 0.5) * 20 * scaleNorm
      } else if (mode < 0.72) {
        // Mode 1: Downward strike from left bank outward
        clusterOrigin = 0
        startX = centers.left.x - 10 * scaleNorm
        startY = centers.left.y + 15 * scaleNorm
        endX = centers.left.x - (50 + Math.random() * 50) * scaleNorm
        endY = centers.left.y + (130 + Math.random() * 60) * scaleNorm
      } else {
        // Mode 2: Downward strike from right bank outward
        clusterOrigin = 1
        startX = centers.right.x + 10 * scaleNorm
        startY = centers.right.y + 15 * scaleNorm
        endX = centers.right.x + (50 + Math.random() * 50) * scaleNorm
        endY = centers.right.y + (130 + Math.random() * 60) * scaleNorm
      }
    }

    const trunk: Array<{ x: number; y: number }> = [{ x: startX, y: startY }]
    const dist = Math.hypot(endX - startX, endY - startY)
    const disp = Math.min(65 * scaleNorm, dist * 0.32)
    this.buildLightningSegment(startX, startY, endX, endY, disp, 4, trunk)

    const branches: Array<Array<{ x: number; y: number }>> = []
    const numBranches = Math.random() > 0.4 ? 2 : 1
    for (let b = 0; b < numBranches; b++) {
      if (trunk.length < 5) continue
      const branchStartIdx = Math.floor(trunk.length * (0.28 + Math.random() * 0.42))
      const root = trunk[branchStartIdx]
      const next = trunk[Math.min(trunk.length - 1, branchStartIdx + 2)]
      const baseAng = Math.atan2(next.y - root.y, next.x - root.x)
      const forkAng = baseAng + (Math.random() > 0.5 ? 0.6 : -0.6)
      const forkLen = (35 + Math.random() * 45) * scaleNorm
      const bEndX = root.x + Math.cos(forkAng) * forkLen
      const bEndY = root.y + Math.sin(forkAng) * forkLen
      const branchPts: Array<{ x: number; y: number }> = [{ x: root.x, y: root.y }]
      this.buildLightningSegment(root.x, root.y, bEndX, bEndY, disp * 0.45, 3, branchPts)
      branches.push(branchPts)
    }

    const sparks: Array<{ x: number; y: number; glyph: string }> = []
    const sparkGlyphs = ['⚡', 'ϟ', '↯', '⌁', '✦', '1', '0']
    const numSparks = 3 + Math.floor(Math.random() * 3)
    for (let s = 0; s < numSparks; s++) {
      const v = trunk[Math.floor(Math.random() * trunk.length)]
      if (v) {
        sparks.push({
          x: v.x + (Math.random() - 0.5) * 14,
          y: v.y + (Math.random() - 0.5) * 14,
          glyph: sparkGlyphs[Math.floor(Math.random() * sparkGlyphs.length)],
        })
      }
    }

    this.activeLightning = {
      trunk,
      branches,
      sparks,
      clusterOrigin,
      startTime: now,
      duration: 320,
      color: Math.random() > 0.4 ? 'sakura' : 'teal',
    }
    this.nextLightningTime = now + 1900 + Math.random() * 2200
  }

  setPointer(x: number, y: number, active: boolean) {
    this.pointer.x = x
    this.pointer.y = y
    this.pointer.active = active
  }

  burst(x: number, y: number) {
    this.shock = { x, y, t: performance.now() }
    if (this.roseMode) {
      this.triggerLightning(performance.now(), x, y)
    }
  }

  private step(now: number) {
    const dt = Math.min(0.05, (now - this.last) / 1000)
    this.last = now
    const time = (now - this.start) / 1000
    const { scatter, morph } = this.state
    const R = Math.max(75, Math.min(this.W, this.H) * 0.13)
    const shockAge = this.shock ? (now - this.shock.t) / 1000 : 99
    if (shockAge > 1.25) this.shock = null

    for (const p of this.particles) {
      this.calculateSpecimenTarget(p, time)
      const grow = this.staticMode ? 1 : clamp01((time - p.delay) / 0.95)
      if (grow <= 0) continue

      let tx = 0
      let ty = 0
      let trot = 0

      if (this.roseMode) {
        // Living breathing blooming rose animation
        const bloomPulse = Math.sin(time * 1.5 + p.seed * 0.25) * 3.5
        tx = p.rx + Math.cos(time * 1.2 + p.seed * 0.2) * 2.5
        ty = p.ry + bloomPulse
        trot = Math.sin(time * 0.8 + p.seed) * 0.04
      } else {
        const m = this.staticMode ? (morph > 0.5 ? 1 : 0) : easeCubic(clamp01(morph * 1.4 - p.mDelay))
        tx = p.fx + (p.mx - p.fx) * m
        ty = p.fy + (p.my - p.fy) * m
        trot = p.frot * (1 - m)

        if (scatter > 0 && !this.staticMode) {
          const s = scatter * (1 - m)
          tx += Math.sin(time * 0.55 + p.seed) * 50 * s + (rand(p.seed + 2) - 0.5) * this.W * 0.40 * s
          ty += -s * (100 + rand(p.seed + 3) * this.H * 0.38) + Math.cos(time * 0.48 + p.seed) * 26 * s
        }
      }

      if (this.staticMode) {
        p.x = tx
        p.y = ty
        p.rot = trot
        p.alpha = 1
        continue
      }

      let ax = (tx - p.x) * 0.055
      let ay = (ty - p.y) * 0.055

      if (this.pointer.active) {
        const dx = p.x - this.pointer.x
        const dy = p.y - this.pointer.y
        const dist = Math.hypot(dx, dy)
        if (dist < R && dist > 0.01) {
          const force = Math.pow(1 - dist / R, 2) * 8.5
          ax += (dx / dist) * force
          ay += (dy / dist) * force
        }
      }

      if (this.shock) {
        const dx = p.x - this.shock.x
        const dy = p.y - this.shock.y
        const dist = Math.hypot(dx, dy) || 1
        const ring = shockAge * 850
        const band = Math.abs(dist - ring)
        if (band < 75) {
          const force = (1 - band / 75) * 5.8 * (1 - shockAge / 1.25)
          ax += (dx / dist) * force
          ay += (dy / dist) * force
        }
      }

      p.vx = (p.vx + ax) * 0.82
      p.vy = (p.vy + ay) * 0.82
      p.x += p.vx * dt * 60
      p.y += p.vy * dt * 60
      p.rot += (trot - p.rot) * 0.12
      p.alpha += (grow - p.alpha) * 0.09
    }

    // Animate cloud particles with elastic pop-up and gentle atmospheric float
    if (this.roseMode) {
      const elapsed = (now - this.cloudPopStart) / 1000
      const centers = this.getCloudBankCenters()
      const scaleNorm = this.scale / 520

      for (const cp of this.cloudParticles) {
        const t = clamp01((elapsed - cp.popDelay) / 0.42)
        const popCurve = t === 0 ? 0 : (t === 1 ? 1 : 1 + Math.sin(t * Math.PI) * 0.22 * (1 - t * 0.4))
        cp.popProgress += (popCurve - cp.popProgress) * 0.20
        cp.alpha += (clamp01(t * 1.8) - cp.alpha) * 0.18

        const floatX = Math.cos(time * cp.floatSpeed + cp.seed) * 4.5
        const floatY = Math.sin(time * (cp.floatSpeed * 1.2) + cp.seed * 1.5) * 3.8
        const bank = cp.cluster === 0 ? centers.left : centers.right
        const targetX = bank.x + cp.relX * scaleNorm + floatX
        const targetY = bank.y + cp.relY * scaleNorm + floatY

        if (cp.x === 0 && cp.y === 0) {
          cp.x = targetX
          cp.y = targetY
        } else {
          cp.x += (targetX - cp.x) * 0.16
          cp.y += (targetY - cp.y) * 0.16
        }
      }

      // Trigger periodic atmospheric lightning strikes
      if (now >= this.nextLightningTime) {
        this.triggerLightning(now)
      }
    } else {
      for (const cp of this.cloudParticles) {
        cp.popProgress += (0 - cp.popProgress) * 0.22
        cp.alpha += (0 - cp.alpha) * 0.20
      }
    }

    if (this.activeLightning && (now - this.activeLightning.startTime) > this.activeLightning.duration) {
      this.activeLightning = null
    }
  }

  private sprite(text: string, font: string, size: number, color: string) {
    const key = `${color}|${size}|${font}|${text}`
    let s = this.sprites.get(key)
    if (s) return s

    const px = size * this.fontScale * this.dpr
    const c = document.createElement('canvas')
    const g = c.getContext('2d')!
    g.font = `${px}px ${font}`
    c.width = Math.max(1, Math.ceil(g.measureText(text).width + 6))
    c.height = Math.max(1, Math.ceil(px * 1.35))
    g.font = `${px}px ${font}`
    g.textBaseline = 'middle'
    g.fillStyle = `rgb(${color})`
    g.fillText(text, 3, c.height / 2)

    s = { c, hw: c.width / 2, hh: c.height / 2 }
    this.sprites.set(key, s)
    return s
  }

  private draw() {
    const { ctx, dpr } = this
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    const m = this.state.morph
    // Retain clean monospace proportions
    const scaleFactor = 1 - m * 0.05

    for (const p of this.particles) {
      if (p.alpha < 0.01) continue

      let currentText: string
      let currentFont: string
      let currentColor: string
      let currentSize: number

      if (this.roseMode) {
        currentText = p.saturnText
        currentFont = p.fontFamily
        currentColor = p.colorRose
        currentSize = p.isWord ? 11 : 12.5
      } else {
        const isSwordState = m > 0.48
        currentText = isSwordState ? p.swordCh : p.saturnText
        currentFont = isSwordState && !p.isSwordFlank ? this.fontMono : p.fontFamily
        currentColor = isSwordState ? p.colorSword : p.colorSaturn
        currentSize = isSwordState && !p.isSwordFlank ? 14 : p.size
      }

      const sp = this.sprite(currentText, currentFont, currentSize, currentColor)
      const c = Math.cos(p.rot) * scaleFactor
      const s = Math.sin(p.rot) * scaleFactor

      ctx.setTransform(c, s, -s, c, p.x * dpr, p.y * dpr)
      const alphaBoost = p.alpha * (p.tone * (1 - m * 0.2) + m * 0.98)
      ctx.globalAlpha = Math.min(1, alphaBoost)
      ctx.drawImage(sp.c, -sp.hw, -sp.hh)
    }

    // Render clouds and lightning
    const anyCloudVisible = this.cloudParticles.some(cp => cp.alpha > 0.01)
    if (anyCloudVisible || this.activeLightning) {
      const now = performance.now()
      let flashIntensity = 0
      let flashOrigin = -1

      if (this.activeLightning) {
        const age = (now - this.activeLightning.startTime) / this.activeLightning.duration
        if (age < 0.20) {
          flashIntensity = Math.sin((age / 0.20) * Math.PI)
        } else if (age < 0.32) {
          flashIntensity = 0.22
        } else if (age < 0.68) {
          flashIntensity = 0.88 + Math.random() * 0.12
        } else {
          flashIntensity = Math.max(0, 1 - (age - 0.68) / 0.32)
        }
        flashOrigin = this.activeLightning.clusterOrigin
      }

      // 1. Ambient atmospheric glow around cloud banks when lightning flashes
      if (flashIntensity > 0.05 && this.activeLightning) {
        const centers = this.getCloudBankCenters()
        const flashColors = this.activeLightning.color === 'sakura'
          ? ['245, 184, 198', '223, 122, 146']
          : ['188, 226, 224', '82, 168, 166']

        const drawAura = (bx: number, by: number) => {
          const grad = ctx.createRadialGradient(bx * dpr, by * dpr, 6 * dpr, bx * dpr, by * dpr, 130 * dpr)
          grad.addColorStop(0, `rgba(${flashColors[0]}, ${flashIntensity * 0.32})`)
          grad.addColorStop(0.5, `rgba(${flashColors[1]}, ${flashIntensity * 0.16})`)
          grad.addColorStop(1, 'rgba(246, 241, 232, 0)')
          ctx.setTransform(1, 0, 0, 1, 0, 0)
          ctx.fillStyle = grad
          ctx.beginPath()
          ctx.arc(bx * dpr, by * dpr, 130 * dpr, 0, Math.PI * 2)
          ctx.fill()
        }

        if (flashOrigin === 0 || flashOrigin === 2) drawAura(centers.left.x, centers.left.y)
        if (flashOrigin === 1 || flashOrigin === 2) drawAura(centers.right.x, centers.right.y)
      }

      // 2. Draw Lightning Bolt
      if (this.activeLightning && flashIntensity > 0.02) {
        const bolt = this.activeLightning
        const haloColor = bolt.color === 'sakura' ? 'rgba(223, 122, 146, ' : 'rgba(82, 168, 166, '
        const shadowCol = bolt.color === 'sakura' ? '#df7a92' : '#52a8a6'

        ctx.setTransform(1, 0, 0, 1, 0, 0)
        ctx.lineCap = 'round'
        ctx.lineJoin = 'miter'

        const drawPath = (pts: Array<{ x: number; y: number }>, width: number, alpha: number) => {
          if (pts.length < 2) return
          ctx.beginPath()
          ctx.moveTo(pts[0].x * dpr, pts[0].y * dpr)
          for (let i = 1; i < pts.length; i++) {
            ctx.lineTo(pts[i].x * dpr, pts[i].y * dpr)
          }
          ctx.lineWidth = width * dpr
          ctx.strokeStyle = `${haloColor}${alpha * flashIntensity})`
          ctx.shadowBlur = 12 * dpr
          ctx.shadowColor = shadowCol
          ctx.stroke()
        }

        // Pass 1: Outer glowing halo on trunk and branches
        drawPath(bolt.trunk, 3.2, 0.85)
        bolt.branches.forEach(b => drawPath(b, 1.8, 0.70))

        // Pass 2: Bright electric core
        ctx.shadowBlur = 3 * dpr
        ctx.shadowColor = '#ffffff'
        ctx.strokeStyle = `rgba(255, 255, 255, ${flashIntensity * 0.95})`
        ctx.lineWidth = 1.3 * dpr
        if (bolt.trunk.length >= 2) {
          ctx.beginPath()
          ctx.moveTo(bolt.trunk[0].x * dpr, bolt.trunk[0].y * dpr)
          for (let i = 1; i < bolt.trunk.length; i++) {
            ctx.lineTo(bolt.trunk[i].x * dpr, bolt.trunk[i].y * dpr)
          }
          ctx.stroke()
        }

        // Pass 3: Electric spark glyphs along vertices
        ctx.shadowBlur = 0
        bolt.sparks.forEach(sp => {
          const spColor = flashIntensity > 0.5 ? '255, 255, 255' : PARCHMENT_PALETTE.sakuraDeep
          const sparkSprite = this.sprite(sp.glyph, this.fontMono, 11, spColor)
          ctx.setTransform(1, 0, 0, 1, sp.x * dpr, sp.y * dpr)
          ctx.globalAlpha = flashIntensity * 0.9
          ctx.drawImage(sparkSprite.c, -sparkSprite.hw, -sparkSprite.hh)
        })
      }

      // 3. Draw Cloud Particles
      for (const cp of this.cloudParticles) {
        if (cp.alpha < 0.01) continue

        let currentColor = cp.colorBase
        if (flashIntensity > 0.35 && (flashOrigin === cp.cluster || flashOrigin === 2)) {
          currentColor = flashIntensity > 0.7
            ? (this.activeLightning?.color === 'sakura' ? PARCHMENT_PALETTE.sakuraDeep : PARCHMENT_PALETTE.teal)
            : PARCHMENT_PALETTE.sakura
        }

        const sp = this.sprite(cp.text, cp.fontFamily, cp.size, currentColor)
        const scaleP = Math.max(0.01, cp.popProgress)

        ctx.setTransform(scaleP, 0, 0, scaleP, cp.x * dpr, cp.y * dpr)
        ctx.globalAlpha = Math.min(1, cp.alpha * 0.92)
        ctx.drawImage(sp.c, -sp.hw, -sp.hh)
      }
      ctx.globalAlpha = 1
    }
    ctx.globalAlpha = 1
  }

  private loop = (now: number) => {
    if (!this.running) return
    this.step(now)
    this.draw()
    this.raf = requestAnimationFrame(this.loop)
  }

  play() {
    if (this.running) return
    this.running = true
    this.last = performance.now()
    this.raf = requestAnimationFrame(this.loop)
  }

  pause() {
    this.running = false
    cancelAnimationFrame(this.raf)
  }

  dispose() {
    this.pause()
    this.particles = []
    this.cloudParticles = []
    this.activeLightning = null
  }
}
