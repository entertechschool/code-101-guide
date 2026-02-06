# Rúbrica - Lab 08: MyLinks

> **Total:** 100 puntos (4 criterios × 25 puntos)

---

## Criterio 1: Estructura y Git (25 pts)

Evalúa el uso de control de versiones y organización del proyecto.

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 25 | 4+ commits con mensajes descriptivos que reflejan el progreso. Estructura de archivos clara y organizada. |
| **Bueno** | 20 | 3 commits con mensajes razonables. Estructura organizada. |
| **Satisfactorio** | 15 | 2 commits. Estructura básica pero funcional. |
| **Bajo** | 10 | 1 commit o estructura desordenada. Mensajes de commit genéricos ("update", "fix"). |

**Evidencia a revisar:**
- `git log --oneline` en el repositorio
- Estructura de archivos en GitHub

---

## Criterio 2: Diseño Responsive (25 pts)

Evalúa que el sitio funcione correctamente en diferentes tamaños de pantalla.

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 25 | Funciona perfectamente en móvil (375px) y desktop (768px+). Sin scroll horizontal. Elementos bien proporcionados en ambos tamaños. |
| **Bueno** | 20 | Funciona bien en ambos tamaños con problemas menores (espaciado ligeramente desproporcionado). |
| **Satisfactorio** | 15 | Funciona en un tamaño pero tiene problemas visibles en el otro (texto muy pequeño, botones cortados). |
| **Bajo** | 10 | No es responsive. Scroll horizontal presente. Elementos rotos o ilegibles en móvil. |

**Evidencia a revisar:**
- Abrir URL en DevTools con vista de 375px
- Abrir URL en DevTools con vista de 768px+
- Verificar ausencia de scroll horizontal

---

## Criterio 3: Contenido y Estilo (25 pts)

Evalúa la personalización, cantidad de enlaces, y coherencia visual.

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 25 | 5+ enlaces personalizados y funcionales. Paleta de colores coherente. Tipografía personalizada. Nombre y bio presentes. |
| **Bueno** | 20 | 4 enlaces funcionales. Estilos aplicados y consistentes. Nombre y bio presentes. |
| **Satisfactorio** | 15 | 3 enlaces. Estilos básicos pero funcionales. Nombre presente. |
| **Bajo** | 10 | Menos de 3 enlaces, enlaces rotos, o sin estilos personalizados. Contenido placeholder sin personalizar. |

**Evidencia a revisar:**
- Hacer clic en cada enlace para verificar que funcionan
- Revisar coherencia de colores y tipografía
- Verificar que el contenido está personalizado (no placeholder)

---

## Criterio 4: Publicación (25 pts)

Evalúa que el sitio esté correctamente publicado en GitHub Pages.

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 25 | GitHub Pages funcionando. URL pública accesible. Carga rápido. Sin errores 404. Contenido actualizado. |
| **Bueno** | 20 | URL funciona pero con errores menores (imágenes que no cargan, CSS parcial). |
| **Satisfactorio** | 15 | URL funciona pero con problemas visuales significativos (layout roto, estilos faltantes). |
| **Bajo** | 10 | No publicado, URL rota, o error 404 persistente. |

**Evidencia a revisar:**
- Abrir la URL de GitHub Pages en una ventana de incógnito
- Verificar que el contenido coincide con el repositorio
- Probar en un dispositivo diferente (teléfono)

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

1. **URL de GitHub Pages:** `https://[usuario].github.io/mylinks/`
2. **URL del repositorio:** `https://github.com/[usuario]/mylinks`

---

## Notas para el Evaluador

- **Commits:** Revisar que los mensajes sean descriptivos. "feat:", "fix:", "style:" son buenos indicadores de práctica profesional.
- **Responsive:** Usar DevTools para probar, no solo el navegador normal.
- **Enlaces:** Al menos uno debe ser externo y funcional (GitHub, LinkedIn, etc.).
- **GitHub Pages:** Si el estudiante tiene problemas de deploy pero el código es correcto, considerar evaluación parcial del criterio 4.
