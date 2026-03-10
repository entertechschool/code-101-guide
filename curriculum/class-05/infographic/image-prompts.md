# Image Prompts — Clase 05: Setup del Desarrollador Moderno

> Prompts para generar imágenes con AI. Cada imagen corresponde a un `<img src="...">` en `index.html`.

---

## git-flow.png

Technical diagram showing the Git workflow as a left-to-right pipeline with 4 stages on a dark background.

LAYOUT (left to right):
- Stage 1: "Working Directory" — a rounded rectangle with a code file icon inside, labeled "Editas archivos" below in light text
- Stage 2: "Staging Area" — a rounded rectangle with a checklist icon, labeled "git add" below
- Stage 3: "Local Repository" — a rounded rectangle with a clock/history icon, labeled "git commit" below
- Stage 4: "GitHub (Remote)" — a rounded rectangle with a cloud icon, labeled "git push" below
- Between each stage: a bold arrow connecting them left to right
- Arrow from Stage 1 to 2: colored purple #d946ef, labeled "git add" on the arrow
- Arrow from Stage 2 to 3: colored green #4ade80, labeled "git commit" on the arrow
- Arrow from Stage 3 to 4: colored blue #93c5fd, labeled "git push" on the arrow

DETAIL:
- Each stage box has a thin gray border (#94a3b8) and dark fill (#161b22)
- Stage labels inside boxes in light text #e2e8f0, bold sans-serif
- Command labels on arrows in their respective accent color, monospace font
- Below the pipeline, a subtle dashed line separates "Tu computadora" (stages 1-3) from "La nube" (stage 4)
- "Tu computadora" label on the left in muted gray #64748b
- "La nube" label on the right in muted gray #64748b

**OBLIGATORIO (colores):**
- Fondo: #0d1117 (dark, matchea --card-bg de la infografía)
- Texto/labels: #e2e8f0 (claro)
- Flecha git add: #d946ef (púrpura)
- Flecha git commit: #4ade80 (verde)
- Flecha git push: #93c5fd (azul)
- Stage boxes: #161b22 fill, #94a3b8 border

**PROHIBIDO:**
- Fondo blanco o claro
- Colores fuera de la paleta (#d946ef, #4ade80, #93c5fd, #fb923c)
- Texturas, gradientes 3D, elementos decorativos
- Flechas genéricas grises — cada flecha DEBE tener su color de acento

**GRAYSCALE (todo lo demás):**
- Estructuras/bordes: #94a3b8
- Superficies internas: #161b22
- Texto secundario/separadores: #64748b

DIMENSIONS: 960x540 pixels, horizontal orientation
