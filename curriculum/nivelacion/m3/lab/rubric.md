# Rúbrica - Lab Nivelación M3: Mi Mapa de Sueños

> **Total:** 100 puntos (4 criterios × 25 puntos)
>
> Adaptación de la rúbrica del Lab oficial de la Clase 12, ajustada para un proyecto **integrador de los 3 módulos** escrito **sin IA ni Figma** (HTML/CSS/JS a mano).

---

## Criterio 1: HTML, CSS y Diseño Visual — Módulo 1 (25 pts)

Evalúa el dominio de los fundamentos de HTML semántico, CSS, Flexbox y tipografía.

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 25 | HTML semántico correcto (`header`, `main`, `section`, `article`, `footer`). CSS organizado con paleta coherente, Flexbox aplicado para layout vertical de cards (`flex-direction: column`, `gap`), Google Fonts cargada en el `<head>` y aplicada en `body`, hover con `transition` suave. Espaciado proporcional. |
| **Bueno** | 20 | Usa la mayoría de etiquetas semánticas. Paleta aplicada con consistencia mayoritaria. Flexbox correcto. Google Fonts presente. Hover con transición básica. Pequeños desajustes visuales. |
| **Satisfactorio** | 15 | Estructura básica funcional pero con etiquetas no semánticas (`div` en todo). Paleta incoherente. Flexbox aplicado con problemas (sin `gap`, sin `flex-direction`). Sin Google Fonts. Hover sin transición. |
| **Bajo** | 10 | Solo usa `div`. Estilos por defecto del navegador o sin paleta personalizada. No usa Flexbox. Sin hover ni Google Fonts. |

**Evidencia a revisar:**

- Abrir `index.html` y verificar etiquetas semánticas (no solo `div`).
- Abrir `styles.css` y verificar `display: flex` en `.lista-suenos`.
- Verificar `<link>` de Google Fonts en el `<head>`.
- Pasar el mouse sobre cards en el sitio publicado y verificar transición suave.

---

## Criterio 2: Responsive, Git y Publicación — Módulo 2 (25 pts)

Evalúa el diseño responsive con DevTools, el uso de Git con commits descriptivos y la publicación en GitHub Pages.

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 25 | Responsive verificado en móvil (375px) y desktop (1440px+) sin scroll horizontal. Media query implementada en `styles.css` (`@media (max-width: 600px)`). **3+ commits descriptivos** en el historial. GitHub Pages funcionando con URL pública sin errores. |
| **Bueno** | 20 | Responsive parcial (un breakpoint con problemas menores). Media query presente pero básica. 2-3 commits. Publicado con errores menores. |
| **Satisfactorio** | 15 | Responsive roto en algún tamaño (scroll horizontal en móvil o cards estiradas en desktop). 1-2 commits. Publicado con problemas visuales. |
| **Bajo** | 10 | No responsive (se rompe en móvil) o no publicado. Sin media queries. 1 commit o ninguno. URL rota o 404. |

**Evidencia a revisar:**

- Abrir la URL de GitHub Pages en DevTools con vista de 375px y 1440px+, verificar ausencia de scroll horizontal.
- Abrir `styles.css` y buscar `@media`.
- Ejecutar `git log --oneline` en el repositorio para validar cantidad y descripción de commits.
- Validar que la URL pública existe y carga sin errores en una ventana de incógnito.

---

## Criterio 3: JavaScript Funcional — Módulo 3 (25 pts)

Evalúa que el JavaScript funciona correctamente y el alumno comprende lo que escribió.

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 25 | El archivo `script.js` existe y está vinculado en el HTML antes de `</body>`. Al hacer click en cualquier sueño se activa/desactiva visualmente el estado "logrado" (reversible). El código usa **función helper con parámetros** (`function alternarLogrado(sueno, estaLogrado)`), `getElementById` por cada sueño, `addEventListener('click', ...)`, `style.backgroundColor` / `style.opacity` / `style.textDecoration` y variables booleanas para el estado. El alumno **sabe explicar línea por línea** qué hace su código. Bonus: contador de logrados implementado con `textContent`. |
| **Bueno** | 20 | El click funciona en todos los sueños y es reversible. Código funcional pero ligeramente desorganizado o con nombres de variables poco descriptivos. El alumno explica la mayoría del código. |
| **Satisfactorio** | 15 | El click funciona solo en algunos sueños (ej: solo el primero), o no es reversible (una vez logrado, no se puede deshacer). El alumno no puede explicar bien qué hace `addEventListener` o la función `alternarLogrado`. |
| **Bajo** | 10 | JavaScript no funciona, no fue implementado, o el alumno copió el código sin entenderlo y no puede explicar ninguna parte. |

**Evidencia a revisar:**

- Abrir `script.js` en VS Code: verificar que existe y tiene el código esperado.
- Verificar que `<script src="script.js"></script>` está antes de `</body>` en `index.html`.
- Abrir la URL pública y hacer click en varios sueños: el cambio debe ser reversible.
- **Preguntar al estudiante:**
  - "¿Qué hace `document.getElementById('sueno-1')`?"
  - "¿Qué hace `addEventListener('click', funcion)`?"
  - "¿Para qué sirve la variable `estado1`? ¿Qué pasaría si no la tuviéramos?"
  - "¿Para qué definimos la función `alternarLogrado` con parámetros, en lugar de copiar las líneas `style.xxx` en cada listener?"
  - "¿Por qué `<script>` va al final del `<body>` y no en el `<head>`?"

---

## Criterio 4: Coherencia y Personalización (25 pts)

Evalúa que el sitio refleje al alumno como persona, no que parezca el template literal copiado.

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 25 | Contenido **100% personal**: nombre real en `<title>` y `<footer>`, 6 sueños propios y específicos (no genéricos tipo "ser feliz"), paleta de colores aplicada coherentemente en todo el sitio. Footer con créditos personalizados. |
| **Bueno** | 20 | Contenido personal en su mayoría (nombre y sueños propios). Pequeñas inconsistencias visuales o algún sueño genérico. |
| **Satisfactorio** | 15 | Contenido parcialmente personal. Algunos sueños son del ejemplo del lab, paleta poco aplicada. |
| **Bajo** | 10 | Sin personalización: nombre genérico tipo "[Tu Nombre]" sin reemplazar, sueños literales del template ("Sueño 1", "Sueño 2"), paleta del template sin cambiar. |

**Evidencia a revisar:**

- Abrir la URL pública y revisar contenido: ¿hay un nombre real? ¿los sueños son específicos y personales?
- Comparar la paleta del sitio con el template del lab — debe ser distinta y coherente.
- Verificar el footer.

---

## Escala de Calificación

| Rango | Nota | Descripción |
|-------|------|-------------|
| 90-100 | A | Excelente — Dominio integrador completo del curso (M1 + M2 + M3) |
| 80-89 | B | Bueno — Comprensión sólida con áreas menores a mejorar |
| 70-79 | C | Satisfactorio — Cumple requisitos mínimos |
| < 70 | F | Necesita mejora — No cumple requisitos mínimos |

---

## Entregables Requeridos

1. **URL de GitHub Pages:** `https://[usuario].github.io/mi-mapa-de-suenos/`
2. **URL del repositorio:** `https://github.com/[usuario]/mi-mapa-de-suenos`

---

## Notas para el Evaluador

- **Lab autodirigido e integrador:** el alumno trabajó solo y debe demostrar comprensión de los 3 módulos completos. La coherencia del producto final pesa más que la perfección técnica de cada detalle.
- **Sin IA ni Figma:** este lab se hace **a mano**. El alumno copia bloques del lab y los personaliza. Si nota uso de Claude/ChatGPT en el código (estilo de comentarios, complejidad innecesaria), preguntar comprensión para validar.
- **El JavaScript es la pieza clave del M3:** si el alumno no puede explicar `addEventListener` o la función `alternarLogrado` (con sus 2 parámetros), considerarlo señal clara de copy-paste sin comprensión. Marcar bajo en Criterio 3.
- **Verificar el `git log`:** debe haber al menos 3 commits descriptivos para puntaje completo en Criterio 2.
- **Preguntar comprensión técnica:**
  - "¿Por qué pones `<script>` al final del `<body>`?"
  - "¿Qué pasaría si quitamos la función `alternarLogrado` y copiamos las 8 líneas de `style.xxx` dentro de cada listener?"
  - "¿Para qué sirve cada uno de los 2 parámetros de `alternarLogrado(sueno, estaLogrado)`?"
  - "¿Qué hace `@media (max-width: 600px)`?"
- Si el alumno saca menos de 70, **considerar darle 1 oportunidad de iteración** antes de marcar definitivo, igual que en M1 y M2 nivelación.
