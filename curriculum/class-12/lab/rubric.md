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

Evalúa que el juego tenga una interfaz visual funcional con eventos DOM.

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 25 | Input y botón funcionales, mensajes con colores (verde/rojo/turquesa), historial visual de intentos, botón de reinicio visible al ganar. |
| **Bueno** | 20 | Input y botón funcionan, mensajes visibles en la página, colores aplicados. |
| **Satisfactorio** | 15 | Interfaz básica funcional pero aún depende parcialmente de prompt/alert. |
| **Bajo** | 10 | Sin interfaz visual, solo usa prompt/alert y consola. |

**Evidencia a revisar:**
- La página muestra input, botón y áreas de mensaje
- Los mensajes cambian de color según la pista
- El historial se actualiza con cada intento
- El botón reiniciar aparece al ganar

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
3. **Test diagnóstico:** Completado en Canvas durante la clase

---

## Notas para el Evaluador

- **Funcionalidad vs perfección:** El juego debe funcionar correctamente. No se espera diseño visual perfecto—lo importante es que la lógica funcione y use DOM.
- **Funciones:** Mínimo esperar `verificarIntento()` y `reiniciarJuego()`. Funciones adicionales como `mostrarMensaje()` u `obtenerPista()` indican excelencia.
- **Presentación:** Considerar nervios normales. Evaluar comprensión del código, no elocuencia. Si el estudiante puede señalar una función y explicar qué hace, demuestra comprensión.
- **Código copiado:** Si el código funciona pero el estudiante no puede explicarlo, calificar "Bajo" en el criterio 4.
- **Commits:** Revisar que haya historial de desarrollo progresivo (no un solo commit con todo el código).
