# Image Prompts — Clase 04: Layout Moderno con Flexbox

> Prompts para generar imagenes con AI. Cada imagen corresponde a un `<img src="...">` en `index.html`.

---

## flex-axes.png

Technical diagram of CSS Flexbox axes system on a dark background.

LAYOUT:
- Large horizontal rectangle in the center representing a flex container (thin gray #94a3b8 border, dark fill #161b22)
- Inside: exactly 3 small rounded rectangles side by side representing flex items (gray fill #2d333b, light border #94a3b8)
- Items are evenly spaced inside the container

MAIN AXIS (horizontal):
- A long horizontal arrow below the container, pointing left to right
- Arrow color: MUST be purple #d946ef (solid, bold, glowing slightly)
- Label below arrow: "Main Axis → justify-content" in purple #d946ef, bold sans-serif
- Below the label, 3 mini-diagrams side by side:
  - "flex-start": 3 small purple dots clustered to the left of a rounded dark box
  - "center": 3 small purple dots clustered in the center of a rounded dark box
  - "space-between": 3 small purple dots spread evenly across a rounded dark box
- Each mini-diagram inside a rounded rectangle (#161b22 fill, thin #94a3b8 border)
- Value names above each in monospace light gray #e2e8f0

CROSS AXIS (vertical):
- A tall vertical arrow to the left of the container, pointing top to bottom
- Arrow color: MUST be green #4ade80 (solid, bold, glowing slightly)
- Label next to arrow (rotated): "Cross Axis → align-items" in green #4ade80, bold sans-serif
- To the left, 3 mini-diagrams stacked vertically:
  - "flex-start": 3 small green dots at the top of a rounded dark box
  - "center": 3 small green dots in the middle of a rounded dark box
  - "stretch": 3 tall green rectangles filling full height of a rounded dark box
- Each mini-diagram inside a rounded rectangle (#161b22 fill, thin #94a3b8 border)
- Value names in monospace light gray #e2e8f0

STYLE RULES:
- Background: MUST be dark #0d1117, no texture, no gradient
- All structural borders and secondary text: gray #94a3b8
- Primary text/labels: light #e2e8f0
- ONLY TWO accent colors allowed: purple #d946ef and green #4ade80
- NO white background, NO red, blue, yellow, orange
- Subtle glow effect on the colored arrows to make them pop
- Typography: clean sans-serif for labels, monospace for CSS property names
- No 3D effects, no heavy shadows, no decorative elements
- Style: modern dark-mode technical diagram, like from a premium coding course

DIMENSIONS: 960x540 pixels, horizontal orientation
