# Lab Nivelación M1: Mi Perfil Personal

> 🚀 **Proyecto integrador del Módulo 1.** Cubre los 4 temas (Setup, HTML semántico, CSS, Flexbox) en un solo lab autodirigido.
>
> 📌 **Para quién:** alumnos que se incorporaron tarde o no pudieron asistir a las clases 1-4 del curso.
>
> ⚠️ **Lab Calificado:** Este lab será evaluado con la rúbrica del final.
>
> ⏱️ **Tiempo estimado:** 6-7 horas en un día.

## 🎯 Lo que vas a construir

Una página web personal de una sola vista que incluye:

- Header con tu nombre y navegación interna.
- Sección "Sobre mí" con foto y descripción.
- Sección "Mis Favoritos" con 3 cards (películas, comidas, música — o las categorías que tú elijas).
- Sección "Contacto" con tus enlaces.
- Footer con copyright.
- Estilos coherentes con paleta y tipografía personalizada.
- Hover states con transiciones suaves.

> 💡 **Resultado esperado:** un sitio web profesional listo para publicar y compartir, suficiente como base para arrancar el Módulo 2.

---

## 🔑 Conceptos que cubrirás

| Concepto | Cuándo lo verás |
|----------|-----------------|
| Setup de VS Code + Live Server | Setup |
| Wireframe (planificación visual) | Parte 1 |
| HTML semántico (`header`, `main`, `section`, `footer`) | Parte 2 |
| Atributos de accesibilidad (`alt`, `href`) | Parte 2 |
| Selectores CSS (tag, class, id) | Parte 3 |
| Box Model (padding, margin, border) | Parte 3 |
| Tipografía con Google Fonts | Parte 4 |
| Paleta de colores con Coolors | Parte 4 |
| Flexbox (`display: flex`, `gap`, `justify-content`) | Parte 5 |
| Hover states + transiciones | Parte 6 |
| Git básico (commit + push) | Cierre |

---

## ⚙️ Setup Inicial (30 min)

### Paso 1 · Instala las herramientas que necesitas

| ✓ | Herramienta | Para qué | Cómo obtenerla |
|---|-------------|----------|-----------------|
| ☐ | **VS Code** | Editor de código profesional | [code.visualstudio.com](https://code.visualstudio.com/){:target="_blank"} — descarga e instala |
| ☐ | **Live Server** | Recarga automática del navegador | Extensión de VS Code: ícono de cuadritos del lateral → busca "Live Server" → Install |
| ☐ | **Git** | Control de versiones | [git-scm.com/downloads](https://git-scm.com/downloads){:target="_blank"} — instala con opciones por defecto |
| ☐ | **Cuenta en GitHub** | Hospedar tu código | [github.com/signup](https://github.com/signup){:target="_blank"} (gratis) |
| ☐ | **Chrome o Firefox** | Probar el sitio | Probablemente ya lo tienes |

> 💡 **¿Por qué Live Server?** Sin Live Server, cada vez que cambies tu código tienes que cerrar y abrir el navegador. Live Server lo recarga automáticamente. **Es indispensable.**

### Paso 2 · Crea la carpeta de tu proyecto

1. Crea una carpeta llamada `mi-perfil-personal` en un lugar accesible (Documentos, Escritorio, etc.).
2. Abre VS Code → menú `File` → `Open Folder` → selecciona la carpeta que acabas de crear.
3. Dentro de VS Code, crea estos 2 archivos vacíos por ahora:
   - `index.html`
   - `styles.css`

Tu estructura debe verse así:

```
mi-perfil-personal/
├── index.html
└── styles.css
```

### Paso 3 · Verifica que Live Server funciona

1. Abre `index.html` en VS Code.
2. Pega esto temporalmente:

```html
<!DOCTYPE html>
<html>
<body>
  <h1>Hola mundo</h1>
</body>
</html>
```

3. Guarda con `Ctrl+S`.
4. Clic derecho sobre `index.html` → **"Open with Live Server"**.
5. Tu navegador abre `http://127.0.0.1:5500/index.html` y ves "Hola mundo".

✅ **Checkpoint Setup:** Tienes VS Code abierto con tu carpeta, Live Server corriendo, y los 2 archivos creados. Si llegaste aquí, estás listo.

---

## Parte 1 · Wireframe Relámpago (20 min)

> 🧠 **Idea clave:** Antes de escribir código, decide visualmente **qué va a aparecer y dónde**. Esto te ahorra horas de re-trabajo.

### 1.1 ¿Qué es un wireframe?

Un wireframe es un boceto rápido que muestra la **estructura** de tu página sin colores ni detalles. Solo cajas y texto. Es el equivalente al plano de un arquitecto antes de construir una casa.

### 1.2 Dibuja tu wireframe

Tienes 2 opciones, **elige una y dedícale 15 minutos máximo**:

- **Opción A:** Papel y lápiz (más rápido, sin fricción técnica).
- **Opción B:** [Excalidraw](https://excalidraw.com/){:target="_blank"} (online, gratis, sin cuenta).

### 1.3 Estructura sugerida de Mi Perfil Personal

Dibuja estas 5 secciones en orden vertical:

```
┌───────────────────────────────┐
│ HEADER                        │
│ [Tu nombre]      [Nav links]  │
├───────────────────────────────┤
│ SOBRE MÍ                      │
│ [Foto]   [Texto sobre ti]     │
├───────────────────────────────┤
│ MIS FAVORITOS                 │
│ [Card 1] [Card 2] [Card 3]    │
├───────────────────────────────┤
│ CONTACTO                      │
│ [Email] [LinkedIn] [GitHub]   │
├───────────────────────────────┤
│ FOOTER                        │
│ © Tu nombre 2026              │
└───────────────────────────────┘
```

> 💡 **No tienes que dibujar exactamente esto.** Pero esta estructura cumple los requisitos del lab y te garantiza que cubres todo lo necesario.

✅ **Checkpoint Parte 1:** Tienes un wireframe (en papel o Excalidraw) con las 5 secciones identificadas. Tómale foto si es papel para tu propio registro.

---

## Parte 2 · HTML Semántico (60 min)

> 🧠 **Idea clave:** HTML no es solo "para que se vea". Las **etiquetas semánticas** comunican el **significado** de cada parte de tu página: el navegador, los lectores de pantalla y Google entienden tu sitio mejor cuando usas `<header>` en vez de `<div class="header">`.

### 2.1 Estructura base del HTML

Reemplaza TODO el contenido de tu `index.html` con esto:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Perfil Personal — Tu Nombre</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <!-- HEADER con navegación -->
  <header>
    <h1>Tu Nombre</h1>
    <nav>
      <ul>
        <li><a href="#sobre-mi">Sobre mí</a></li>
        <li><a href="#favoritos">Mis Favoritos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  </header>

  <main>

    <!-- Sección Sobre mí -->
    <section id="sobre-mi">
      <h2>Sobre mí</h2>
      <img src="https://via.placeholder.com/200" alt="Foto de Tu Nombre">
      <p>Soy [tu profesión / lo que estudias]. Me apasiona [tu interés principal].
         Actualmente aprendo desarrollo web en EnterTechSchool.</p>
    </section>

    <!-- Sección Mis Favoritos -->
    <section id="favoritos">
      <h2>Mis Favoritos</h2>
      <div class="cards">

        <article class="card">
          <h3>🎬 Películas favoritas</h3>
          <p>Mis 3 películas que veo una y otra vez: [Película 1], [Película 2] y [Película 3]. Me gustan porque [tu razón en una línea].</p>
        </article>

        <article class="card">
          <h3>🍕 Comidas favoritas</h3>
          <p>No puedo decir que no a [Plato 1], [Plato 2] y [Plato 3]. La que prepararía siempre sin dudar es [tu favorita].</p>
        </article>

        <article class="card">
          <h3>🎵 Música favorita</h3>
          <p>Mis bandas/artistas que más escucho son [Artista 1], [Artista 2] y [Artista 3]. El género que me define es [tu género].</p>
        </article>

      </div>
    </section>

    <!-- Sección Contacto -->
    <section id="contacto">
      <h2>Contacto</h2>
      <ul class="contacto-links">
        <li><a href="mailto:tu@email.com">Email</a></li>
        <li><a href="https://linkedin.com/in/tu-usuario" target="_blank">LinkedIn</a></li>
        <li><a href="https://github.com/tu-usuario" target="_blank">GitHub</a></li>
      </ul>
    </section>

  </main>

  <footer>
    <p>© 2026 Tu Nombre. Hecho con HTML, CSS y mucho café ☕</p>
  </footer>

</body>
</html>
```

### 2.2 Personaliza con tu información real

Reemplaza estos placeholders por tu información real:

- `Tu Nombre` → tu nombre.
- `[tu profesión / lo que estudias]` → tu perfil real.
- `[tu interés principal]` → ej: "el diseño UX", "los videojuegos", "la música".
- **Cards de favoritos** → reemplaza los placeholders `[Película 1]`, `[Plato 1]`, `[Artista 1]`, etc. con tus favoritos reales.
- `tu@email.com` → tu correo.
- `tu-usuario` (en LinkedIn y GitHub) → tu username real.

> 💡 **Si no te identificas con esas 3 categorías**, cámbialas por otras: "Lugares que sueño visitar", "Series favoritas", "Libros que recomiendo", "Hobbies", lo que sea más tuyo. Solo mantén las **3 cards** porque la rúbrica las espera.

### 2.3 Mini-explicación: ¿qué etiquetas usaste y por qué?

| Etiqueta | Significado | Por qué se usa |
|----------|-------------|-----------------|
| `<header>` | Encabezado del sitio | Va arriba, contiene nombre + navegación |
| `<nav>` | Navegación | Conjunto de enlaces que llevan a otras partes |
| `<main>` | Contenido principal | Lo que es ÚNICO de esta página |
| `<section>` | Sección temática | Cada bloque distinto (Sobre mí, Mis Favoritos, Contacto) |
| `<article>` | Pieza independiente | Cada card de favorito se puede leer por sí sola |
| `<footer>` | Pie de página | Copyright, créditos, info legal |
| `<h1>` a `<h3>` | Jerarquía de títulos | UN solo `h1` por página, después `h2`, `h3` |
| `<a href="#id">` | Ancla interna | Enlace que salta a una sección con ese `id` |
| `<img alt="...">` | Imagen con descripción | El `alt` es para accesibilidad y SEO |

### 2.4 Verifica con Live Server

1. Guarda `index.html` (`Ctrl+S`).
2. Si Live Server ya estaba abierto, recarga automáticamente. Si no, clic derecho → "Open with Live Server".
3. Verás un sitio sin estilos (todo blanco con texto azul).
4. **Prueba los enlaces de navegación.** Al hacer clic en "Sobre mí", debe saltar a esa sección.

✅ **Checkpoint Parte 2:** Tu sitio tiene estructura HTML semántica completa. Las anclas funcionan. Cada sección tiene su contenido. Aún no se ve bonito — eso viene en la siguiente parte.

---

## Parte 3 · CSS Base + Box Model (60 min)

> 🧠 **Idea clave:** CSS controla **cómo se ve** cada elemento. El **Box Model** es el modelo mental para entender el espacio: cada elemento HTML es una caja con `content`, `padding`, `border` y `margin`.

### 3.1 El Box Model en una imagen

```
┌─────────────────────────────────┐  ← margin (espacio FUERA)
│ ┌─────────────────────────────┐ │
│ │  border (borde de la caja)  │ │
│ │ ┌─────────────────────────┐ │ │
│ │ │ padding (espacio DENTRO) │ │ │
│ │ │ ┌─────────────────────┐ │ │ │
│ │ │ │      CONTENT        │ │ │ │
│ │ │ │   (texto, imagen)   │ │ │ │
│ │ │ └─────────────────────┘ │ │ │
│ │ └─────────────────────────┘ │ │
│ └─────────────────────────────┘ │
└─────────────────────────────────┘
```

- **content** — Lo que está dentro (texto, imagen).
- **padding** — Espacio entre el contenido y el borde (interior).
- **border** — Línea del borde.
- **margin** — Espacio fuera de la caja (separa de otros elementos).

### 3.2 Reset básico + estilos globales

Reemplaza TODO el contenido de `styles.css` con esto:

```css
/* ===== RESET BÁSICO ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ===== ESTILOS GLOBALES ===== */
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f5f5f5;
}

/* Contenedor de ancho controlado */
header,
main,
footer {
  max-width: 1100px;
  margin: 0 auto;  /* centra horizontalmente */
  padding: 1rem 2rem;
}

/* ===== HEADER ===== */
header {
  background-color: #fff;
  border-bottom: 2px solid #ddd;
}

header h1 {
  color: #2563eb;
  margin-bottom: 0.5rem;
}

nav ul {
  list-style: none;  /* quita los puntos de la lista */
}

nav a {
  color: #555;
  text-decoration: none;  /* quita el subrayado */
  margin-right: 1.5rem;
}

/* ===== SECCIONES ===== */
section {
  background-color: #fff;
  margin-bottom: 1.5rem;
  padding: 2rem;
  border-radius: 8px;
}

section h2 {
  color: #2563eb;
  margin-bottom: 1rem;
  border-bottom: 2px solid #2563eb;
  padding-bottom: 0.5rem;
}

/* Imagen de Sobre mí */
#sobre-mi img {
  width: 200px;
  height: 200px;
  border-radius: 50%;  /* círculo perfecto */
  object-fit: cover;
  margin-bottom: 1rem;
}

/* ===== CARDS DE FAVORITOS ===== */
.cards {
  /* Por ahora apilados, en Parte 5 los pondremos en grid Flexbox */
}

.card {
  background-color: #f9fafb;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-left: 4px solid #2563eb;
  border-radius: 4px;
}

.card h3 {
  color: #1f2937;
  margin-bottom: 0.5rem;
}

/* ===== CONTACTO ===== */
.contacto-links {
  list-style: none;
}

.contacto-links li {
  margin-bottom: 0.5rem;
}

.contacto-links a {
  color: #2563eb;
  text-decoration: none;
}

/* ===== FOOTER ===== */
footer {
  text-align: center;
  color: #6b7280;
  font-size: 0.9rem;
  margin-top: 2rem;
}
```

### 3.3 Mini-explicación: ¿qué hicimos?

- **Reset (`*`):** elimina los márgenes y paddings por defecto del navegador para que TODOS los navegadores se vean igual.
- **`box-sizing: border-box`:** hace que el padding y border NO sumen al ancho total (más predecible).
- **`max-width` + `margin: 0 auto`:** centra horizontalmente y limita el ancho del contenido a 1100px (no se estira en pantallas grandes).
- **Selectores que usaste:**
  - **Tag** (`section`, `header`, `nav`): aplica a todos esos elementos.
  - **Class** (`.card`, `.cards`): aplica a elementos con `class="card"`.
  - **ID** (`#sobre-mi`): aplica al elemento único con `id="sobre-mi"`.
  - **Descendiente** (`section h2`): aplica a `h2` que esté dentro de `section`.

### 3.4 Verifica con Live Server

Guarda `styles.css`. Tu sitio debe verse ya con:

- Fondo gris claro.
- Header blanco con borde inferior.
- Cada sección como tarjeta blanca con bordes redondeados.
- Foto circular en "Sobre mí".
- Cards con barra azul a la izquierda.

✅ **Checkpoint Parte 3:** Tu sitio ya tiene estructura visual con CSS. Aún se ve básico, pero ya es legible y profesional.

---

## Parte 4 · Tipografía + Paleta de Colores (30 min)

> 🧠 **Idea clave:** La tipografía y los colores son el 80% de la identidad visual. Cambiarlos transforma tu sitio sin tocar la estructura.

### 4.1 Elige tu paleta en Coolors

1. Abre [coolors.co/generate](https://coolors.co/generate){:target="_blank"}.
2. Presiona **espacio** varias veces hasta que aparezca una paleta que te guste.
3. Anota los **5 códigos hex** que aparecen abajo (ej: `#264653`, `#2A9D8F`, `#E9C46A`, `#F4A261`, `#E76F51`).

> 💡 **Consejo:** Para un perfil personal funciona bien una paleta con 1 color oscuro (texto), 1 claro (fondo) y 2-3 acentos. No uses los 5.

### 4.2 Elige tu tipografía en Google Fonts

1. Abre [fonts.google.com](https://fonts.google.com/){:target="_blank"}.
2. Busca tipografías como:
   - **Inter** — limpia, moderna, súper legible.
   - **Poppins** — geométrica, amigable.
   - **Space Grotesk** — técnica, con personalidad.
   - **Montserrat** — clásica, profesional.
3. Elige una. Haz clic → "Get embed code" → copia la línea de `<link>`.

### 4.3 Aplica tu tipografía con Google Fonts

Edita tu `index.html` y agrega el `<link>` de Google Fonts ANTES del enlace a tu `styles.css`:

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Perfil Personal — Tu Nombre</title>

  <!-- Pega aquí el link de Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="styles.css">
</head>
```

> 💡 El ejemplo anterior usa **Inter**. Si elegiste otra, reemplaza esa línea con el `<link>` que copiaste de Google Fonts.

Ahora edita la regla `body` en `styles.css` para aplicar la nueva tipografía:

```css
body {
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
  color: #264653;
  background-color: #f5f5f5;
}
```

> 💡 Si elegiste otra fuente en Google Fonts, reemplaza `'Inter'` por el nombre que aparece arriba del `<link>` (ej: `'Poppins'`, `'Space Grotesk'`).

### 4.4 Aplica tu paleta de colores

Toma los hex de tu paleta de Coolors y reemplaza los azules genéricos (`#2563eb`) que tenías en `styles.css` por **tu color de acento**.

Para este ejemplo usaremos esta paleta (tú reemplaza por la tuya):

| Rol | Color hex | Dónde se usa |
|-----|-----------|--------------|
| Fondo de la página | `#f5f5f5` | `body` |
| Fondo de tarjetas | `#fff` | `header`, `section` |
| Texto principal | `#264653` | `body` (color), `.card h3` |
| Texto secundario | `#6b7280` | `nav a`, `footer` |
| Acento (botones, títulos) | `#2a9d8f` | `header h1`, `section h2`, links |
| Fondo cards | `#f9fafb` | `.card` |

Sustituye en tu `styles.css` los colores azules por tu nuevo color de acento. Las reglas afectadas:

```css
header h1 {
  color: #2a9d8f;
  font-weight: 800;
}

nav a {
  color: #6b7280;
  text-decoration: none;
  margin-right: 1.5rem;
}

section h2 {
  color: #2a9d8f;
  margin-bottom: 1rem;
  border-bottom: 2px solid #2a9d8f;
  padding-bottom: 0.5rem;
}

.card {
  background-color: #f9fafb;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-left: 4px solid #2a9d8f;
  border-radius: 4px;
}

.card h3 {
  color: #264653;
  margin-bottom: 0.5rem;
}

.contacto-links a {
  color: #2a9d8f;
  text-decoration: none;
}
```

> 💡 **Esto NO es nuevo CSS — son ediciones puntuales.** Buscas los azules `#2563eb` y los grises (`#555`, `#1f2937`) que ya tenías en las reglas y los reemplazas por los hex de la tabla.

### 4.5 Verifica

Guarda y mira en Live Server. Tu sitio ahora tiene:

- **Tipografía nueva** (Inter o la que elegiste).
- **Paleta coherente** en todos los elementos (header, secciones, cards, links).
- **Tipografía más bold** en el `h1` por el `font-weight: 800`.

✅ **Checkpoint Parte 4:** Tu sitio tiene identidad visual definida con tu paleta y tu tipografía aplicadas en cada elemento.

---

## Parte 5 · Flexbox: Header + Cards (75 min)

> 🧠 **Idea clave:** Flexbox (`display: flex`) es el modo de **acomodar elementos en una fila o columna** con control total: alineación, espaciado, distribución. Es la base del layout moderno.

### 5.1 Cómo funciona Flexbox

Cuando aplicas `display: flex` a un contenedor, sus **hijos directos** se acomodan en una fila (por defecto). Tienes 4 propiedades clave:

| Propiedad | Qué hace | Valores comunes |
|-----------|----------|-----------------|
| `display: flex` | Activa flexbox en el contenedor | (sin valor adicional) |
| `justify-content` | Distribuye en el eje principal (horizontal por defecto) | `space-between`, `center`, `flex-end` |
| `align-items` | Alinea en el eje secundario (vertical por defecto) | `center`, `flex-start`, `flex-end` |
| `gap` | Espacio entre los hijos | `1rem`, `2rem`, etc. |

### 5.2 Header con logo + navegación en horizontal

Modifica la regla `header` en `styles.css`:

```css
header {
  background-color: #fff;
  border-bottom: 2px solid #ddd;

  /* Flexbox: nombre a la izquierda, nav a la derecha */
  display: flex;
  justify-content: space-between;  /* separa el h1 y el nav al máximo */
  align-items: center;             /* alinea verticalmente al centro */
}

nav ul {
  list-style: none;

  /* Flexbox: enlaces en horizontal */
  display: flex;
  gap: 1.5rem;
}

nav a {
  color: #6b7280;
  text-decoration: none;
  /* Quita el margin-right: 1.5rem que tenías — ahora el gap del ul lo maneja */
}
```

> 💡 **Importante:** elimina la línea `margin-right: 1.5rem;` que tenías en `nav a` — ahora el `gap: 1.5rem` del `nav ul` lo maneja.

Guarda y verifica: tu nombre queda a la izquierda, los enlaces de navegación quedan en horizontal a la derecha.

### 5.3 Cards de favoritos en grid Flexbox

Modifica la regla `.cards` y `.card` en `styles.css`:

```css
/* ===== CARDS DE FAVORITOS ===== */
.cards {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;  /* permite que se rompan a la siguiente fila si no caben */
}

.card {
  background-color: #f9fafb;
  padding: 1.5rem;
  border-left: 4px solid #2a9d8f;
  border-radius: 8px;

  /* Cada card ocupa al menos 250px y se reparte el espacio sobrante */
  flex: 1 1 250px;

  /* Quita el margin-bottom — ahora el gap del contenedor lo maneja */
}
```

> 💡 **`flex: 1 1 250px` significa:** "puedes crecer (1), puedes encoger (1), tu tamaño base es 250px". En pantalla grande las 3 cards van en fila; en pantalla pequeña se acomodan en columna.

### 5.4 Sobre mí: foto + texto en horizontal (desktop)

Modifica la regla `#sobre-mi` en `styles.css`:

```css
/* ===== SOBRE MÍ ===== */
#sobre-mi {
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;  /* en móvil se apilan */
}

#sobre-mi h2 {
  /* El h2 ocupa la fila completa */
  flex: 1 1 100%;
}

#sobre-mi img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  /* Quita el margin-bottom — ahora el gap del contenedor lo maneja */
}

#sobre-mi p {
  flex: 1 1 300px;  /* el texto ocupa el resto */
}
```

### 5.5 Contacto en horizontal

Modifica la regla `.contacto-links`:

```css
.contacto-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

/* Quita el margin-bottom de los li */
.contacto-links li {
  /* vacío por ahora */
}
```

### 5.6 Verifica con Live Server en distintos tamaños

1. Guarda todo.
2. Abre el sitio en Live Server.
3. Abre **DevTools** (`F12`) → ícono de dispositivos (📱) o `Ctrl+Shift+M`.
4. Cambia entre tamaños:
   - **375px (móvil):** las cards se apilan en columna, el header sigue en horizontal pero más compacto.
   - **1024px (laptop):** las 3 cards van en fila, header con nombre + nav distribuidos.

✅ **Checkpoint Parte 5:** Tu sitio tiene layout responsive básico con Flexbox. Las cards se reorganizan según el tamaño de pantalla sin romperse.

---

## Parte 6 · Hover + Transiciones (30 min)

> 🧠 **Idea clave:** Los estados `:hover` y las `transition` hacen que tu sitio se sienta **vivo**. Es la diferencia entre un poster estático y una interfaz profesional.

### 6.1 Agrega estados hover y transiciones

Agrega estas reglas al final de tu `styles.css`:

```css
/* ===== ESTADOS INTERACTIVOS ===== */

/* Cards: al pasar el mouse, se elevan ligeramente */
.card {
  /* mantén las propiedades anteriores y agrega: */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

/* Enlaces de navegación: cambian de color suavemente */
nav a {
  /* mantén las propiedades anteriores y agrega: */
  transition: color 0.2s ease;
}

nav a:hover {
  color: #2a9d8f;
}

/* Enlaces de contacto */
.contacto-links a {
  transition: color 0.2s ease;
}

.contacto-links a:hover {
  color: #1f7a6d;
}
```

### 6.2 Mini-explicación: cómo funciona la transición

```css
transition: PROPIEDAD DURACIÓN CURVA;
```

- **PROPIEDAD** — qué propiedad CSS quieres animar (`transform`, `color`, `background`).
- **DURACIÓN** — cuánto tarda la transición (`0.2s` es suave, `0.5s` ya se siente lento).
- **CURVA** — cómo se acelera (`ease` es el más natural).

> 💡 **Sin `transition`:** el cambio es instantáneo (feo).
> **Con `transition`:** el cambio es suave (profesional).

### 6.3 Verifica

Guarda y prueba en Live Server:

- Pasa el mouse sobre las cards → se elevan suavemente con sombra.
- Pasa el mouse sobre los enlaces de navegación → cambian de color suavemente.
- Pasa el mouse sobre los enlaces de contacto → cambio sutil de tono.

✅ **Checkpoint Parte 6:** Tu sitio tiene estados interactivos pulidos. Si comparas tu sitio con cualquier sitio profesional, ya se siente similar.

---

## Cierre · Verificación, Git y Entrega (15 min)

### Verificación final

Antes de entregar, valida:

- [ ] El sitio se ve bien en Live Server sin errores de consola (F12 → Console).
- [ ] Las anclas de navegación (Sobre mí, Mis Favoritos, Contacto) saltan a su sección.
- [ ] La foto de "Sobre mí" se muestra como círculo.
- [ ] Las 3 cards se ven en fila en pantalla grande y en columna en móvil.
- [ ] Hay hover en cards y enlaces.
- [ ] Tu nombre real aparece en el header y footer.

### Sube tu proyecto a GitHub

> 💡 Si nunca usaste Git antes, sigue cada paso al pie de la letra. **Cada comando se ejecuta en la terminal de VS Code** (Menú → Terminal → New Terminal).

#### Paso 1 — Inicializa Git en tu carpeta

```bash
git init
git add .
git commit -m "feat: crear Mi Perfil Personal con HTML, CSS y Flexbox"
```

#### Paso 2 — Crea el repositorio en GitHub

1. Ve a [github.com/new](https://github.com/new){:target="_blank"}.
2. **Repository name:** `mi-perfil-personal`.
3. Deja **Public**, **NO** marques "Initialize with README".
4. Clic en **Create repository**.

#### Paso 3 — Conecta y sube

GitHub te muestra unos comandos. Copia los de la sección **"…or push an existing repository from the command line"** y pégalos en tu terminal de VS Code:

```bash
git remote add origin https://github.com/TU-USUARIO/mi-perfil-personal.git
git branch -M main
git push -u origin main
```

> Reemplaza `TU-USUARIO` por tu username real de GitHub.

#### Paso 4 — Verifica

Refresca la página de tu repositorio en GitHub. Debes ver `index.html` y `styles.css`.

### Entrega

📦 **Envía por la plataforma del curso (Canvas):**

1. **URL del repositorio:** `https://github.com/tu-usuario/mi-perfil-personal`
2. **Captura de pantalla** del sitio funcionando con Live Server (vista completa).

---

## 📊 Rúbrica de Evaluación (100 pts)

| Criterio | Excelente (25) | Bueno (20) | Satisfactorio (15) | Bajo (10) |
|----------|----------------|------------|--------------------|-----------|
| **HTML Semántico y Accesibilidad** | `header`, `nav`, `main`, `section`, `footer` correctos. Todas las imágenes con `alt`. Anclas funcionan. Jerarquía clara (un `h1`, después `h2`, `h3`). | Mayoría de etiquetas semánticas. La mayoría con `alt`. | Al menos 2-3 semánticas. Alt parcial. | Solo `div`. Sin `alt`. |
| **CSS y Box Model** | Selectores variados (tag, class, id). Padding/margin coherentes. CSS organizado por secciones. | Selectores correctos. Espaciado razonable. Estilos consistentes. | Estilos con inconsistencias. CSS repetido. | Estilos mínimos. |
| **Diseño Visual** | Tipografía Google Fonts aplicada. Paleta de 3-4 colores coherente. Espaciado proporcional. Aspecto profesional. | Tipografía y paleta coherentes con desajustes menores. | Cambios presentes pero incoherentes. | Estilos por defecto. |
| **Layout con Flexbox** | Header con logo + nav horizontal en flex. Cards en grid flex con `gap`. Hover con `transition`. `flex-wrap` para móvil. | Flex en al menos 2 lugares. Hover con transición. | Flex con problemas (alineación, sin wrap). Hover sin transición. | No usa Flex. Sin hover. |

**Escala:** A (90-100), B (80-89), C (70-79), F (<70).


---

## 🚀 ¿Y ahora qué?

Felicidades — completaste el M1 en un día. Tu repositorio en GitHub es la base de todo lo que viene en M2:

- **Clase 05:** profundizarás Git y aprenderás comandos avanzados.
- **Clase 06:** harás tu sitio responsive con media queries (más allá de `flex-wrap`).
- **Clase 07:** diseñarás tu **MyLinks** (otro proyecto) en Figma.
- **Clase 08:** generarás código con IA y publicarás en GitHub Pages.

Ya tienes la base. Avanza con confianza.
