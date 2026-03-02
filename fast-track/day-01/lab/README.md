# Día 1: HTML + CSS Base + Git Setup

> 🚀 **Proyecto:** Mi Portfolio Dev
>
> 📌 **Hoy:** Crear la estructura HTML completa y los estilos base de tu portfolio.

## 🎯 Objetivos

1. Configurar tu entorno de desarrollo y repositorio Git
2. Crear la estructura HTML completa con 6 secciones semánticas
3. Aplicar estilos CSS base con Google Fonts y valores directos
4. Hacer tu primer commit y push a GitHub

---

## 🔑 Conceptos Clave

- **HTML semántico** - Usar etiquetas que describen el significado del contenido (`<header>`, `<section>`, `<footer>`)
- **CSS** - Lenguaje que define la apariencia visual de tu página (colores, tipografía, espaciado)
- **Git** - Sistema que guarda el historial de tu código
- **Commit** - Guardar cambios con un mensaje descriptivo

---

## ⚙️ Setup Inicial

| ✓ | Requisito | Verificación |
|---|-----------|--------------|
| ☐ | VS Code instalado | Puedes abrirlo sin errores |
| ☐ | Live Server instalado | Extensión visible en VS Code |
| ☐ | Git instalado | `git --version` muestra versión |
| ☐ | Cuenta de GitHub | Puedes iniciar sesión en [github.com](https://github.com){:target="_blank"} |

---

## Parte 1: Crear Repositorio y Clonar (10 min)

### 1.1 Crear repositorio en GitHub

1. Ve a [github.com/new](https://github.com/new){:target="_blank"}
2. Configura tu repositorio:

| Campo | Valor |
|-------|-------|
| Repository name | `mi-portfolio-dev` |
| Description | `Mi portfolio personal de desarrollador` |
| Visibility | Public |
| Add a README | ✅ Marcado |

3. Clic en **Create repository**

### 1.2 Clonar en tu computadora

Abre la terminal en VS Code (`Ctrl+`` o `Cmd+``):

```bash
cd ~/Desktop
```

Clona tu repositorio (reemplaza `TU-USUARIO`):

```bash
git clone https://github.com/TU-USUARIO/mi-portfolio-dev.git
```

Abre el proyecto en VS Code:

```bash
cd mi-portfolio-dev
code .
```

### 1.3 Crear archivos del proyecto

En la terminal, crea los tres archivos:

```bash
touch index.html styles.css script.js
```

> 💡 **Tip:** También puedes copiar los archivos de la carpeta `starter/` que tu instructor te proporcionará.

✅ **Checkpoint:** Tienes un repositorio clonado con `index.html`, `styles.css` y `script.js` vacíos.

---

## Parte 2: Estructura HTML (40 min)

### 2.1 Base del documento

Abre `index.html` y escribe la estructura base:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Portfolio Dev</title>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">

  <!-- Estilos -->
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <!-- El contenido va aquí -->

  <script src="script.js"></script>
</body>
</html>
```

> 💡 **Google Fonts:** Visita [fonts.google.com](https://fonts.google.com){:target="_blank"} para elegir otra fuente si lo prefieres. Reemplaza el enlace de `Inter` por el de tu elección.

### 2.2 Navegación

Agrega dentro de `<body>`, antes del comentario:

```html
  <!-- Navegación -->
  <nav>
    <div class="nav-brand">Tu Nombre</div>
    <button class="nav-toggle" aria-label="Abrir menú">☰</button>
    <ul class="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contacto</a></li>
    </ul>
  </nav>
```

> 📌 **¿Por qué `aria-label`?** Hace que el botón sea accesible para lectores de pantalla.

### 2.3 Sección Hero

```html
  <!-- Hero -->
  <section id="hero">
    <img src="https://via.placeholder.com/150" alt="Foto de Tu Nombre" class="hero-img">
    <h1>Tu Nombre</h1>
    <p class="hero-subtitle">Estudiante de Desarrollo Web</p>
    <a href="#contact" class="btn">Contáctame</a>
  </section>
```

> 💡 **Personalización:** Reemplaza la imagen placeholder con tu foto. Puedes usar un servicio como [UI Avatars](https://ui-avatars.com){:target="_blank"} mientras tanto.

### 2.4 Sección About

```html
  <!-- About -->
  <section id="about">
    <h2>Sobre Mí</h2>
    <p>
      Soy estudiante de desarrollo web en Enter Tech School.
      Me apasiona crear soluciones tecnológicas que impacten
      positivamente en las personas.
    </p>
    <p>
      Actualmente estoy aprendiendo HTML, CSS y JavaScript
      para construir aplicaciones web modernas.
    </p>
    <ul class="about-interests">
      <li>🎯 Desarrollo web frontend</li>
      <li>🎨 Diseño de interfaces</li>
      <li>🤖 Inteligencia artificial</li>
      <li>📱 Aplicaciones móviles</li>
    </ul>
  </section>
```

> 💡 **`<ul>` semántico:** Las listas no ordenadas son perfectas para enumerar intereses, habilidades o ítems sin jerarquía.

### 2.5 Sección Skills

```html
  <!-- Skills -->
  <section id="skills">
    <h2>Mis Skills</h2>
    <div class="skills-container">
      <div class="skill-card">
        <h3>HTML</h3>
        <p>Estructura y semántica web</p>
      </div>
      <div class="skill-card">
        <h3>CSS</h3>
        <p>Estilos y diseño responsive</p>
      </div>
      <div class="skill-card">
        <h3>JavaScript</h3>
        <p>Interactividad y lógica</p>
      </div>
      <div class="skill-card">
        <h3>Git</h3>
        <p>Control de versiones</p>
      </div>
    </div>
  </section>
```

### 2.6 Sección Projects

```html
  <!-- Projects -->
  <section id="projects">
    <h2>Mis Proyectos</h2>
    <div class="projects-container">
      <article class="project-card">
        <h3>Mi Portfolio Dev</h3>
        <p>Sitio web personal construido con HTML, CSS y JavaScript.</p>
        <a href="#" class="btn">Ver Proyecto</a>
      </article>
      <article class="project-card">
        <h3>Calculadora JS</h3>
        <p>Calculadora interactiva con operaciones básicas.</p>
        <a href="#" class="btn">Ver Proyecto</a>
      </article>
      <article class="project-card">
        <h3>Landing Page</h3>
        <p>Página de aterrizaje responsive para un producto.</p>
        <a href="#" class="btn">Ver Proyecto</a>
      </article>
    </div>
  </section>
```

> 💡 **`<article>` vs `<div>`:** Usamos `<article>` porque cada project card es contenido independiente que podría existir por sí solo. Es el mismo patrón de "card" que usamos en Skills, pero con semántica más precisa.

### 2.7 Sección Contact

```html
  <!-- Contact -->
  <section id="contact">
    <h2>Contacto</h2>
    <form id="contact-form">
      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="tu@email.com" required>
      </div>
      <div class="form-group">
        <label for="mensaje">Mensaje</label>
        <textarea id="mensaje" name="mensaje" rows="4" placeholder="Escribe tu mensaje..." required></textarea>
      </div>
      <button type="submit" class="btn">Enviar Mensaje</button>
      <p id="form-feedback" class="form-feedback"></p>
    </form>
  </section>
```

> 📌 **Atributos del formulario:**
> - `for` y `id` conectan cada `<label>` con su campo
> - `required` indica que el campo es obligatorio
> - `type="email"` activa validación básica del navegador

### 2.8 Footer

```html
  <!-- Footer -->
  <footer>
    <p>Tu Nombre &mdash; Desarrollador Web en formación</p>
    <p>
      <a href="https://github.com/TU-USUARIO" target="_blank">GitHub</a> |
      <a href="https://linkedin.com/in/TU-USUARIO" target="_blank">LinkedIn</a>
    </p>
    <p>&copy; 2026 Tu Nombre</p>
  </footer>
```

> 💡 **Footer simple:** Este footer tiene solo lo esencial. Mañana (Día 2) vamos a convertirlo en un layout de columnas con Flexbox.

Guarda el archivo y haz clic derecho → **Open with Live Server**.

✅ **Checkpoint:** Tu página muestra las 6 secciones con contenido. Se ve feo (sin estilos), pero la estructura está completa.

---

## Parte 3: CSS Base (45 min)

### 3.1 Reset y Base

Abre `styles.css` y comienza con el reset y los estilos base:

```css
/* Reset */
* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }

/* Base */
body {
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
  color: #1e293b;
  background-color: #f8fafc;
}
h1, h2, h3 { line-height: 1.2; }
a { text-decoration: none; color: #2563eb; }
img { max-width: 100%; height: auto; }
```

> 💡 **¿Qué hace el reset?** Todos los navegadores agregan márgenes y paddings por defecto. El reset los elimina para que nosotros controlemos el espaciado.

### 3.2 Navegación

```css
/* Nav */
nav {
  background-color: #ffffff;
  padding: 1rem;
  border-bottom: 1px solid #e2e8f0;
}
.nav-brand { font-weight: 700; font-size: 1.2rem; color: #2563eb; }
.nav-toggle { display: none; }
.nav-links {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}
.nav-links a { color: #1e293b; }
```

> 📌 **Nota:** El botón hamburguesa se oculta con `display: none` por ahora. Mañana lo vamos a activar cuando hagamos el menú responsive.

### 3.3 Hero

```css
/* Hero */
#hero {
  text-align: center;
  padding: 4rem 1rem;
  background-color: #ffffff;
}
.hero-img {
  width: 150px; height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}
#hero h1 { font-size: 2rem; margin-bottom: 0.5rem; }
.hero-subtitle { color: #64748b; font-size: 1.1rem; margin-bottom: 1.5rem; }
```

### 3.4 Botón

```css
/* Botón */
.btn {
  display: inline-block;
  background-color: #2563eb;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
}
```

### 3.5 Secciones, Skills y Projects

```css
/* Secciones */
section { padding: 3rem 1rem; max-width: 800px; margin: 0 auto; }
section h2 { font-size: 1.8rem; margin-bottom: 1rem; }
#about p { margin-bottom: 1rem; color: #64748b; }

/* Skills */
.skills-container { margin-top: 1rem; }
.skill-card {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin-bottom: 1rem;
}
.skill-card h3 { color: #2563eb; margin-bottom: 0.5rem; }
.skill-card p { color: #64748b; font-size: 0.9rem; }

/* Projects */
.project-card {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin-bottom: 1rem;
}
.project-card h3 { color: #2563eb; margin-bottom: 0.5rem; }
.project-card p { color: #64748b; font-size: 0.9rem; margin-bottom: 1rem; }
```

> 💡 **Patrón card:** Notarás que `.project-card` y `.skill-card` tienen estilos muy similares. Mañana (Día 2), cuando aprendamos CSS Variables, veremos cómo reutilizar estos valores.

### 3.6 Formulario de Contacto

```css
/* Contact */
#contact { background-color: #ffffff; border-radius: 0.5rem; }
.form-group { margin-bottom: 1.5rem; }
.form-group label { display: block; margin-bottom: 0.5rem; font-weight: 600; }
.form-group input, .form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
}
```

### 3.7 Footer

```css
/* Footer */
footer {
  background-color: #1e293b;
  color: #ffffff;
  padding: 2rem 1rem;
  margin-top: 2rem;
  text-align: center;
}
footer a { color: #e2e8f0; }
```

> 💡 **Footer minimalista:** Solo necesitamos fondo oscuro y texto claro. Mañana (Día 2) le agregaremos layout de columnas con Flexbox y más estilos.

Guarda y verifica en el navegador con Live Server.

✅ **Checkpoint:** Tu portfolio tiene estilo visual: tipografía, colores y espaciado aplicados. Las cards de skills y projects están apiladas (una por fila) y no hay efectos hover todavía — mañana vamos a organizar estos colores con variables CSS, agregar Flexbox y efectos interactivos.

---

## Parte 4: Primer Commit y Push (5 min)

Es momento de guardar tu progreso en Git.

### 4.1 Verificar cambios

```bash
git status
```

Deberías ver los 3 archivos nuevos en rojo.

### 4.2 Agregar y hacer commit

```bash
git add .
git commit -m "feat: estructura HTML y CSS base del portfolio"
```

### 4.3 Push a GitHub

```bash
git push
```

> 💡 Si es tu primer push, Git puede pedirte autenticación. Tu instructor te guiará.

### 4.4 Verificar en GitHub

Ve a `https://github.com/TU-USUARIO/mi-portfolio-dev` y confirma que ves tus archivos.

✅ **Checkpoint Final:** Tu código está en GitHub con un commit descriptivo. Mañana agregaremos variables CSS, Flexbox y responsive.

---

## 📝 Resumen del Día

| Lo que hicimos | Tecnología |
|----------------|------------|
| Creamos repositorio y clonamos | Git, GitHub |
| Estructura de 6 secciones | HTML semántico |
| Project cards con `<article>` | HTML semántico |
| Formulario de contacto | HTML forms |
| Estilos base directos | CSS |
| Tipografía con Google Fonts | Google Fonts |
| Primer commit y push | Git |

---

## Logros Adicionales

Si terminaste antes, intenta:

- 🟢 Cambiar los colores del sitio (busca los valores hexadecimales como `#2563eb` y cámbialos)
- 🟢 Agregar una quinta skill card o un cuarto project card
- 🟡 Cambiar la fuente de Google Fonts por una combinación de dos fuentes (una para títulos, otra para texto)
- 🟡 Agregar un `<blockquote>` con tu frase favorita en la sección About
