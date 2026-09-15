# Code 101 - Elementals Software Development — Índice de temáticas

> Índice para consultas comerciales. Generado el 2026-09-14 a partir de `README.md` y `curriculum/class-NN/README.md`. Si se mueve, renombra o añade una clase, regenerar este archivo.
> Sílabo oficial (autoridad comercial): https://raw.githubusercontent.com/entertechschool/public-sylabus/main/code-101/index.md

**Repo:** entertechschool/code-101-guide · **Rama publicada:** main · **Base raw:** https://raw.githubusercontent.com/entertechschool/code-101-guide/main/

## Resumen del curso
- **Qué construye el estudiante:** Un perfil personal web con HTML semántico, CSS y Flexbox (M1); un hub de enlaces tipo Linktree ("MyLinks") responsive, diseñado en Figma, generado con IA y publicado en GitHub Pages (M2); un juego interactivo "Adivina el Número" en JavaScript con interfaz en el DOM (M3).
- **Formato según README:** 12 clases, 3 módulos técnicos de 4 clases cada uno, 180 min por clase, modalidad blend (teoría + práctica). Además existe un programa Fast-Track de 4 días (ver `fast-track/TOPICS.md`).
- **Perfil de entrada según README:** "Ninguno. Code 101 es el curso de entrada al programa de Desarrollo de Software." Prepara para Code 201.
- **Herramientas y tecnologías:** HTML, CSS, JavaScript, Flexbox, media queries, Visual Studio Code (VS Code), Live Server, Auto Rename Tag, Prettier, navegador (Chrome, Firefox o Edge), Chrome DevTools, terminal (CLI), Git, GitHub, GitHub Pages, Markdown, Excalidraw, Google Fonts, Coolors, Figma (Frames, Styles, Auto Layout, Componentes, MyLinks Starter Kit), Carrd Templates, imagecolorpicker.com, Claude.ai (Artifacts), Gemini, uiverse.io, consola del navegador, DOM, Flexbox Froggy, Oh My Git!, Design Thinking, wireframes, Prompt Scaffolding, Vibe Coding.
- **Proyectos:** M1: Mi Perfil Personal · M2: MyLinks - Tu Hub Personal en la Web · M3: Adivina el Número - Juego Interactivo

## Módulo 1 — Introducción al Desarrollo Web (clases 01–04)
**Proyecto del módulo:** Mi Perfil Personal — perfil con HTML semántico, CSS con paleta y tipografía, layout Flexbox (header horizontal + cards) y estados hover con transiciones. Lab evaluado en clase 04.

| # | Clase | Temas clave | Herramientas | Rutas |
|---|---|---|---|---|
| 01 | Setup y Web Moderna | cómo funciona la web, ciclo de petición web, cliente-servidor, URL, HTTP, HTML básico, etiquetas `<h1>` `<p>` `<img>` `<ul>` `<li>`, estructura HTML válida, entorno de desarrollo, extensiones de VS Code, primera página web | VS Code, Live Server, Auto Rename Tag, Prettier, Chrome/Firefox/Edge | `curriculum/class-01/README.md` · `curriculum/class-01/lab/README.md` |
| 02 | Diseña y Estructura | diseñar antes de codear, wireframes de baja fidelidad, HTML semántico (`<header>` `<main>` `<section>` `<nav>` `<footer>`), div vs semántico, accesibilidad, lectores de pantalla, SEO, navegación interna, enlaces ancla (`#id`) | Excalidraw, VS Code | `curriculum/class-02/README.md` · `curriculum/class-02/lab/README.md` |
| 03 | Estilos con CSS | CSS externo vinculado, selectores de elemento/clase/id, propiedades y valores, Box Model (content, padding, border, margin), tipografía web, Google Fonts, paleta de colores, espaciado, identidad visual | VS Code, Google Fonts, Coolors | `curriculum/class-03/README.md` · `curriculum/class-03/lab/README.md` |
| 04 | Layout Moderno con Flexbox | Flexbox, flex container/items, main axis y cross axis, `justify-content`, `align-items`, `gap`, header horizontal, cards, navegación estilizada, estados `:hover`, `transition`, integración de proyecto, presentación (lab calificado M1) | VS Code, DevTools | `curriculum/class-04/README.md` · `curriculum/class-04/lab/README.md` |

## Módulo 2 — Herramientas del Desarrollador (clases 05–08)
**Proyecto del módulo:** MyLinks - Tu Hub Personal en la Web — sitio tipo Linktree, responsive, con estructura semántica, diseñado en Figma, generado con IA y publicado en GitHub Pages. Lab evaluado en clase 08 (también test diagnóstico del módulo).

| # | Clase | Temas clave | Herramientas | Rutas |
|---|---|---|---|---|
| 05 | Setup del Desarrollador Moderno | terminal / CLI, comandos `cd` `ls` `pwd`, sistema de archivos, Git, control de versiones, configurar identidad Git, repositorio, clonar (clone), commit con mensajes descriptivos, push, remote, GitHub como portfolio | Terminal, Git, GitHub, VS Code | `curriculum/class-05/README.md` · `curriculum/class-05/lab/README.md` |
| 06 | Diseño Web Responsive + DevTools | diseño responsive, mobile-first, viewport, unidades relativas (`rem`, `em`, `%`, `vh`, `vw`), media queries, breakpoints móvil/tablet/desktop, inspeccionar elementos, modo responsive de DevTools, modificar CSS en tiempo real | Chrome DevTools, VS Code, Live Server, Terminal | `curriculum/class-06/README.md` · `curriculum/class-06/lab/README.md` |
| 07 | Wireframing y Pensamiento Creativo | wireframing, low-fi vs high-fi, Design Thinking, UX vs UI, objetivo de rediseño centrado en el usuario, Figma (Frames, Styles, Auto Layout, Componentes), tokens de diseño, mockups móvil y escritorio, Spec Sheet, análisis de referencias tipo Linktree, exportar PNG | Figma, Carrd Templates, imagecolorpicker.com, Coolors, Google Fonts, editor de texto | `curriculum/class-07/README.md` · `curriculum/class-07/lab/README.md` |
| 08 | Vibe Coding — De idea a sitio publicado | Vibe Coding, inteligencia artificial para generar código, Prompt Scaffolding (Rol + Contexto + Tarea + Restricciones + Formato), prompt vago vs scaffolded, iterar con criterio, Artifacts de Claude, extraer código a VS Code, GitHub Pages, URL pública, deploy, hosting gratuito (lab calificado M2) | Claude.ai, Gemini, uiverse.io, VS Code, Live Server, Git, GitHub Pages | `curriculum/class-08/README.md` · `curriculum/class-08/lab/README.md` |

## Módulo 3 — Introducción a la Programación con JavaScript (clases 09–12)
**Proyecto del módulo:** Adivina el Número - Juego Interactivo — el sistema genera un número aleatorio entre 1 y 100, el jugador lo adivina con pistas, contador e historial de intentos y retroalimentación visual con colores. Lab evaluado en clase 12.

| # | Clase | Temas clave | Herramientas | Rutas |
|---|---|---|---|---|
| 09 | Fundamentos de JavaScript | qué es un algoritmo, pensamiento algorítmico, enlazar `.js` con `<script>`, variables `let` y `const`, tipos de datos (string, number, boolean), operadores aritméticos (`+ - * / %`), concatenación, `console.log()`, consola del navegador, `prompt()` y `alert()` | VS Code, Live Server, Chrome DevTools (consola), GitHub | `curriculum/class-09/README.md` · `curriculum/class-09/lab/README.md` |
| 10 | Decisiones y Lógica Condicional | condicionales `if` / `else if` / `else`, operadores de comparación (`=== !== > < >= <=`), operadores lógicos (`&& \|\| !`), lógica booleana, operador ternario, `Math.random()`, `Math.floor()`, números aleatorios, validación de entrada con `isNaN()` y `Number()` | VS Code, Live Server, Chrome DevTools, GitHub | `curriculum/class-10/README.md` · `curriculum/class-10/lab/README.md` |
| 11 | Funciones: Los Bloques de Construcción | funciones, parámetros, `return`, refactorización, DOM, `document.getElementById()`, `textContent`, `style`, eventos, `addEventListener('click')`, interfaz visual del juego (tarjeta flotante, glass-effect, micro-interacciones, responsive), historial de intentos | VS Code, Live Server, Chrome DevTools, GitHub | `curriculum/class-11/README.md` · `curriculum/class-11/lab/README.md` |
| 12 | Proyecto Final - Demo Day | Demo Day, presentación técnica de 3 minutos, demo en vivo, explicar el código (funciones, condicionales, DOM), test diagnóstico del módulo, reflexión, evaluación entre pares, próximos pasos hacia Code 201 (lab calificado M3) | Navegador, VS Code, GitHub | `curriculum/class-12/README.md` · `curriculum/class-12/lab/README.md` |

## Búsqueda rápida por tema

| Tema / palabra clave | Clase(s) |
|---|---|
| Accesibilidad, lectores de pantalla, alt | 02 |
| Adivina el Número, juego interactivo, juego en JavaScript | 09, 10, 11, 12 |
| addEventListener, eventos, click | 11, 12 |
| alert, prompt (ventanas emergentes) | 09, 10 |
| Algoritmos, pensamiento algorítmico, lógica de programación | 09, 10 |
| Auto Layout, Componentes, Styles (Figma) | 07 |
| Box Model, padding, margin, border | 03 |
| Breakpoints, móvil, tablet, desktop | 06 |
| Cards, tarjetas | 04, 07, 08 |
| Claude, Claude.ai, Artifacts | 08 |
| Cliente-servidor, HTTP, URL, cómo funciona la web | 01 |
| Commit, push, clone, repositorio | 05, 06, 08, 09, 10, 11, 12 |
| Condicionales, if/else, else if | 10, 11, 12 |
| Consola del navegador, console.log | 09, 10, 11 |
| Control de versiones | 05 |
| Coolors, paleta de colores, colores | 03, 07 |
| CSS, estilos, hojas de estilo | 03, 04, 06 |
| Demo Day, presentación de proyecto, pitch técnico | 04, 12 |
| Deploy, publicar sitio web, hosting, URL pública | 08 |
| Design Thinking, diseño centrado en el usuario | 07 |
| DevTools, Chrome DevTools, inspeccionar elementos | 04, 06, 09, 10, 11 |
| DOM, getElementById, textContent, style | 11, 12 |
| Editor de código, VS Code, Visual Studio Code, extensiones | 01, 05 |
| Enlaces ancla, navegación interna, href | 02 |
| Etiquetas HTML, h1, p, img, ul, li | 01 |
| Excalidraw, bocetos | 02 |
| Figma, mockups, Starter Kit | 07 |
| Flexbox, justify-content, align-items, gap, layout | 04, 06 |
| Formularios (validación de entrada de usuario) | 10 |
| Funciones, parámetros, return | 11, 12 |
| Gemini | 08 |
| Git, GitHub | 05, 06, 08, 09, 10, 11, 12 |
| GitHub Pages | 08 |
| Google Fonts, tipografía, fuentes | 03, 07 |
| Hover, :hover, transiciones, transition, micro-interacciones | 04, 11 |
| HTML, HTML básico, primera página web | 01 |
| HTML semántico, header, main, section, nav, footer | 02 |
| IA, inteligencia artificial, asistentes de IA, generar código con IA | 08 |
| Iterar con criterio, refinar output de IA | 08 |
| isNaN, Number(), validación | 10, 11, 12 |
| JavaScript, JS, programación | 09, 10, 11, 12 |
| let, const, variables | 09 |
| Linktree, hub de enlaces, MyLinks | 05, 06, 07, 08 |
| Live Server | 01, 06, 08, 09, 10, 11 |
| Lógica booleana, true/false | 09, 10 |
| Low-fi, high-fi, fidelidad de wireframes | 07 |
| Math.random, Math.floor, números aleatorios | 10, 11 |
| Media queries | 06 |
| Mi Perfil Personal, perfil web, portfolio personal | 01, 02, 03, 04 |
| Mobile-first | 06 |
| Operadores aritméticos, concatenación | 09 |
| Operadores de comparación, operadores lógicos, ternario | 10 |
| Prettier, Auto Rename Tag | 01 |
| Prompt, Prompt Engineering, Prompt Scaffolding | 08 |
| Refactorizar, refactorización | 11 |
| rem, em, %, vh, vw, unidades relativas | 06 |
| Responsive, diseño adaptable, diseño web responsive | 06, 07, 08, 11 |
| Selectores CSS, clase, id | 03 |
| SEO, motores de búsqueda | 02 |
| Setup, entorno de desarrollo, instalación | 01, 05 |
| Spec Sheet, tokens de diseño | 07, 08 |
| Terminal, línea de comandos, CLI, cd, ls, pwd | 05, 06 |
| Test diagnóstico (no califica) | 08, 12 |
| Tipos de datos, string, number, boolean | 09 |
| uiverse.io, componentes CSS | 08 |
| UX, UI, experiencia de usuario, interfaz | 07, 11 |
| Vibe Coding | 08 |
| Viewport | 06 |
| Wireframes, wireframing, diseñar antes de codear | 02, 07 |

## Lo que NO cubre (según el material)
- El README raíz aclara que las herramientas del "Stack del Repositorio" (Claude Code CLI, reveal.js, Jekyll + kramdown, plugin Figma `dev/figma-starter-kit/`) son para mantener el repositorio, "no las herramientas del curso".
- Según el README raíz (Prerrequisitos), JavaScript avanzado, manipulación del DOM en profundidad, programación orientada a objetos y control de versiones avanzado con Git se dejan para Code 201.
- Clase 12: "No hay contenido nuevo" (es Demo Day).
- Clase 11 reemplaza `prompt()`/`alert()` por una interfaz en el DOM; no se cubren frameworks ni librerías JavaScript en ninguna clase.

## Excepciones de rutas
Ninguna. Las 12 clases tienen `curriculum/class-NN/README.md` y `curriculum/class-NN/lab/README.md`. (Existen además `curriculum/module-2/`, `curriculum/module-3/` y `curriculum/nivelacion/`, ignorados en este índice.)

## Discrepancias con el sílabo oficial
- **Resueltas (2026-09-15):** Proyecto M1 (sílabo ahora dice "Mi Perfil Personal" y ya no menciona Markdown/GitHub Pages en M1), Proyecto M2 ("MyLinks - Tu Hub Personal en la Web"), Proyecto M3 ("Adivina el Número - Juego Interactivo"), Herramientas de IA (sílabo ahora dice "Claude y Gemini" en vez de "ChatGPT y Copilot"). También se corrigió la fila de la clase 4 en la tabla "Referencia Rápida" del README raíz (decía "Markdown, GitHub, GitHub Pages, deploy"; ahora dice "Flexbox, cards, hover states, transiciones", igual que la tabla del Módulo 1).
- **Sin resolver — Duración:** sílabo "6 semanas (54 horas)" = 36 h en vivo + 18 h asíncronas; README solo indica "12 sesiones" de "180 min" (36 h) y no menciona semanas ni horas asíncronas. No se corrige: el material no contradice la cifra, solo no la confirma (no es inequívoco), y las líneas de Duración/Inversión de tiempo del sílabo están fuera de alcance salvo contradicción inequívoca.
- **Sin resolver — Wireframing:** sílabo menciona wireframing solo en el párrafo de M2; en el material aparece en clase 02 (Excalidraw, M1) y clase 07 (Figma, M2). No se corrige: el sílabo no afirma explícitamente que el wireframing sea exclusivo de M2, solo lo menciona ahí; es una omisión, no una contradicción inequívoca.
