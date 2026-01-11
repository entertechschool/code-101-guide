# Guía del Facilitador - Clase 02: Diseña y Estructura

> Tiempo de lectura: 8 minutos | Prepárate antes de clase

---

## 🔑 Conceptos Clave

- **Wireframe**: Boceto de baja fidelidad que muestra la estructura de una página antes de codear.
- **HTML Semántico**: Etiquetas que describen su contenido (`<header>`, `<nav>`, `<section>`, `<footer>`).
- **Accesibilidad**: Diseño que permite a todas las personas usar la web, incluyendo personas con discapacidad.
- **Enlaces ancla**: Navegación interna usando `href="#id"` que salta a secciones específicas.
- **Screen reader**: Software que lee el contenido de la pantalla para personas con discapacidad visual.

---

## 🔗 Analogías Útiles

**Wireframe <> Plano de arquitecto:**
Un arquitecto no empieza poniendo ladrillos—primero dibuja el plano. El wireframe es el plano de tu página: te muestra qué va dónde antes de escribir una línea de código.

**HTML Semántico <> Cajas etiquetadas vs cajas sin etiqueta:**
Imagina mudarte a una casa nueva. ¿Preferirías abrir 50 cajas sin etiqueta o cajas que dicen "Cocina", "Baño", "Dormitorio"? El HTML semántico son las etiquetas de las cajas.

**Screen reader <> Audiolibro:**
Un screen reader "lee" tu página como un audiolibro lee un libro. Si tu HTML no tiene estructura, es como un audiolibro que dice "texto, texto, texto, imagen, texto" sin contexto.

---

## 📚 Contexto Histórico

### HTML5 Semántico: La revolución de 2014

Durante años, los desarrolladores construían páginas enteras usando solo `<div>`. El problema: los navegadores y lectores de pantalla no sabían qué significaba cada parte.

El grupo WHATWG (formado por Apple, Google, Mozilla y Opera en 2004) comenzó a trabajar en HTML5. En octubre de 2014, HTML5 se convirtió en recomendación oficial del W3C, introduciendo etiquetas semánticas como `<header>`, `<nav>`, `<section>`, `<article>`, `<aside>` y `<footer>`.

El objetivo era simple: que el código HTML describiera su contenido, no solo su apariencia.

> **Para contar en clase:** "Antes de HTML5, todo era `<div>`. Los desarrolladores literalmente escribían `<div class='header'>`, `<div class='nav'>`. En 2014, HTML5 dijo: '¿Por qué no usar `<header>` y `<nav>` directamente?'"

### WCAG: Las reglas de accesibilidad web

En enero de 1995, Gregg Vanderheiden publicó las primeras guías de accesibilidad web—solo un año después de que Tim Berners-Lee mencionara el acceso para personas con discapacidad en una conferencia.

En mayo de 1999, el W3C publicó WCAG 1.0 (Web Content Accessibility Guidelines). WCAG 2.0 llegó en diciembre de 2008 con un enfoque específico en compatibilidad con lectores de pantalla. La versión más reciente, WCAG 2.2, fue publicada en octubre de 2023.

El principio fundamental de WCAG: el contenido debe ser Perceptible, Operable, Comprensible y Robusto (POUR).

> **Para contar en clase:** "El 15% de la población mundial tiene alguna discapacidad. Eso son más de mil millones de personas. El HTML semántico no es un 'extra'—es cómo hacemos la web para todos."

**Fuentes:** [Wikipedia - HTML5](https://en.wikipedia.org/wiki/HTML5){:target="_blank"}, [Wikipedia - WCAG](https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines){:target="_blank"}, [BOIA - History of WCAG](https://www.boia.org/blog/history-of-the-web-content-accessibility-guidelines-wcag){:target="_blank"}

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "Screen Reader: Divs vs Semántico"

Este es EL momento de la clase. La demostración que hace tangible la accesibilidad.

**Preparación:** Tener dos archivos listos:
- `demo-div.html` (todo con divs)
- `demo-semantic.html` (con etiquetas semánticas)

**Dinámica sugerida:**
```
Facilitador: (Abre demo-div.html)
Facilitador: "Esta página se ve normal, ¿verdad?"
Facilitador: (Activa VoiceOver/Narrator)
Screen reader: "div, div, div, div..."
Facilitador: "Si no pudieras ver, ¿sabrías qué es cada cosa?"
(Silencio incómodo)
Facilitador: (Abre demo-semantic.html)
Screen reader: "encabezado, navegación, enlace inicio, contenido principal, sección..."
Facilitador: "¿Escucharon la diferencia?"
```

**Comandos para activar screen reader:**
- **Mac:** Cmd + F5 (VoiceOver)
- **Windows:** Win + Ctrl + Enter (Narrator)

### Dinámica 2: "Wireframe en 5 minutos"

Evita la parálisis de "no sé dibujar" dando estructura base.

```
Facilitador: "Abran Excalidraw. Tienen 5 minutos para hacer esto:"
(Muestra estructura básica: Header, Hero, 3 Secciones, Footer)
Facilitador: "No importa si está feo. Importa que EXISTA."
Facilitador: "Las secciones pueden ser lo que quieran: películas, series, música, deportes..."
(Timer de 5 minutos visible)
```

### Dinámica 3: "El enlace que salta"

Demostración en vivo de enlaces ancla antes de pedirles que lo implementen.

```
Facilitador: (Muestra código)
<a href="#peliculas">Ir a Películas</a>
...
<section id="peliculas">
Facilitador: (Hace clic en el enlace)
Facilitador: "¿Vieron? Saltó a la sección. ¿Cómo supo a dónde ir?"
Estudiante: "Por el #peliculas..."
Facilitador: "Exacto. El # en el href busca un id que coincida."
```

---

## 💡 Ejemplos Listos para Usar

### Ejemplo 1: Estructura semántica completa

**Cuándo usarlo:** Después de la demo del screen reader.

```html
<body>
    <header>
        <h1>Mi Perfil</h1>
        <nav>
            <a href="#about">Sobre Mí</a>
            <a href="#peliculas">Películas</a>
        </nav>
    </header>

    <main>
        <section id="about">
            <h2>Sobre Mí</h2>
            <p>Mi bio...</p>
        </section>

        <section id="peliculas">
            <h2>Mis Películas</h2>
            <ul>...</ul>
        </section>
    </main>

    <footer>
        <p>Hecho con ❤️ en 2025</p>
    </footer>
</body>
```

**Tip de facilitación:** Escribe esto EN VIVO transformando el HTML de la clase anterior.

### Ejemplo 2: Navegación con anclas

**Cuándo usarlo:** Para explicar la conexión href → id.

```html
<!-- El enlace -->
<a href="#series">Ir a Series</a>

<!-- El destino (debe tener el mismo id SIN el #) -->
<section id="series">
    <h2>Mis Series Favoritas</h2>
</section>
```

**Tip de facilitación:** Muestra qué pasa si el id tiene un espacio (`id="mis series"`)—no funciona.

### Ejemplo 3: Errores comunes de id

**Cuándo usarlo:** Cuando empiecen a tener errores con la navegación.

```html
<!-- ❌ INCORRECTO: espacio en el id -->
<section id="mis peliculas">

<!-- ✅ CORRECTO: guiones en vez de espacios -->
<section id="mis-peliculas">

<!-- ❌ INCORRECTO: id duplicado -->
<section id="contenido">...</section>
<section id="contenido">...</section>  <!-- No! -->

<!-- ✅ CORRECTO: ids únicos -->
<section id="peliculas">...</section>
<section id="series">...</section>
```

---

## ⚠️ Errores Comunes

| Señal | Qué está pasando | Qué hacer |
|-------|------------------|-----------|
| Navegación no funciona | `href="#peliculas"` pero `id="Peliculas"` | Verificar que coincidan exactamente (case sensitive) |
| `id` con espacios | `id="mis peliculas"` | Usar guiones: `id="mis-peliculas"` |
| `href` sin # | `href="peliculas"` | Agregar #: `href="#peliculas"` |
| Múltiples `<main>` | No entienden que main es único | Solo puede haber UN `<main>` por página |
| `<nav>` fuera de `<header>` | Estructura incorrecta | Mover nav dentro de header |
| Wireframe vacío | Parálisis de análisis | Dar lista de ideas de secciones |

---

## 🎯 Checkpoints de Validación

| Minuto | Checkpoint | Cómo validar |
|--------|------------|--------------|
| 20 | Demo screen reader completado | Reacciones de "ahhh" visibles |
| 40 | Wireframes creados | Todos tienen rectángulos en Excalidraw con su nombre |
| 70 | Estructura semántica | HTML tiene header, main, sections, footer |
| 100 | IDs únicos | Cada section tiene id diferente |
| 120 | Navegación funciona | Hacer clic en nav y ver que salta |

---

## 🔗 Conexión con la Próxima Clase

Al cerrar, planta la semilla para la Clase 03:

> "Ahora tienen la estructura perfecta: semántica, organizada, navegable. Pero se ve... básica. Fondo blanco, texto negro, Times New Roman. La próxima clase vamos a agregar la magia visual con CSS. Verán cómo UN SOLO archivo transforma TODO—colores, tipografías, espaciado. La diferencia entre 'amateur' y 'profesional'."

**Tarea implícita:** "Exploren Google Fonts y Coolors.co. Lleguen con ideas de colores y tipografías que les gusten."
