<!-- .slide: data-background="#0A192F" -->
# Clase 03: Estilos con CSS
## Colores, Tipografía y Box Model

---

## 🔗 TRANSICIÓN: Clase 02 → Clase 03

### Clase anterior:
- Creaste un wireframe en Excalidraw
- Reorganizaste tu HTML con etiquetas semánticas
- Implementaste navegación con enlaces ancla

### Hoy:
- **Transformarás visualmente** tu página con CSS
- Elegirás una paleta de colores profesional
- Dominarás el Box Model para espaciado

> "HTML es el esqueleto, CSS es la ropa y el maquillaje"

---

## 🧠 QUIZ PRE-LAB

### Pregunta 1:
¿Qué etiqueta usaste para el contenido principal de tu página?

### Pregunta 2:
Si quieres que un enlace lleve a la sección "películas", ¿qué valor pones en el `href`?

### Pregunta 3:
¿Qué diferencia hay entre `padding` y `margin`? (Es válido decir "no sé")

---

## ✅ CHECKPOINT 1: CSS vinculado

### Verificar en el navegador:

```css
body {
    background-color: lightblue;
}
```

**¿Qué debe funcionar?**
- [ ] Existe archivo `styles.css` en tu carpeta
- [ ] El `<link>` está en el `<head>` de tu HTML
- [ ] El fondo de la página cambia de color

---

## ✅ CHECKPOINT 2: Paleta de colores

### Verificar en tu CSS:

```css
/* MI PALETA DE COLORES
   Primario:    #2d3436
   Secundario:  #0984e3
   Fondo:       #f5f6fa
   Texto:       #2d3436
*/
```

**¿Qué debe funcionar?**
- [ ] Paleta documentada en comentarios CSS
- [ ] Al menos 3 colores aplicados (body, header, footer)
- [ ] Los colores combinan entre sí

---

## ✅ CHECKPOINT 3: Google Fonts

### Verificar en tu HTML y CSS:

```html
<link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet">
```

```css
body {
    font-family: 'Open Sans', sans-serif;
}
```

**¿Qué debe funcionar?**
- [ ] El `<link>` de Google Fonts está ANTES del link a tu CSS
- [ ] La tipografía cambió visualmente en el navegador

---

## ✅ CHECKPOINT 4: Box Model aplicado

### Verificar con DevTools (F12):

```css
section {
    padding: 40px 20px;
    margin: 0 auto;
    max-width: 800px;
}
```

**¿Qué debe funcionar?**
- [ ] Header y footer tienen padding
- [ ] Secciones tienen espaciado interno
- [ ] Puedes ver el box model en DevTools

---

## 💡 REFLEXIÓN: Box Model

| Propiedad | Qué hace | Uso común |
|-----------|----------|-----------|
| `padding` | Espacio INTERNO | Separar contenido del borde |
| `margin` | Espacio EXTERNO | Separar elementos entre sí |
| `border` | Línea del borde | Delimitar visualmente |

> **Regla memorable**: "Padding es el relleno del colchón, margin es el espacio entre muebles"

---

## 💡 REFLEXIÓN: Selectores CSS

### Pregunta:
¿Cuándo usarías un ID (`#header`) vs una clase (`.card`)?

| Selector | Cuándo usar | Ejemplo |
|----------|-------------|---------|
| Elemento | Estilos generales | `h1 { }` |
| Clase | Elementos repetibles | `.card { }` |
| ID | Elemento único | `#header { }` |

---

## 🔗 TRANSICIÓN: Preview Clase 04

### Hoy lograste:
- Vincular CSS externo a tu HTML
- Crear una paleta de colores coherente
- Aplicar tipografía con Google Fonts
- Usar el Box Model para espaciado

### Próxima clase:
- **Flexbox**: el sistema de layout moderno
- Header horizontal con navegación
- Cards organizadas en filas
- Estados hover y transiciones

---

## ❓ Preguntas de Cierre

1. ¿Por qué es mejor usar un archivo CSS externo en vez de estilos inline?

2. ¿Cómo decidirías qué fuente usar para títulos vs texto?

3. ¿Qué layout te gustaría lograr con Flexbox en la próxima clase?

---

## 📝 Entrega

- Screenshot de tu página con CSS aplicado
- Debe verse tu paleta de colores en acción
- Header con tu nombre claramente visible

### Próxima clase: Layout Moderno con Flexbox
**Explora layouts de Netflix, Spotify o sitios que te gusten**
