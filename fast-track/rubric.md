# Rúbrica - Mi Portfolio Dev (Fast-Track)

> **Total:** 100 puntos (4 criterios × 25 puntos)

---

## Criterio 1: Estructura y Git (25 pts)

Evalúa el uso de HTML semántico, formularios y control de versiones.

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 25 | 5 secciones semánticas completas (nav, hero, about, skills, contact, footer). Formulario con `<label>`, `<input>`, `<textarea>` correctamente asociados. 4+ commits con mensajes descriptivos que reflejan el progreso diario. |
| **Bueno** | 20 | 4 secciones semánticas. Formulario presente con campos básicos. 3 commits con mensajes razonables. |
| **Satisfactorio** | 15 | 3 secciones semánticas. Formulario básico. 2 commits. |
| **Bajo** | 10 | Menos de 3 secciones, formulario ausente o incompleto. 1 commit o mensajes genéricos ("update", "fix"). |

**Evidencia a revisar:**
- `git log --oneline` en el repositorio
- Inspeccionar HTML en DevTools para verificar etiquetas semánticas
- Verificar que `<label for="">` coincida con `<input id="">`

---

## Criterio 2: Diseño Responsive (25 pts)

Evalúa el uso de CSS, Flexbox, media queries y diseño adaptable.

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 25 | Flexbox aplicado en nav, cards y footer. Media query funcional con breakpoint a 768px. Sin scroll horizontal en móvil. CSS organizado con variables. Diseño responsive sin problemas visuales. |
| **Bueno** | 20 | Flexbox en al menos 2 áreas. Media query presente. Responsive funcional con problemas menores de espaciado. |
| **Satisfactorio** | 15 | Flexbox en 1 área. Responsive parcial (funciona en un tamaño pero tiene problemas en el otro). |
| **Bajo** | 10 | No usa Flexbox. No es responsive. Scroll horizontal presente. Layout roto en móvil. |

**Evidencia a revisar:**
- Abrir URL en DevTools con vista de 375px (iPhone SE)
- Abrir URL en DevTools con vista de 768px+
- Verificar ausencia de scroll horizontal
- Inspeccionar CSS para confirmar uso de Flexbox y media queries

---

## Criterio 3: Interactividad (25 pts)

Evalúa el uso de JavaScript para funcionalidades interactivas.

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 25 | Validación de formulario completa (campos vacíos + formato email). Menú hamburguesa toggle funcional. Feedback visual para validación (colores éxito/error). |
| **Bueno** | 20 | Validación de formulario funcional (al menos campos vacíos). Menú hamburguesa funciona. Feedback visual presente. |
| **Satisfactorio** | 15 | Validación básica presente. Menú hamburguesa funciona parcialmente. |
| **Bajo** | 10 | JavaScript conectado pero sin funcionalidades completas. Errores en consola. |

**Evidencia a revisar:**
- Enviar formulario vacío → debe mostrar mensaje de error
- Enviar email inválido → debe mostrar mensaje de error
- Enviar formulario válido → debe mostrar mensaje de éxito
- Probar menú hamburguesa en vista móvil (375px)
- Abrir consola del navegador → sin errores

---

## Criterio 4: Publicación (25 pts)

Evalúa que el sitio esté correctamente publicado y personalizado.

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 25 | GitHub Pages funcionando. URL pública accesible. Contenido 100% personalizado (nombre real, bio, skills relevantes). Sin errores 404. Carga rápida. |
| **Bueno** | 20 | URL funciona. Contenido mayormente personalizado con algunos placeholders menores. |
| **Satisfactorio** | 15 | URL funciona pero con problemas (estilos que no cargan, imágenes rotas). Contenido parcialmente personalizado. |
| **Bajo** | 10 | No publicado, URL rota, error 404, o contenido completamente placeholder. |

**Evidencia a revisar:**
- Abrir la URL de GitHub Pages en una ventana de incógnito
- Verificar que el contenido está personalizado (no es el template genérico)
- Probar en un dispositivo diferente (teléfono)
- Verificar que todos los recursos cargan (sin 404 en Network tab)

---

## Escala de Calificación

| Rango | Nota | Descripción |
|-------|------|-------------|
| 90-100 | A | Excelente - Dominio completo de los objetivos |
| 80-89 | B | Bueno - Comprensión sólida con áreas menores a mejorar |
| 70-79 | C | Satisfactorio - Cumple requisitos mínimos |
| < 70 | F | Necesita mejora - No cumple requisitos mínimos |

---

## Entregables Requeridos

1. **URL de GitHub Pages:** `https://[usuario].github.io/mi-portfolio-dev/`
2. **URL del repositorio:** `https://github.com/[usuario]/mi-portfolio-dev`

---

## Notas para el Evaluador

- **Commits:** Verificar que hay al menos 4 commits (1 por día). Los mensajes deben describir qué se hizo, no solo "update" o "changes".
- **Responsive:** Usar DevTools para probar en 375px y 768px+. No confiar solo en redimensionar el navegador.
- **JavaScript:** Abrir la consola del navegador para verificar que no hay errores. La validación del formulario debe funcionar sin recargar la página.
- **GitHub Pages:** Si el estudiante tiene problemas de deploy pero el código es correcto en el repositorio, considerar evaluación parcial del criterio 4.
- **Plazo:** Los estudiantes pueden seguir haciendo push hasta la fecha límite del Día 5. Evaluar la versión más reciente en GitHub Pages.
