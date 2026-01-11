# Lab 02: Diseña y Estructura

## 🎯 Objetivos

1. Crear un wireframe que planifique la estructura de tu perfil
2. Reorganizar tu HTML usando etiquetas semánticas
3. Implementar navegación interna con enlaces ancla

---

## 🔑 Conceptos Clave

- **Wireframe** - Boceto visual que planifica la estructura antes de codear
- **HTML Semántico** - Etiquetas que describen el propósito del contenido (`<header>`, `<main>`, `<section>`)
- **Enlaces ancla** - Navegación dentro de la misma página usando `href="#id"`

---

## ⚙️ Setup Inicial

Este lab continúa el trabajo de la Clase 01. Verifica que tengas todo listo:

| ✓ | Requisito | Verificación |
|---|-----------|--------------|
| ☐ | Carpeta `mi-perfil` | Existe en tu computadora |
| ☐ | `index.html` con contenido | Tiene tu nombre, foto, bio y hobbies |
| ☐ | VS Code + Live Server | Página visible en `localhost:5500` |

> ⚠️ Si no completaste el lab anterior, crea la estructura base antes de continuar.

---

## Parte 1: Wireframe en Excalidraw (30 min)

### 1.1 Acceder a Excalidraw

1. Abre [excalidraw.com](https://excalidraw.com/){:target="_blank"}
2. No necesitas crear cuenta (funciona sin login)
3. Familiarízate con las herramientas básicas: rectángulo, texto, líneas

### 1.2 Estructura Base del Wireframe

Dibuja la estructura de tu perfil con estos bloques:

```
┌─────────────────────────────────┐
│           HEADER                │
│  (Tu Nombre + Navegación)       │
├─────────────────────────────────┤
│           ABOUT                 │
│  (Foto + Bio)                   │
├─────────────────────────────────┤
│         SECCIÓN 1               │
│  (ej: Películas Favoritas)      │
├─────────────────────────────────┤
│         SECCIÓN 2               │
│  (ej: Series que Recomiendo)    │
├─────────────────────────────────┤
│         SECCIÓN 3               │
│  (ej: Música / Libros)          │
├─────────────────────────────────┤
│           FOOTER                │
│  (Tu nombre + Año)              │
└─────────────────────────────────┘
```

### 1.3 Personaliza Tu Wireframe

Decide qué secciones tendrá tu perfil:

| Tema | Ejemplo de contenido |
|------|---------------------|
| 🎬 Películas | Top 5 películas favoritas |
| 📺 Series | Series que estoy viendo |
| 📚 Libros | Últimas lecturas |
| 🎵 Música | Artistas o géneros favoritos |
| ⚽ Deportes | Equipos o actividades |
| 🎮 Gaming | Juegos favoritos |

> 💡 **Tip:** Elige al menos 3 secciones que te representen.

### 1.4 Agrega Tu Nombre al Wireframe

En el header de tu wireframe, escribe tu nombre real. Esto es importante para verificar que el wireframe es tuyo.

✅ **Checkpoint:** Tienes un wireframe con header (con tu nombre), al menos 3 secciones, y footer.

---

## Parte 2: HTML Semántico (35 min)

### 2.1 Entendiendo las Etiquetas Semánticas

| Etiqueta | Propósito | Cuándo usar |
|----------|-----------|-------------|
| `<header>` | Encabezado | Parte superior con título/navegación |
| `<nav>` | Navegación | Menú de enlaces |
| `<main>` | Contenido principal | Todo el contenido central (solo uno) |
| `<section>` | Sección temática | Cada grupo de contenido relacionado |
| `<footer>` | Pie de página | Información final, copyright |

### 2.2 Transforma Tu HTML

Abre tu archivo `index.html` del proyecto `mi-perfil`.

**Tu HTML actual (Clase 01):**
```html
<body>
    <h1>Tu Nombre</h1>
    <img src="foto.jpg" alt="...">
    <p>Tu bio...</p>
    <h2>Mis Hobbies</h2>
    <ul>...</ul>
</body>
```

**Reorganiza con esta estructura semántica:**
```html
<body>
    <header>
        <h1><!-- Tu nombre --></h1>
        <nav>
            <!-- Los enlaces irán aquí -->
        </nav>
    </header>

    <main>
        <section id="about">
            <!-- Tu foto y bio -->
        </section>

        <section id="<!-- nombre-seccion-1 -->">
            <h2><!-- Título sección 1 --></h2>
            <!-- Contenido -->
        </section>

        <section id="<!-- nombre-seccion-2 -->">
            <h2><!-- Título sección 2 --></h2>
            <!-- Contenido -->
        </section>

        <section id="<!-- nombre-seccion-3 -->">
            <h2><!-- Título sección 3 --></h2>
            <!-- Contenido -->
        </section>
    </main>

    <footer>
        <p>Hecho por <!-- Tu nombre --> - 2025</p>
    </footer>
</body>
```

> ⚠️ **Importante:** Cada `id` debe ser único y sin espacios. Usa guiones: `id="mis-peliculas"`, no `id="mis peliculas"`.

✅ **Checkpoint:** Tu HTML usa etiquetas semánticas (`header`, `main`, `section`, `footer`).

---

## Parte 3: Navegación Interna (35 min)

### 3.1 Cómo Funcionan los Enlaces Ancla

```html
<!-- El enlace en el nav -->
<a href="#peliculas">Películas</a>

<!-- La sección destino (más abajo) -->
<section id="peliculas">
    <h2>Mis Películas Favoritas</h2>
</section>
```

El `href="#peliculas"` busca un elemento con `id="peliculas"` y hace scroll hasta él.

### 3.2 Crea Tu Navegación

Dentro de `<nav>`, agrega enlaces a cada sección:

```html
<nav>
    <a href="#about"><!-- Texto del enlace --></a>
    <a href="#<!-- id-seccion-1 -->"><!-- Texto --></a>
    <a href="#<!-- id-seccion-2 -->"><!-- Texto --></a>
    <a href="#<!-- id-seccion-3 -->"><!-- Texto --></a>
</nav>
```

### 3.3 Agrega Contenido a las Secciones

Cada sección debe tener contenido real:

```html
<section id="peliculas">
    <h2>🎬 Mis Películas Favoritas</h2>
    <ul>
        <li>
            <strong><!-- Título película --></strong>
            <p><!-- Por qué te gusta --></p>
        </li>
        <!-- Agrega más items -->
    </ul>
</section>
```

### 3.4 Verifica la Navegación

1. Guarda el archivo
2. En el navegador, haz clic en cada enlace del nav
3. La página debe hacer scroll a la sección correspondiente

> ⚠️ **Si no funciona:** Verifica que el `id` en la sección coincida exactamente con el `#` en el enlace (sin espacios, mismo caso).

✅ **Checkpoint:** La navegación funciona - al hacer clic en cada enlace, la página salta a la sección correcta.

---

## Logros Adicionales (Opcional)

### 🟢 Volver Arriba
Agrega un enlace "↑ Volver arriba" al final de cada sección que lleve al header usando `href="#"`. (Exploraremos más patrones de navegación en Clase 03)

### 🟡 Accesibilidad Mejorada
Investiga el atributo `aria-label` y agrégalo a tu `<nav>` para mejorar la experiencia con lectores de pantalla. (Profundizaremos en accesibilidad en el Módulo 2)

### 🔴 Navegación Visual
Organiza tus enlaces de navegación como lista horizontal usando `<ul>` y `<li>` dentro de `<nav>`. (Aprenderemos a estilizar esto con CSS en Clase 03)

---

## 📝 Entrega

### Checklist

- [ ] Wireframe creado en Excalidraw con tu nombre visible
- [ ] HTML reorganizado con etiquetas semánticas
- [ ] Navegación con enlaces ancla funcionando

### Entregable

📸 **Dos screenshots:**

1. **Wireframe en Excalidraw** donde se vea claramente:
   - Tu nombre en el header del diseño
   - Al menos 3 secciones planificadas

2. **Página en navegador** donde se vea claramente:
   - Tu nombre en el `<h1>`
   - La navegación con enlaces

> ⚠️ Ambos screenshots deben mostrar tu nombre para verificar que es tu trabajo.
