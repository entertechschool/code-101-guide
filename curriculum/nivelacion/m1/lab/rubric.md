# Rúbrica - Lab Nivelación M1: Mi Perfil Personal

> **Total:** 100 puntos (4 criterios × 25 puntos)
>
> Misma rúbrica que el Lab oficial de la Clase 04, adaptada al formato autodirigido.

---

## Criterio 1: HTML Semántico y Accesibilidad (25 pts)

Evalúa el uso correcto de etiquetas HTML5 semánticas y atributos de accesibilidad.

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 25 | Usa `header`, `nav`, `main`, `section`, `footer` correctamente. Todas las imágenes tienen `alt` descriptivo. Anclas con `href="#id"` funcionan. Estructura jerárquica clara (un solo `h1`, después `h2`, `h3`). |
| **Bueno** | 20 | Usa la mayoría de etiquetas semánticas. La mayoría de imágenes tienen `alt`. Pequeñas inconsistencias en jerarquía. |
| **Satisfactorio** | 15 | Usa al menos 2-3 etiquetas semánticas. Alt presente solo en algunas imágenes. Estructura plana (todo en `div`). |
| **Bajo** | 10 | Solo usa `div` y `span`. Sin `alt`. Sin estructura semántica. |

**Evidencia a revisar:**
- Inspeccionar el HTML con DevTools (F12 → Elements).
- Verificar que cada `img` tenga atributo `alt`.

---

## Criterio 2: CSS y Box Model (25 pts)

Evalúa el dominio de selectores, propiedades CSS y manejo del Box Model.

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 25 | Selectores variados (tag, class, id) usados apropiadamente. Box Model respetado: padding/margin coherentes. CSS organizado por secciones (header, sobre-mi, cards, contacto, footer). |
| **Bueno** | 20 | Selectores correctos. Padding/margin razonables. Estilos consistentes. |
| **Satisfactorio** | 15 | Estilos aplicados pero con inconsistencias visibles. Mucho CSS repetido. |
| **Bajo** | 10 | Estilos mínimos o no funcionan. Selectores incorrectos. |

**Evidencia a revisar:**
- Abrir `styles.css` y revisar uso de selectores.
- Verificar propiedades de espaciado en DevTools (panel "Computed").

---

## Criterio 3: Diseño Visual (25 pts)

Evalúa la coherencia visual: tipografía, paleta de colores y proporciones.

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 25 | Tipografía de Google Fonts aplicada y consistente. Paleta de 3-4 colores coherente y aplicada en todo el sitio. Espaciado proporcional entre elementos. Diseño se ve profesional. |
| **Bueno** | 20 | Tipografía y paleta aplicadas con coherencia mayoritaria. Pequeños desajustes visuales. |
| **Satisfactorio** | 15 | Cambios de tipografía/colores presentes pero incoherentes (mezcla de estilos). |
| **Bajo** | 10 | Estilos por defecto del navegador. Sin tipografía personalizada. |

**Evidencia a revisar:**
- Verificar que `<link>` o `@import` de Google Fonts esté presente.
- Revisar coherencia visual recorriendo el sitio.

---

## Criterio 4: Layout con Flexbox (25 pts)

Evalúa el dominio de Flexbox y los estados hover.

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 25 | Header con logo + navegación en horizontal usando Flexbox. Cards de favoritos en grid Flexbox con `gap`. Estados hover con `transition` suave (no abrupto). `flex-wrap` para no romperse en pantallas pequeñas. |
| **Bueno** | 20 | Flexbox aplicado correctamente en al menos 2 lugares (header + cards). Hover presente con transición. |
| **Satisfactorio** | 15 | Flexbox aplicado pero con problemas (alineación rara, sin `gap`, sin wrap). Hover sin transición. |
| **Bajo** | 10 | No usa Flexbox o lo usa incorrectamente. Sin hover states. |

**Evidencia a revisar:**
- Inspeccionar `display: flex` en el header y en el contenedor de cards.
- Pasar el mouse sobre cards y verificar transición.

---

## Escala de Calificación

| Rango | Nota | Descripción |
|-------|------|-------------|
| 90-100 | A | Excelente — Dominio completo del M1 |
| 80-89 | B | Bueno — Comprensión sólida |
| 70-79 | C | Satisfactorio — Cumple requisitos mínimos |
| < 70 | F | Necesita mejora — Repetir partes del lab |

---

## Entregables Requeridos

1. **URL del repositorio en GitHub:** `https://github.com/[usuario]/mi-perfil-personal`
2. **Captura de pantalla** del sitio funcionando con Live Server.

---

## Notas para el Evaluador

- **Es un lab autodirigido.** El alumno trabajó solo, así que la coherencia del producto final pesa más que la perfección técnica de cada detalle.
- **Verificar el `git log`:** debe haber al menos 3 commits descriptivos para evidenciar trabajo iterativo.
- **Preguntar conceptos básicos:** ¿qué hace `display: flex`? ¿por qué usar `header` en lugar de `div`? — para confirmar que entendió, no solo copió.
- Si el alumno usa este lab para recuperarse del M1, **considerar darle 1 oportunidad de iteración** si saca menos de 70 antes de marcar definitivo.
