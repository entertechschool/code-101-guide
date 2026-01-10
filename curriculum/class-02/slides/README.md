<!-- .slide: data-background="#0A192F" -->
# Clase 02: Diseña y Estructura
## Wireframes + HTML Semántico

---

## 🔗 TRANSICIÓN: Clase 01 → Clase 02

### Clase anterior:
- Configuraste VS Code y Live Server
- Creaste tu primera página HTML
- Tienes nombre, foto, bio y hobbies

### Hoy:
- **Diseñarás antes de codear** (wireframes)
- Reorganizarás tu HTML con etiquetas semánticas
- Agregarás navegación interna

> "Los profesionales planifican, los amateurs improvisan"

---

## 🧠 QUIZ PRE-LAB

### Pregunta 1:
¿Qué etiqueta usaste para tu título principal en la clase anterior?

### Pregunta 2:
Si un usuario no puede ver tu página, ¿cómo sabría qué hay en tus imágenes?

### Pregunta 3:
¿Qué diferencia hay entre `<div>` y `<section>`? (Es válido decir "no sé")

---

## ✅ CHECKPOINT 1: Wireframe creado

### Verificar en Excalidraw:

**¿Qué debe tener tu wireframe?**
- [ ] Header con tu nombre
- [ ] Al menos 3 secciones de contenido
- [ ] Footer
- [ ] Tu nombre visible en algún lugar

---

## ✅ CHECKPOINT 2: Estructura semántica

### Verificar en tu HTML:

```html
<header>...</header>
<main>
    <section id="...">...</section>
</main>
<footer>...</footer>
```

**¿Qué debe funcionar?**
- [ ] `<header>` contiene tu nombre y `<nav>`
- [ ] `<main>` contiene todo el contenido principal
- [ ] Cada sección tiene su propio `<section>` con `id`

---

## ✅ CHECKPOINT 3: IDs únicos

### Verificar:

Cada `<section>` debe tener un `id` único:

```html
<section id="peliculas">...</section>
<section id="series">...</section>
<section id="libros">...</section>
```

**¿Qué debe funcionar?**
- [ ] Ningún `id` se repite
- [ ] Los `id` son descriptivos (no "seccion1")

---

## ✅ CHECKPOINT 4: Navegación funciona

### Verificar:

Haz clic en cada enlace del `<nav>`:

```html
<nav>
    <a href="#peliculas">Películas</a>
</nav>
```

**¿Qué debe funcionar?**
- [ ] Al hacer clic, la página hace scroll a la sección
- [ ] El `#` en el `href` coincide con el `id` de la sección

---

## 💡 REFLEXIÓN: `<div>` vs Semántico

| Aspecto | `<div>` | `<section>` |
|---------|---------|-------------|
| Significado | Ninguno | "Esto es una sección temática" |
| Lector de pantalla | "grupo" | "sección: películas" |
| SEO | Google no sabe qué es | Google entiende la estructura |
| Código | Más difícil de mantener | Auto-documentado |

> **Regla memorable**: "Si puedes ponerle un título, probablemente es una `<section>`"

---

## 💡 REFLEXIÓN: Accesibilidad

### Pregunta:
¿Por qué importa el atributo `alt` en las imágenes?

| Sin `alt` | Con `alt` descriptivo |
|-----------|----------------------|
| Lector dice: "imagen" | Lector dice: "Foto de María sonriendo" |
| Google ignora la imagen | Google indexa el contenido |
| Usuario ciego excluido | Usuario ciego incluido |

> **15% de la población mundial tiene alguna discapacidad**

---

## 🔗 TRANSICIÓN: Preview Clase 03

### Hoy lograste:
- Diseñar antes de codear (wireframe)
- Estructurar tu HTML con etiquetas semánticas
- Crear navegación interna funcional

### Próxima clase:
- **CSS**: Colores, tipografías, espaciado
- Box Model: el secreto de todo layout
- Google Fonts para tipografía profesional

---

## ❓ Preguntas de Cierre

1. ¿Cuándo usarías `<article>` vs `<section>`?

2. ¿Por qué crees que los profesionales diseñan wireframes antes de codear?

3. ¿Qué paleta de colores te gustaría para tu perfil?

---

## 📝 Entrega

- Screenshot de tu wireframe (con tu nombre visible)
- Screenshot de tu página con navegación funcionando

### Próxima clase: Estilos con CSS
**Explora Google Fonts y Coolors antes de la clase**
