<div align="center">

# Deepdrift

### An ocean of quiet memories, orbiting until they become a sword.

<p><em>A small, scroll-driven canvas poem built with React, TypeScript, and GSAP.</em></p>

<p><a href="#experience">Experience</a> · <a href="#run-locally">Run locally</a> · <a href="#how-it-works">How it works</a></p>

</div>

<br />

> **Deepdrift is an interactive meditation on keeping and releasing.** Words, binary fragments, and block glyphs gather into a celestial body. Scroll through them slowly and the orbit loosens, the particles scatter, and a hand-drawn sword emerges from the source text.

```text
                              .  *       .
                   .     .          0 1       .
             .          .       .        .
                         .   sehnsucht
                .    cold tea       .       .
          .              .  .  .
       .        .     .-'       '-.     .
             .      .'    DEEP     '.
                   /      DRIFT      \
          .       ;   0 1 0 1 0 1     ;       .
                  |       *           |
          .       ;   first snow      ;
                   \               /
             .      '.           .'       .
                       '-._____.-'
                   .       | |       .
                         .  | |  .
                              ^
                         scroll to release
```

## Experience

Deepdrift is designed as a single, uninterrupted scene rather than a collection of pages.

| Gesture | What happens |
| --- | --- |
| **Scroll** | The Saturn-like word cloud blooms, scatters, and resolves into the sword. |
| **Move the pointer** | Nearby particles respond to your presence. |
| **Click or tap the canvas** | A local burst ripples through the field. |
| **Choose `bloom`** | The sword gives way to rose petals, cloud banks, and occasional lightning. |
| **Choose `return`** | Return to the original celestial orbit. |

The experience also respects `prefers-reduced-motion`: animation is simplified, while the visual states remain available.

## The small mythology

The scene is built from a few deliberately tangible materials:

- **Saturn** — remembered words such as `sehnsucht`, `cold tea`, `old dog`, and `first snow` orbit in a kinetic field.
- **Release** — scroll progress drives the transition from orbit to scatter to form.
- **The sword** — the final shape is reconstructed from [`sword.txt`](./sword.txt), preserving its characters and spatial arrangement.
- **Bloom** — a second state transforms the released field into clouds and rose-colored weather.

```text
       orbit                 release                    bloom

     ( words )       words  .  .  .  words       .  .  .  .  .
    ( 0 1 0 1 )   .       .     .       .      .  cloud cloud  .
     (  *  *  )       .       \ | /       .       .  /|\  .
       \ | /                 -- + --              -- + --
        \|/              .    / | \    .          .  |  .
         O                    .  .  .             petals
         |                         |                 |
         |                         |                 |
      memories                 sword.txt           lightning
```

## How it works

The project has three principal layers:

```text
DeepdriftHero.tsx
├── scene lifecycle, pointer input, and accessibility state
├── Lenis + GSAP scroll orchestration
└── WordDrifter canvas engine
    ├── word, binary, and block particles
    ├── sword.txt coordinate reconstruction
    ├── bloom clouds and lightning
    └── resize, visibility, and reduced-motion handling
```

### Technology

- [React](https://react.dev/) 19 for the scene shell and UI state
- [TypeScript](https://www.typescriptlang.org/) for the particle model and interaction engine
- [Vite](https://vite.dev/) for development and production builds
- [GSAP](https://gsap.com/) + [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) for the scroll narrative
- [Lenis](https://lenis.darkroom.engineering/) for smooth scrolling
- Canvas 2D for the particle field, cloud banks, and lightning
- Instrument Serif, Inter, and IBM Plex Mono for the editorial / archival voice

## Run locally

### Requirements

- Node.js 20 or newer
- npm

### Start the development server

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite, usually `http://localhost:5173`.

### Useful commands

```bash
npm run build    # type-check and create a production build
npm run lint     # run Oxlint
npm run preview  # preview the production build locally
```

## Project map

```text
src/
├── DeepdriftHero.tsx  # scene composition and interaction lifecycle
├── WordDrifter.ts     # canvas particle and bloom engine
├── deepdrift.css      # parchment, typography, layout, and motion styles
└── main.tsx           # React entry point and font loading

sword.txt              # source ASCII sword reconstructed in the final scene
index.html             # document shell and page metadata
```

## Design notes

The visual language is intentionally restrained: warm parchment, mineral teal, sakura rose, sumi black, and monospace marginalia. The background grain is generated at runtime so the scene feels printed and slightly alive without requiring a texture asset.

The canvas pauses when the page is hidden or the scene leaves the viewport. Resize observers keep the particle field fitted to the stage, and a graceful error state keeps the surrounding text present if Canvas 2D is unavailable.

<div align="center">

<br />

*Every word here is something I did not let go.*

</div>
