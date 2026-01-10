<!-- .slide: data-background="#0A192F" -->
# Clase 04: Layout Moderno con Flexbox
## El Sistema que Usa Netflix, Spotify y Amazon

---

## 🔗 TRANSICIÓN: Clase 03 → Clase 04

### Clase anterior:
- Vinculaste CSS externo a tu HTML
- Elegiste una paleta de colores
- Aplicaste tipografía con Google Fonts
- Usaste Box Model para espaciado

### Hoy:
- **Dominarás Flexbox** para layouts profesionales
- Crearás un header horizontal
- Organizarás contenido en cards
- Agregarás interactividad con hover

> "Flexbox resolvió en una línea lo que antes tomaba 50"

---

## 🧠 QUIZ PRE-LAB

### Pregunta 1:
¿Qué propiedad CSS usas para agregar espacio DENTRO de un elemento?

### Pregunta 2:
Si quieres centrar horizontalmente una sección, ¿qué valor de `margin` usarías?

### Pregunta 3:
¿Cómo organizan sus elementos Netflix o Spotify? (horizontal, vertical, grid...)

---

## ✅ CHECKPOINT 1: Header con Flexbox

### Verificar en tu navegador:

```css
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

**¿Qué debe funcionar?**
- [ ] Tu nombre aparece a la izquierda
- [ ] La navegación aparece a la derecha
- [ ] Ambos están alineados verticalmente

---

## ✅ CHECKPOINT 2: Navegación horizontal

### Verificar:

```css
nav {
    display: flex;
    gap: 20px;
}
```

**¿Qué debe funcionar?**
- [ ] Los enlaces de nav están en fila
- [ ] Hay espacio uniforme entre ellos
- [ ] Se ven profesionales

---

## ✅ CHECKPOINT 3: Cards en layout

### Verificar:

```css
.cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}
```

**¿Qué debe funcionar?**
- [ ] Tienes al menos 3 cards
- [ ] Están organizadas horizontalmente
- [ ] Se centran en la página

---

## ✅ CHECKPOINT 4: Hover states

### Verificar pasando el mouse:

```css
.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}
```

**¿Qué debe funcionar?**
- [ ] Los enlaces de nav cambian al pasar el mouse
- [ ] Las cards "flotan" con hover
- [ ] Las transiciones son suaves (no instantáneas)

---

## 💡 REFLEXIÓN: Flexbox vs Block

| Aspecto | `display: block` | `display: flex` |
|---------|------------------|-----------------|
| Dirección | Vertical siempre | Configurable |
| Alineación | Manual y difícil | Una propiedad |
| Distribución | Hack con floats | `justify-content` |
| Espaciado | Margin en cada hijo | `gap` en el padre |

> **Regla memorable**: "Si necesitas organizar hijos, piensa en Flexbox"

---

## 💡 REFLEXIÓN: ¿Cuándo usar qué?

### Pregunta:
¿Para qué usarías `justify-content` vs `align-items`?

| Propiedad | Eje | Ejemplo de uso |
|-----------|-----|----------------|
| `justify-content` | Principal (↔) | Distribuir nav en header |
| `align-items` | Cruzado (↕) | Centrar verticalmente |
| `gap` | Ambos | Espacio entre cards |

---

## 🔗 TRANSICIÓN: Cierre Módulo 1

### Hoy lograste:
- Aplicar Flexbox para layouts horizontales
- Crear navegación y header profesional
- Organizar contenido en cards
- Agregar hover states con transiciones

### En este módulo completaste:
- **Clase 1**: Setup y tu primera página HTML
- **Clase 2**: Wireframes y HTML semántico
- **Clase 3**: CSS, colores y tipografía
- **Clase 4**: Flexbox y layout profesional

---

## ❓ Preguntas de Cierre

1. ¿Qué diferencia hay entre `justify-content: center` y `align-items: center`?

2. ¿Por qué crees que Flexbox se llama "flexible"?

3. ¿Qué parte de tu perfil te gustaría mejorar si tuvieras más tiempo?

---

## 📝 Entrega (Lab Calificado)

**Este lab es CALIFICADO - 100 puntos**

- [ ] Wireframe original documentado
- [ ] HTML semántico completo
- [ ] CSS con paleta de colores y Google Fonts
- [ ] Flexbox en header y al menos una sección con cards
- [ ] Hover states con transiciones

### Presenta tu perfil al grupo
**Screenshot completo + demostración de hover**
