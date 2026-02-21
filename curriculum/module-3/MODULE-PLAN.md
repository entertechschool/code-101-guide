# Plan del Módulo 3: Introducción a la Programación con JavaScript

> Este documento define la arquitectura del módulo. Aprobar antes de crear clases.

## Información General

| Aspecto | Detalle |
|---------|---------|
| **Módulo** | 3 |
| **Título** | Introducción a la Programación con JavaScript |
| **Proyecto Integrador** | Adivina el Número - Juego Interactivo |
| **Clases** | 9 a 12 |
| **Pre-requisitos** | M1: HTML/CSS, M2: Terminal, Git, GitHub Pages |

---

## Competencias del Módulo

Al finalizar el módulo, el estudiante podrá:

1. **Declarar y manipular datos** - Usar variables, tipos de datos y operadores para almacenar y transformar información
2. **Implementar lógica condicional** - Usar `if/else`, operadores de comparación y lógicos para que el programa tome decisiones
3. **Crear y usar funciones** - Organizar código en bloques reutilizables con parámetros y valores de retorno
4. **Conectar JavaScript con el DOM** - Manipular elementos HTML desde JavaScript usando eventos y métodos del DOM

---

## Proyecto Integrador: Adivina el Número

### Descripción

"Adivina el Número" es un juego interactivo donde el sistema genera un número aleatorio entre 1 y 100, y el jugador debe adivinarlo. El programa da pistas ("muy alto", "muy bajo") hasta que el jugador acierta. Incluye contador de intentos, historial visual y retroalimentación con colores.

El proyecto es relevante porque:
- **Interactividad real:** El estudiante crea algo que responde a las acciones del usuario
- **Pensamiento lógico:** Requiere descomponer un problema en condicionales y funciones
- **Evolución visible:** Cada clase agrega una capa funcional al mismo proyecto
- **Diversión:** Es un juego que pueden mostrar y compartir

A diferencia de los módulos anteriores (páginas estáticas), este proyecto introduce la programación como herramienta para crear experiencias dinámicas donde el usuario interactúa y recibe respuestas.

### Evolución por Clase

| Clase | Capa | Estado del Proyecto al Finalizar |
|-------|------|----------------------------------|
| 9 | Fundamento | Repo creado, HTML+JS conectados, variables, tipos de datos, prompt/alert básico |
| 10 | Lógica | Math.random() genera número secreto, if/else da pistas alto/bajo, validaciones con isNaN |
| 11 | Interacción | Refactorización a DOM: tarjeta glass-effect, input/botón con micro-interacciones, funciones, eventos click, celebración visual, responsive |
| 12 | Presentación | Pulido final + Demo Day: presentación del juego terminado |

### Entregable Final

Un juego "Adivina el Número" con aspecto de app profesional en el navegador que incluye:
- Tarjeta flotante con glass-effect sobre gradiente de fondo
- Input con glow en focus, botón con micro-interacciones (hover/active)
- Número aleatorio generado con Math.random()
- Pistas visuales (alto/bajo/correcto) con colores
- Celebración visual al ganar (tarjeta brilla verde con `style.borderColor` y `style.boxShadow`)
- Contador de intentos visible
- Historial de intentos anteriores
- Botón para reiniciar el juego (resetea celebración visual)
- Diseño responsive mobile-first
- Código organizado en funciones

---

## Arquitectura de Clases

### Clase 9: Fundamentos de JavaScript

| Aspecto | Detalle |
|---------|---------|
| **Concepto Principal** | Variables, tipos de datos y operadores |
| **Objetivo del Lab** | Crear el repositorio del juego con HTML+JS, experimentar con variables y operadores |
| **Herramientas** | VS Code, Live Server, Chrome DevTools (consola) |
| **Entregable** | Repo `guess-number-js` con variables, prompt/alert y console.log funcionando |

**Checkpoints del Lab:**
1. Repositorio creado, `index.html` y `script.js` enlazados, consola muestra "¡Hola desde JavaScript!"
2. Variables declaradas con `let` y `const`, `prompt()` pide datos, `typeof` muestra tipos correctos
3. Operaciones aritméticas funcionan, sabe la diferencia entre `'5'+3` y `5+3`, usa template literals

**Glosario de la Clase:**

| Término | Definición breve |
|---------|------------------|
| Algoritmo | Secuencia ordenada de pasos para resolver un problema |
| JavaScript | Lenguaje de programación que agrega interactividad a páginas web |
| Variable | Espacio con nombre donde se guarda un dato (`let` o `const`) |
| String | Tipo de dato para texto, entre comillas (`"hola"`) |
| Number | Tipo de dato para valores numéricos (`42`, `3.14`) |
| Boolean | Tipo de dato que solo es `true` o `false` |
| Operador | Símbolo que opera sobre valores (`+`, `-`, `*`, `/`, `%`) |
| console.log() | Función que imprime valores en la consola del navegador |
| Script | Etiqueta HTML (`<script>`) que enlaza JavaScript con la página |

**Dependencias:**
- **Requiere:** M2 - Terminal, Git, GitHub (para clonar y hacer push)
- **Habilita:** Clase 10 necesita variables y tipos de datos para implementar condicionales

---

### Clase 10: Decisiones y Lógica Condicional

| Aspecto | Detalle |
|---------|---------|
| **Concepto Principal** | Condicionales, operadores de comparación y lógicos |
| **Objetivo del Lab** | Agregar Math.random(), if/else para pistas, y validaciones al juego |
| **Herramientas** | VS Code, Live Server, Chrome DevTools (consola) |
| **Entregable** | Juego con número aleatorio, pistas alto/bajo/correcto y validación de entrada |

**Checkpoints del Lab:**
1. `Math.random()` genera número secreto entre 1 y 100, verificable en consola
2. `if/else if/else` da pistas "muy alto" / "muy bajo" / "¡correcto!" según el intento
3. Validaciones funcionan: rechaza texto no numérico con `isNaN()` y números fuera de rango

**Glosario de la Clase:**

| Término | Definición breve |
|---------|------------------|
| Condicional | Estructura que ejecuta código diferente según una condición |
| if/else | Sentencia que evalúa una condición y elige un camino |
| Operador de comparación | Compara dos valores: `===`, `!==`, `>`, `<`, `>=`, `<=` |
| Operador lógico | Combina condiciones: `&&` (y), `\|\|` (o), `!` (no) |
| Ternario | Forma corta de if/else: `condición ? valor1 : valor2` |
| Math.random() | Genera un número aleatorio entre 0 y 1 |
| Math.floor() | Redondea un número hacia abajo al entero más cercano |
| isNaN() | Verifica si un valor no es un número válido |
| Number() | Convierte un valor a tipo número |

**Dependencias:**
- **Requiere:** Clase 9 (variables, tipos, prompt/alert, typeof)
- **Habilita:** Clase 11 necesita la lógica condicional para refactorizarla en funciones

---

### Clase 11: Funciones: Los Bloques de Construcción

| Aspecto | Detalle |
|---------|---------|
| **Concepto Principal** | Funciones, DOM manipulation y eventos |
| **Objetivo del Lab** | Refactorizar el juego: de prompt/alert a interfaz DOM con funciones y eventos |
| **Herramientas** | VS Code, Live Server, Chrome DevTools |
| **Entregable** | Juego completo con tarjeta glass-effect, micro-interacciones, celebración visual, funciones, eventos click, historial, reinicio y responsive |

**Checkpoints del Lab:**
1. HTML tiene tarjeta centrada con glass-effect, input con glow, botón con hover. Primera función conectada con `getElementById`
2. `addEventListener('click')` ejecuta `verificarIntento()`, muestra resultado en DOM con colores. Celebración visual al ganar (tarjeta brilla verde)
3. Historial visual de intentos, contador visible, `reiniciarJuego()` resetea celebración. Responsive en celular. Juego COMPLETO

**Glosario de la Clase:**

| Término | Definición breve |
|---------|------------------|
| Función | Bloque de código reutilizable con nombre que realiza una tarea |
| Parámetro | Variable que recibe un valor cuando se llama a la función |
| return | Palabra clave que devuelve un valor desde una función |
| DOM | Document Object Model: representación del HTML como objetos manipulables |
| getElementById() | Método que selecciona un elemento HTML por su atributo `id` |
| textContent | Propiedad para leer o cambiar el texto de un elemento |
| addEventListener() | Método que conecta un evento (click, input) con una función |
| Evento | Acción del usuario (click, tecla, scroll) que el programa puede detectar |
| Refactorización | Reorganizar código existente para mejorarlo sin cambiar su comportamiento |

**Dependencias:**
- **Requiere:** Clases 9 y 10 (variables, condicionales, lógica del juego)
- **Habilita:** Clase 12 presenta el juego terminado en Demo Day

---

### Clase 12 (Lab Calificado + Demo Day): Proyecto Final

| Aspecto | Detalle |
|---------|---------|
| **Concepto Principal** | Presentación, demostración y evaluación |
| **Objetivo del Lab** | Pulir el juego y presentarlo en Demo Day (3 min por estudiante) |
| **Herramientas** | Navegador, proyector/pantalla compartida |
| **Entregable** | Juego funcional presentado + test diagnóstico completado |
| **Distribución** | Test diagnóstico (15 min) + Demo Day (resto de la clase) |

**Checkpoints del Lab (Demo Day):**

| Parte | Título | Tiempo | Descripción |
|-------|--------|--------|-------------|
| 1 | Test Diagnóstico M3 | 15 min | 8 preguntas sobre variables, condicionales y funciones |
| 2 | Preparación | 15 min | Verificar que el juego funciona, practicar presentación |
| 3 | Presentaciones | ~90 min | 3 min por estudiante: demo + explicación de código |
| 4 | Cierre del Curso | 20 min | Celebración, reflexión final, próximos pasos (Code 201) |

**Criterios de Evaluación (4 x 25 pts = 100 pts):**

| Criterio | Qué Evalúa | Excelente (25) | Bueno (20) | Satisfactorio (15) | Bajo (10) |
|----------|-----------|----------------|------------|-------------------|----------|
| **Funcionalidad** | El juego funciona correctamente | Genera número aleatorio, da pistas, valida entrada, detecta acierto, cuenta intentos | Funciona con errores menores (validación incompleta) | Funcionalidad básica (compara pero sin pistas claras) | No funciona o tiene errores graves |
| **Interfaz e Interacción** | UI visual con eventos DOM y feedback | Tarjeta glass-effect, input con glow, micro-interacciones, celebración visual, responsive | Input y botón funcionan, mensajes con colores, celebración presente | Interfaz básica, sin micro-interacciones o celebración | Sin interfaz visual, solo consola |
| **Código y Funciones** | Organización del código | 3+ funciones claras, variables descriptivas, código organizado | 2 funciones, código legible | 1 función, código funcional pero desorganizado | Sin funciones, código lineal |
| **Presentación** | Demo Day y comprensión | Explica su código con claridad, responde preguntas, demuestra comprensión | Presenta bien, explica la mayoría del código | Presenta pero no explica el código claramente | No presenta o no puede explicar su código |

**Glosario de la Clase:**

| Término | Definición breve |
|---------|------------------|
| Demo Day | Sesión de presentaciones donde cada estudiante muestra su proyecto |
| Refactorización | Mejorar la estructura del código sin cambiar su comportamiento |
| Depuración | Proceso de encontrar y corregir errores en el código |
| MVP | Minimum Viable Product: versión mínima funcional de un producto |

---

## Decisiones de Diseño

### 1. Sin loops (while/for)

El syllabus NO incluye loops. El juego funciona con **eventos**: cada click del botón ejecuta `verificarIntento()` una vez. El "loop" es el propio ciclo de eventos del navegador. Esto simplifica enormemente la curva de aprendizaje y evita bugs de loops infinitos.

### 2. Lógica primero, DOM después

- **Clases 9-10:** `prompt()`/`alert()` para enfocarse en lógica pura (variables, condicionales)
- **Clase 11:** Refactorización a DOM + funciones + eventos (el "upgrade" visual)
- **Clase 12:** Solo presentación (juego ya completo)

Este enfoque permite que los estudiantes entiendan la lógica antes de lidiar con la complejidad del DOM.

### 3. Math.random() en Clase 10

Se introduce junto con condicionales porque ahí tiene contexto: generar un número PARA compararlo. No tiene sentido enseñarlo en la Clase 9 donde no hay comparación posible.

### 4. Refactorización como concepto pedagógico

La Clase 11 NO crea código nuevo desde cero. Toma el código existente de las Clases 9-10 y lo reorganiza en funciones + DOM. Esto enseña un skill profesional real: refactorizar.

### 5. Demo Day como cierre del curso

La Clase 12 no introduce contenido nuevo. Es celebración + evaluación. El test diagnóstico y las presentaciones cierran el ciclo completo de Code 101.

---

## Mapa de Dependencias

```
Clase 9 ──→ Clase 10 ──→ Clase 11 ──→ Clase 12
  │            │            │            │
Variables   Condicionales Funciones   Demo Day
Tipos       Math.random() DOM/Eventos  Evaluación
Operadores  Validación    Refactoring  Presentación
  │            │            │            │
  └────────────┴────────────┴────────────┘
            Proyecto: Adivina el Número
```

### Flujo de Conceptos

| Clase | Introduce | Usa de Anteriores |
|-------|-----------|-------------------|
| 9 | Variables, tipos, operadores, prompt/alert, console.log | HTML básico (M1), Git/GitHub (M2) |
| 10 | if/else, comparación, lógicos, ternario, Math.random(), isNaN | Variables, tipos, prompt/alert, Number() (9) |
| 11 | Funciones, parámetros, return, DOM, eventos, refactorización | Todo de 9-10: variables, condicionales, lógica del juego |
| 12 | Presentación, evaluación, cierre | Todo lo anterior: juego completo |

---

## Conexión con Otros Módulos

### Módulo Anterior (M2)

| Aspecto | Detalle |
|---------|---------|
| **Conceptos que se asumen** | Terminal, Git (clone/commit/push), GitHub, VS Code, DevTools |
| **Proyecto anterior** | MyLinks - Tu Hub Personal en la Web |
| **¿Se conecta?** | Usa Git para versionar el proyecto. DevTools para depurar en consola |

### Después del Curso (Code 201)

| Aspecto | Detalle |
|---------|---------|
| **Conceptos que se anticipan** | Loops, arrays, objetos, DOM avanzado, eventos múltiples |
| **Semillas plantadas** | "En Code 201 agregarás niveles de dificultad y un tablero de puntajes" |

---

## Glosario Completo del Módulo

| Término | Clase | Definición |
|---------|-------|------------|
| Algoritmo | 9 | Secuencia ordenada de pasos para resolver un problema |
| JavaScript | 9 | Lenguaje de programación para interactividad web |
| Variable | 9 | Espacio con nombre para guardar un dato |
| String | 9 | Tipo de dato para texto |
| Number | 9 | Tipo de dato para valores numéricos |
| Boolean | 9 | Tipo de dato que solo es `true` o `false` |
| Operador | 9 | Símbolo que realiza operaciones sobre valores |
| console.log() | 9 | Función para imprimir en la consola del navegador |
| Script | 9 | Etiqueta HTML que enlaza JavaScript |
| Condicional | 10 | Estructura que ejecuta código según una condición |
| if/else | 10 | Sentencia que evalúa una condición y elige un camino |
| Operador de comparación | 10 | Compara dos valores (`===`, `>`, `<`, etc.) |
| Operador lógico | 10 | Combina condiciones (`&&`, `\|\|`, `!`) |
| Ternario | 10 | Forma corta de if/else |
| Math.random() | 10 | Genera número aleatorio entre 0 y 1 |
| Math.floor() | 10 | Redondea hacia abajo al entero más cercano |
| isNaN() | 10 | Verifica si un valor no es número |
| Number() | 10 | Convierte un valor a tipo número |
| Función | 11 | Bloque de código reutilizable con nombre |
| Parámetro | 11 | Variable que recibe valor al llamar la función |
| return | 11 | Devuelve un valor desde una función |
| DOM | 11 | Representación del HTML como objetos manipulables |
| getElementById() | 11 | Selecciona un elemento HTML por su `id` |
| textContent | 11 | Propiedad para leer o cambiar texto de un elemento |
| addEventListener() | 11 | Conecta un evento con una función |
| Evento | 11 | Acción del usuario que el programa detecta |
| Refactorización | 11 | Reorganizar código sin cambiar su comportamiento |
| Demo Day | 12 | Sesión de presentaciones de proyectos |
| MVP | 12 | Versión mínima funcional de un producto |

---

## Checklist de Verificación

Antes de aprobar este plan, verificar:

- [x] Las 4 competencias son medibles con verbos de acción
- [x] El proyecto tiene sentido como unidad coherente
- [x] Cada clase tiene UN concepto principal claro
- [x] Los checkpoints son verificables visualmente
- [x] Las dependencias entre clases son explícitas
- [x] La clase 12 integra conceptos de las 3 anteriores
- [x] Los 4 criterios de evaluación reflejan las competencias
- [x] Hay conexión clara con módulos adyacentes
- [x] El glosario cubre todos los términos nuevos

---

## Notas de Diseño

### Riesgos Identificados

- **Salto de HTML/CSS a JavaScript:** El cambio de paradigma puede ser brusco. Mitigar con analogías (algoritmo = receta) y muchos ejemplos visuales en consola.
- **prompt/alert como muleta:** Algunos estudiantes pueden resistirse a abandonar prompt/alert en la Clase 11. Enfatizar que la refactorización es una práctica profesional.
- **Frustración con errores de sintaxis:** JavaScript es menos "visual" que HTML/CSS. Los errores de consola pueden intimidar. Enseñar a leer mensajes de error desde el inicio.
- **Demo Day nervios:** Algunos estudiantes tendrán ansiedad de presentar. Dar estructura clara (3 min, qué cubrir) y practicar antes.

### Alternativas Consideradas

- Se consideró incluir loops (`for`/`while`) pero se descartó para mantener el scope manejable. El ciclo de eventos del navegador reemplaza la necesidad de loops para este juego.
- Se consideró usar el DOM desde la Clase 9, pero se optó por prompt/alert primero para aislar la lógica de la interfaz.
- Se consideró hacer la Clase 12 con contenido nuevo, pero se priorizó Demo Day como cierre celebratorio del curso completo.
