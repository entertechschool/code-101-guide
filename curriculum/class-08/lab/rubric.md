# Rúbrica - Lab 08: Vibe Coding — De idea a sitio publicado

> **Total:** 100 puntos (4 criterios × 25 puntos)

---

## Criterio 1: Prompt Scaffolded y uso del Spec Sheet (25 pts)

Evalúa la calidad del prompt construido y la incorporación del trabajo del Lab 07.

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 25 | Prompt completo con la arquitectura **Rol + Contexto + Tarea + Restricciones técnicas + Restricciones de diseño + Formato de salida**. El Spec Sheet del Lab 07 está incorporado al prompt. Ambos mockups (`mockup-mobile.png` y `mockup-desktop.png`) están adjuntos a Claude. |
| **Bueno** | 20 | Prompt estructurado con la mayoría de los bloques. Spec Sheet usado parcialmente (faltan tokens o restricciones). Un solo mockup adjunto. |
| **Satisfactorio** | 15 | Prompt mediocre con contexto débil. Spec Sheet apenas referenciado. Sin mockups adjuntos. |
| **Bajo** | 10 | Prompt vago tipo zero-shot o copia genérica. No usa el Spec Sheet del Lab 07. |

**Evidencia a revisar:**

- Pedir al estudiante que muestre el prompt scaffolded final que envió a Claude.
- Verificar que el contenido del `spec-sheet.txt` del Lab 07 está reflejado en el prompt.
- Confirmar la presencia de las imágenes adjuntas en la conversación.

---

## Criterio 2: Iteración con criterio (25 pts)

Evalúa la calidad de la iteración con código real (uiverse.io) y la precisión de las instrucciones a Claude.

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 25 | Aplicó la iteración con código real de uiverse.io adaptado a su paleta (no copiado tal cual). La instrucción a Claude es específica: indica qué adaptar, qué mantener y cómo. |
| **Bueno** | 20 | Aplicó la iteración pero con instrucciones algo genéricas, o adaptó parcialmente los colores del snippet. |
| **Satisfactorio** | 15 | Iteración mínima, los botones casi no cambian respecto al V2 inicial. |
| **Bajo** | 10 | No iteró, o pegó código de uiverse sin entender qué hace. |

**Evidencia a revisar:**

- Comparar el botón final con el botón original de uiverse.io: debe haber adaptación de colores, no copia.
- Pedir al estudiante que explique qué hace el CSS del botón.
- Verificar que los colores del botón coinciden con el `spec-sheet.txt`.

---

## Criterio 3: Extracción y Diseño Responsive (25 pts)

Evalúa que el código se extrajo correctamente a VS Code y funciona en distintos tamaños de pantalla.

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 25 | Código en VS Code corre con Live Server. Paridad visual con el Artifact de Claude. Responsive verificado en móvil (375px) y desktop (1440px+) sin scroll horizontal y con elementos bien proporcionados. |
| **Bueno** | 20 | Funciona en VS Code con problemas menores (espaciado ligeramente desproporcionado en algún tamaño). Responsive parcial. |
| **Satisfactorio** | 15 | Funciona pero con problemas visibles. Responsive roto en algún tamaño (texto pequeño, botones cortados). |
| **Bajo** | 10 | No corre localmente, o no es responsive. Scroll horizontal presente. Layout roto en móvil. |

**Evidencia a revisar:**

- Abrir la URL de Pages en DevTools con vista de 375px y 1440px+.
- Verificar ausencia de scroll horizontal.
- Comparar el sitio publicado con el Artifact final de Claude.

---

## Criterio 4: Publicación y Coherencia (25 pts)

Evalúa que el sitio esté publicado en GitHub Pages y mantenga coherencia con el Spec Sheet original.

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 25 | GitHub Pages funcionando con URL pública sin errores. Diseño 100% coherente con el `spec-sheet.txt`: tokens, layout y estilo coinciden. 3+ commits descriptivos. |
| **Bueno** | 20 | Publicado con errores menores (alguna imagen falta, CSS parcial). Diseño coherente en lo esencial. 2-3 commits. |
| **Satisfactorio** | 15 | Publicado con problemas visuales. Coherencia parcial con el Spec Sheet. 1-2 commits. |
| **Bajo** | 10 | No publicado, URL rota o error 404. Diseño no se parece al Spec Sheet. Mensajes de commit genéricos. |

**Evidencia a revisar:**

- Abrir la URL de GitHub Pages en una ventana de incógnito.
- Comparar el sitio publicado con el `spec-sheet.txt` y los mockups del Lab 07.
- `git log --oneline` en el repositorio.

---

## Escala de Calificación

| Rango | Nota | Descripción |
|-------|------|-------------|
| 90-100 | A | Excelente — Dominio completo del flujo Vibe Coding profesional |
| 80-89 | B | Bueno — Comprensión sólida con áreas menores a mejorar |
| 70-79 | C | Satisfactorio — Cumple requisitos mínimos |
| < 70 | F | Necesita mejora — No cumple requisitos mínimos |

---

## Entregables Requeridos

1. **URL de GitHub Pages:** `https://[usuario].github.io/mylinks/`
2. **URL del repositorio:** `https://github.com/[usuario]/mylinks`

---

## Notas para el Evaluador

- **Prompt scaffolded:** si el estudiante no puede mostrar el prompt final (lo perdió), pedir que reconstruya 1 prompt scaffolded en vivo basándose en su `spec-sheet.txt`. Evalúa la comprensión del concepto, no solo la evidencia.
- **Iteración:** si copió el botón sin adaptar colores ni hacer instrucciones específicas, considerar Bajo aunque visualmente quede bien. La rúbrica evalúa el **proceso**, no solo el resultado visual.
- **Coherencia con Spec Sheet:** el diseño publicado debe ser claramente reconocible como el del Spec Sheet. Si está irreconocible (otro estilo, otros colores), penalizar Criterio 4.
- **Vibe Coding Responsable:** preguntar al estudiante "¿qué hace la línea X de tu CSS?". Si no sabe responder en absoluto, considerar como señal para retroalimentación cualitativa además de la calificación.
- **Bonus opcional:** si el estudiante hizo el Bonus (patterncraft, iconos), no afecta la calificación pero menciónalo como reconocimiento positivo en la retroalimentación.
