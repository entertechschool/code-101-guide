# Lab 03: Estilos con CSS

## 🎯 Objetivos

1. Crear y vincular un archivo CSS externo a tu proyecto
2. Aplicar una paleta de colores coherente con tipografía personalizada
3. Usar el Box Model para controlar el espaciado de elementos

---

## 🔑 Conceptos Clave

- **CSS** - Lenguaje que controla la apariencia visual del HTML
- **Selectores** - Definen qué elementos estilizar (`h1`, `.clase`, `#id`)
- **Box Model** - Modelo de caja: Content → Padding → Border → Margin

---

## ⚙️ Setup Inicial

Este lab continúa el trabajo de la Clase 02. Verifica que tengas todo listo:

| ✓ | Requisito | Verificación |
|---|-----------|--------------|
| ☐ | HTML semántico | Tienes `<header>`, `<main>`, `<section>`, `<footer>` |
| ☐ | Navegación con anclas | Los enlaces saltan a cada sección |
| ☐ | 3+ secciones de contenido | Cada una tiene `id` único |

> ⚠️ Si no completaste el lab anterior, reorganiza tu HTML con etiquetas semánticas antes de continuar.

---

## Parte 1: Configurar CSS (25 min)

### 1.1 Crear el Archivo CSS

En tu carpeta `mi-perfil`, crea un nuevo archivo llamado `styles.css`.

Tu estructura de proyecto debería ser:

```
mi-perfil/
├── index.html
├── styles.css
└── foto.jpg
```

### 1.2 Vincular CSS al HTML

En tu `index.html`, dentro de `<head>`, agrega el link a tu CSS:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Perfil - <!-- Tu nombre --></title>
    <!-- Agrega esta línea -->
    <link rel="stylesheet" href="styles.css">
</head>
```

### 1.3 Verificar que Funciona

En `styles.css`, escribe un estilo de prueba:

```css
body {
    background-color: lightblue;
}
```

Guarda ambos archivos. Si el fondo cambia a celeste, ¡funciona!

> 💡 **Tip:** Borra este estilo de prueba antes de continuar.

✅ **Checkpoint:** Tu CSS está vinculado - cualquier cambio en `styles.css` se refleja en el navegador.

---

## Parte 2: Paleta de Colores y Tipografía (35 min)

### 2.1 Elegir una Paleta

Visita [coolors.co](https://coolors.co/generate){:target="_blank"} y genera paletas hasta encontrar una que te guste.

Necesitas definir estos roles:

| Rol | Uso | Tu color |
|-----|-----|----------|
| **Primario** | Headers, elementos destacados | #______ |
| **Secundario** | Acentos, hover states | #______ |
| **Fondo** | Color del body | #______ |
| **Texto** | Color del texto principal | #______ |

### 2.2 Documentar tu Paleta

En la parte superior de `styles.css`, documenta tus colores:

```css
/* =========================
   MI PALETA DE COLORES
   =========================
   Primario:    #______
   Secundario:  #______
   Fondo:       #______
   Texto:       #______
   ========================= */
```

### 2.3 Agregar Google Fonts

1. Ve a [fonts.google.com](https://fonts.google.com/){:target="_blank"}
2. Elige una tipografía para títulos (ej: Montserrat, Poppins)
3. Elige una tipografía para texto (ej: Open Sans, Roboto)
4. Copia el código `<link>` y agrégalo en `<head>` **antes** de tu CSS:

```html
<head>
    <!-- Google Fonts PRIMERO -->
    <link href="https://fonts.googleapis.com/css2?family=<!-- Tu fuente -->&display=swap" rel="stylesheet">
    <!-- Tu CSS DESPUÉS -->
    <link rel="stylesheet" href="styles.css">
</head>
```

### 2.4 Aplicar Estilos Base

```css
/* Reset básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: '<!-- Tu fuente de texto -->', sans-serif;
    background-color: /* Tu color de fondo */;
    color: /* Tu color de texto */;
}

h1, h2, h3 {
    font-family: '<!-- Tu fuente de títulos -->', sans-serif;
}
```

✅ **Checkpoint:** Tu página tiene colores personalizados y tipografía de Google Fonts.

---

## Parte 3: Box Model y Espaciado (40 min)

### 3.1 Entendiendo el Box Model

```
┌─────────────────────────────────┐
│           MARGIN                │
│   ┌─────────────────────────┐   │
│   │       BORDER            │   │
│   │   ┌─────────────────┐   │   │
│   │   │    PADDING      │   │   │
│   │   │   ┌─────────┐   │   │   │
│   │   │   │ CONTENT │   │   │   │
│   │   │   └─────────┘   │   │   │
│   │   └─────────────────┘   │   │
│   └─────────────────────────┘   │
└─────────────────────────────────┘
```

- **Padding:** Espacio DENTRO del borde (entre contenido y borde)
- **Margin:** Espacio FUERA del borde (entre elementos)

### 3.2 Estilizar el Header

```css
header {
    background-color: /* Tu color primario */;
    color: white;
    padding: /* ¿Cuánto espacio interno? ej: 20px */;
    text-align: center;
}

header h1 {
    margin-bottom: /* Espacio debajo del título */;
}

nav a {
    color: white;
    text-decoration: none;
    margin: 0 10px;
}

nav a:hover {
    color: /* Tu color secundario */;
}
```

### 3.3 Estilizar las Secciones

```css
section {
    padding: /* Espacio interno ej: 40px 20px */;
    max-width: 800px;
    margin: 0 auto; /* Centra la sección */
}

section h2 {
    margin-bottom: /* Espacio debajo del título */;
    color: /* Tu color primario */;
}
```

### 3.4 Estilizar el Footer

```css
footer {
    background-color: /* Tu color primario */;
    color: white;
    text-align: center;
    padding: /* Espacio interno */;
    margin-top: /* Espacio arriba del footer */;
}
```

### 3.5 Estilizar la Imagen

```css
img {
    max-width: 200px;
    border-radius: /* ¿Circular? usa 50% */;
    border: /* ej: 4px solid #color */;
}
```

✅ **Checkpoint:** Tu página tiene espaciado profesional con padding y margin aplicados.

---

## Logros Adicionales (Opcional)

### 🟢 Bordes Decorativos
Agrega `border-bottom` a tus `<h2>` para crear separadores visuales. (Exploraremos más estilos de bordes en Clase 04)

### 🟡 Clases Reutilizables
Crea una clase `.destacado` con fondo de color diferente y aplícala a una sección especial. (Las clases CSS serán fundamentales en Clase 04)

### 🔴 Sombras
Investiga la propiedad `box-shadow` y agrégala a tu imagen o secciones para crear profundidad. (Usaremos sombras extensivamente en Clase 04 con cards)

---

## 📝 Entrega

### Checklist

- [ ] Archivo `styles.css` creado y vinculado correctamente
- [ ] Paleta de colores documentada en comentarios CSS
- [ ] Google Fonts implementado (al menos 1 fuente)

### Entregable

📸 **Screenshot** de tu perfil estilizado donde se vea claramente:
- Header con tu nombre y colores aplicados
- Al menos una sección con contenido estilizado
- Evidencia de tu paleta de colores (no fondo blanco genérico)

> ⚠️ Tu nombre debe ser visible en el header para verificar que es tu trabajo.
