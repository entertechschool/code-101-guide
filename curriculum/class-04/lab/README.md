# Lab: Mi Perfil Personal - Proyecto Final M1

> ⚠️ **Lab Calificado** - Este lab será evaluado según la rúbrica incluida abajo.
>
> 📌 **Distribución:** Se espera completar ~50% durante la sesión en vivo (Partes 1-2) y el resto antes de la fecha de entrega.

## Objetivos del Módulo

Este lab integra todo lo aprendido en el Módulo 1:

1. Aplicar Flexbox para crear layouts profesionales (header + cards)
2. Implementar estados hover con transiciones suaves
3. Demostrar dominio de HTML semántico, CSS y diseño visual

---

## Conceptos Clave

- **Flexbox** - Sistema de layout unidimensional con `display: flex`
- **justify-content / align-items** - Controlan distribución en ejes principal y cruzado
- **:hover + transition** - Estados interactivos con animaciones suaves

---

## Tu Proyecto Hasta Ahora

Deberías tener:
- [ ] HTML semántico (`<header>`, `<main>`, `<section>`, `<footer>`)
- [ ] Navegación con enlaces ancla funcionando
- [ ] CSS con paleta de colores y Google Fonts
- [ ] Al menos 3 secciones de contenido personal

Si te falta algo, este es el momento de completarlo antes de continuar.

---

## Parte 1: Entendiendo Flexbox (30 min)

### 1.1 El Concepto

Flexbox organiza elementos en **una dimensión** (fila O columna):

```
SIN FLEXBOX:              CON FLEXBOX:
┌─────────┐               ┌─────┬─────┬─────┐
│  Item 1 │               │  1  │  2  │  3  │
├─────────┤       →       └─────┴─────┴─────┘
│  Item 2 │
├─────────┤
│  Item 3 │
└─────────┘
```

### 1.2 Propiedades Clave

```css
.container {
    display: flex;           /* Activa Flexbox */
    justify-content: center; /* Eje horizontal */
    align-items: center;     /* Eje vertical */
    gap: 20px;              /* Espacio entre items */
}
```

### 1.3 Valores de justify-content

| Valor | Efecto |
|-------|--------|
| `flex-start` | Todos al inicio |
| `flex-end` | Todos al final |
| `center` | Todos al centro |
| `space-between` | Espacio entre elementos |
| `space-around` | Espacio alrededor de cada uno |

### 1.4 Aplicar Flexbox al Header

En tu `styles.css`, modifica el header:

```css
header {
    display: flex;
    justify-content: /* ¿Cómo quieres distribuir nombre y nav? */;
    align-items: center;
    padding: 20px 40px;
    background-color: /* Tu color primario */;
    color: white;
}
```

> 💡 **Tip:** Usa `space-between` para nombre a la izquierda y nav a la derecha.

✅ **Checkpoint:** Tu header tiene nombre a la izquierda y navegación horizontal a la derecha.

---

## Parte 2: Cards de Contenido (30 min)

### 2.1 Flexbox en la Navegación

```css
nav {
    display: flex;
    gap: /* Espacio entre enlaces */;
}

nav a {
    color: white;
    text-decoration: none;
    padding: 8px 16px;
}
```

### 2.2 Agregar Estructura de Cards

En una de tus secciones, crea un contenedor de cards:

```html
<section id="peliculas">
    <h2>🎬 Mis Películas Favoritas</h2>
    <div class="cards">
        <div class="card">
            <h3><!-- Título --></h3>
            <p><!-- Descripción --></p>
        </div>
        <!-- Agrega más cards -->
    </div>
</section>
```

### 2.3 Estilos del Contenedor y Cards

```css
.cards {
    display: flex;
    gap: /* Espacio entre cards */;
    flex-wrap: wrap;      /* Bajan si no caben */
    justify-content: center;
}

.card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    width: 200px;
    text-align: center;
}

.card h3 {
    margin-bottom: 10px;
    color: /* Tu color primario */;
}
```

✅ **Checkpoint:** Tienes cards organizadas horizontalmente que se ajustan al ancho.

---

## Parte 3: Estados Hover y Transiciones (30 min)

### 3.1 Hover en Navegación

```css
nav a {
    /* ... estilos anteriores ... */
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

nav a:hover {
    background-color: rgba(255,255,255,0.2);
}
```

### 3.2 Hover en Cards

```css
.card {
    /* ... estilos anteriores ... */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}
```

### 3.3 Hover en Imagen (Opcional)

```css
img {
    /* ... estilos anteriores ... */
    transition: transform 0.3s ease;
}

img:hover {
    transform: scale(1.05);
}
```

> 💡 **Clave:** `transition` va en el estado NORMAL, no en `:hover`.

✅ **Checkpoint:** Los elementos reaccionan suavemente al pasar el mouse.

---

## Parte 4: Verificación Final (15 min)

Usa la rúbrica de abajo para verificar que tu proyecto esté completo antes de entregar.

---

## Parte 5: Desafío Avanzado (25 min)

> 🔥 **Desafío Post-Clase** - Esta sección es más avanzada y se espera completar después de la sesión en vivo.

### 5.1 Footer Profesional con Flexbox

Crea un footer completo que demuestre dominio de Flexbox:

```html
<footer>
    <div class="footer-content">
        <div class="footer-section">
            <h4>Sobre Mí</h4>
            <p><!-- Breve bio --></p>
        </div>
        <div class="footer-section">
            <h4>Contacto</h4>
            <p><!-- Email u otra info --></p>
        </div>
        <div class="footer-section">
            <h4>Enlaces</h4>
            <!-- Links a secciones -->
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2024 Tu Nombre</p>
    </div>
</footer>
```

```css
footer {
    background-color: /* Tu color oscuro */;
    color: white;
    padding: 40px 20px 20px;
}

.footer-content {
    display: flex;
    justify-content: /* ¿Cómo distribuir las 3 secciones? */;
    gap: 40px;
    max-width: 1000px;
    margin: 0 auto;
}

.footer-section {
    flex: 1; /* Cada sección ocupa espacio igual */
}

.footer-bottom {
    text-align: center;
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid rgba(255,255,255,0.2);
}
```

### 5.2 Efecto Hover Avanzado en Footer Links

```css
.footer-section a {
    color: /* Color claro */;
    text-decoration: none;
    transition: color 0.3s ease, padding-left 0.3s ease;
}

.footer-section a:hover {
    color: /* Tu color de acento */;
    padding-left: 5px; /* Efecto de desplazamiento */
}
```

### 5.3 Integración Final

Verifica que tu proyecto tenga coherencia visual:

- [ ] El footer usa los mismos colores que tu paleta
- [ ] Las transiciones son consistentes (mismo timing que nav y cards)
- [ ] El footer complementa el header visualmente

✅ **Checkpoint:** Tu perfil tiene un footer profesional con 3 columnas que responde al hover.

---

## Logros Adicionales (Opcional)

### 🟢 Media Query Básica
Investiga `@media (max-width: 600px)` para cambiar `flex-direction` del header en móvil. (Profundizaremos en responsive design en Módulo 2)

### 🟡 Iconos con Emojis o Font Awesome
Agrega iconos visuales a tu navegación o secciones. (Exploraremos bibliotecas de iconos en Módulo 2)

### 🔴 Hero Section
Crea una sección hero con tu foto y bio lado a lado usando Flexbox. (Aprenderemos layouts complejos en Módulo 2)

---

## Rúbrica de Evaluación

| Criterio | Excelente (20) | Bueno (15) | Satisfactorio (10) | Bajo (5) |
|----------|---------------|------------|-------------------|----------|
| **Estructura HTML** | HTML semántico completo. Navegación con anclas funcionando. 4+ secciones de contenido real. | HTML semántico mayormente correcto. Nav funciona parcialmente. 3 secciones. | HTML básico. Algunas etiquetas semánticas. 2 secciones. | Sin estructura semántica. Menos de 2 secciones. |
| **Estilos CSS** | CSS externo organizado. Paleta coherente (4+ colores). Google Fonts. Box Model correcto. | CSS externo. Paleta coherente (3 colores). Tipografía personalizada. | CSS presente. Colores básicos. Tipografía por defecto. | CSS mínimo o inline. Sin paleta. |
| **Layout Flexbox** | Flexbox en header + cards. Hover con transiciones en nav Y cards. Layout equilibrado. | Flexbox en header. Cards presentes. Hover en nav o cards. | Flexbox intentado. Problemas de alineación. Hover básico. | Sin Flexbox. Todo vertical. Sin hover. |
| **Calidad General** | Wireframe documentado. Diseño coherente. Contenido personal real. Código limpio. | Wireframe presente. Diseño coherente. Contenido real. | Wireframe básico/ausente. Diseño inconsistente. | Sin wireframe. Diseño incoherente. Contenido placeholder. |
| **Desafío Avanzado** | Footer con Flexbox de 3 columnas. Hover avanzado en links. Coherencia visual con el resto del sitio. | Footer presente con Flexbox. Hover básico en links. | Footer simple sin Flexbox o incompleto. | Sin footer o footer sin estilo. |

**Total: 100 puntos**

---

## Entrega

📦 **Entregable:**

1. **Screenshot** de tu proyecto terminado mostrando:
   - Header con tu nombre y navegación horizontal
   - Al menos una sección con cards
   - Evidencia de tu diseño visual (colores, tipografía)

2. **Código fuente** (una de estas opciones):
   - Link a repositorio de GitHub, o
   - Link a tu pen de Codepen.io, o
   - Archivo comprimido (.zip) del proyecto
