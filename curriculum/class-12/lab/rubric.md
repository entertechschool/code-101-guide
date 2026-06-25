# Rúbrica - Lab 12: Adivina el Número

> **Total:** 100 puntos (4 criterios × 25 puntos)

---

## Criterio 1: Funcionalidad (25 pts)

Evalúa que el juego funcione correctamente como aplicación interactiva.

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 25 | Genera número aleatorio (1-100), da pistas alto/bajo/correcto, valida entrada (isNaN, rango), cuenta intentos, detecta acierto correctamente. |
| **Bueno** | 20 | Funciona con errores menores: validación incompleta o pistas no siempre precisas. |
| **Satisfactorio** | 15 | Funcionalidad básica: compara números pero sin pistas claras o sin validación. |
| **Bajo** | 10 | No funciona o tiene errores graves que impiden jugar. |

**Evidencia a revisar:**
- Jugar una ronda completa en el navegador
- Probar con entrada inválida (texto, fuera de rango)
- Verificar que el número secreto cambia entre partidas

---

## Criterio 2: Interfaz e Interacción (25 pts)

Evalúa que el juego tenga una interfaz visual funcional con eventos DOM y feedback visual.

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 25 | Tarjeta centrada con glass-effect, input con glow en focus, botón con micro-interacciones, mensajes con colores, celebración visual al ganar (tarjeta brilla verde), diseño responsive. |
| **Bueno** | 20 | Input y botón funcionan, mensajes visibles con colores, celebración visual presente pero puede faltar responsive. |
| **Satisfactorio** | 15 | Interfaz básica funcional pero sin micro-interacciones o celebración visual. |
| **Bajo** | 10 | Sin interfaz visual, solo usa prompt/alert y consola. |

**Evidencia a revisar:**
- La tarjeta aparece centrada con gradiente de fondo
- El input brilla al enfocarse, el botón tiene hover/active
- Los mensajes cambian de color según la pista
- Al ganar, la tarjeta cambia a borde verde con glow
- El botón reiniciar resetea la celebración visual
- Se ve bien en celular (controles apilados)

---

## Criterio 3: Código y Funciones (25 pts)

Evalúa la organización del código en funciones reutilizables.

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 25 | 3+ funciones claras (`verificarIntento`, `reiniciarJuego`, `mostrarMensaje`), variables con nombres descriptivos, código organizado y legible. |
| **Bueno** | 20 | 2 funciones definidas, código legible con comentarios básicos. |
| **Satisfactorio** | 15 | 1 función, código funcional pero desorganizado o difícil de leer. |
| **Bajo** | 10 | Sin funciones, todo el código en un bloque lineal. |

**Evidencia a revisar:**
- Abrir `script.js` y contar funciones declaradas
- Verificar nombres de variables (`numeroSecreto` vs `x`)
- Verificar que `addEventListener` conecta eventos con funciones

---

## Criterio 4: Presentación y Comprensión (25 pts)

Evalúa la capacidad del estudiante de demostrar y explicar su trabajo.

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 25 | Presenta demo fluida, explica su código con claridad, responde preguntas, demuestra comprensión de funciones, DOM y eventos. |
| **Bueno** | 20 | Presenta bien, explica la mayoría del código, responde algunas preguntas. |
| **Satisfactorio** | 15 | Presenta el juego pero no puede explicar el código claramente. |
| **Bajo** | 10 | No presenta o no puede explicar ninguna parte de su código. |

**Evidencia a revisar:**
- Demo en vivo sin errores
- Explicación de al menos 1 función
- Respuesta a preguntas del facilitador o compañeros
- Reflexión sobre el proceso de aprendizaje

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

1. **URL del repositorio:** `https://github.com/[usuario]/guess-number-js`
2. **Presentación Demo Day:** Completada en clase (3 minutos)

---

## Notas para el Evaluador

- **Funcionalidad vs perfección:** El juego debe funcionar correctamente con la interfaz visual (tarjeta, micro-interacciones, celebración). El CSS viene como template; lo importante es que el JS conecte correctamente con el DOM y la celebración visual funcione.
- **Funciones:** Mínimo esperar `verificarIntento()` y `reiniciarJuego()`. Funciones adicionales como `mostrarMensaje()` u `obtenerPista()` indican excelencia.
- **Presentación:** Considerar nervios normales. Evaluar comprensión del código, no elocuencia. Si el estudiante puede señalar una función y explicar qué hace, demuestra comprensión.
- **Código copiado:** Si el código funciona pero el estudiante no puede explicarlo, calificar "Bajo" en el criterio 4.
- **Commits:** Revisar que haya historial de desarrollo progresivo (no un solo commit con todo el código).
