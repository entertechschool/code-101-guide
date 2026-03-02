# Día 2: CSS Variables + Flexbox + Responsive

> 🚀 **Proyecto:** Mi Portfolio Dev
>
> 📌 **Hoy:** Organizar tu CSS con variables, transformar tu portfolio con layout profesional y hacerlo responsive.

## 🎯 Objetivos

1. Refactorizar valores CSS repetidos en variables reutilizables
2. Aplicar Flexbox para crear layouts horizontales y grids de cards
3. Agregar hover states y transiciones CSS para interactividad visual
4. Hacer tu sitio responsive con media queries (mobile-first)

---

## 🔑 Conceptos Clave

- **CSS Variables** - Valores reutilizables definidos con `--nombre` en `:root`
- **Flexbox** - Sistema de layout que distribuye elementos en filas o columnas
- **Mobile-first** - Diseñar primero para móvil y luego adaptar para desktop
- **Media query** - Regla CSS que aplica estilos según el tamaño de pantalla
- **Transición** - Animación suave entre dos estados CSS (`transition`)

---

## ⚙️ Antes de Comenzar

| ✓ | Requisito | Verificación |
|---|-----------|--------------|
| ☐ | Día 1 completado | Tu portfolio tiene HTML + CSS base |
| ☐ | Live Server activo | Ves tu página en el navegador |
| ☐ | Último push hecho | `git log --oneline` muestra tu commit de ayer |

---

## Parte 1: CSS Variables y Mejoras (20 min)

### 1.1 ¿Por qué variables?

Abre tu `styles.css` del Día 1. Busca cuántas veces aparece `#2563eb`:

```
#2563eb → aparece en: a, .nav-brand, .skill-card h3, .project-card h3, .btn
#1e293b → aparece en: body, .nav-links a
#64748b → aparece en: .hero-subtitle, #about p, .skill-card p, .project-card p
#e2e8f0 → aparece en: nav, .skill-card, .project-card, inputs
```

Si quisieras cambiar el azul principal, tendrías que editarlo en **5 lugares**. Con **variables CSS**, lo cambias en uno solo.

### 1.2 Agregar `:root` con variables

Agrega al **inicio** de tu `styles.css`, antes del reset:

```css
/* Variables */
:root {
  --color-primary: #2563eb;
  --color-primary-dark: #1d4ed8;
  --color-bg: #f8fafc;
  --color-text: #1e293b;
  --color-text-light: #64748b;
  --color-white: #ffffff;
  --color-border: #e2e8f0;
  --font-main: 'Inter', sans-serif;
}
```

> 💡 **`:root`** es el elemento raíz del documento. Las variables definidas aquí están disponibles en **todo** el CSS.

### 1.3 Reemplazar valores por variables

Ahora reemplaza los valores directos por `var()`. Estos son los cambios principales:

**En Base:**

```css
body {
  font-family: var(--font-main);
  line-height: 1.6;
  color: var(--color-text);
  background-color: var(--color-bg);
}
a { text-decoration: none; color: var(--color-primary); }
```

**En Nav:**

```css
nav {
  background-color: var(--color-white);
  padding: 1rem;
  border-bottom: 1px solid var(--color-border);
}
.nav-brand { font-weight: 700; font-size: 1.2rem; color: var(--color-primary); }
.nav-links a { color: var(--color-text); }
```

**En Hero:**

```css
#hero {
  text-align: center;
  padding: 4rem 1rem;
  background-color: var(--color-white);
}
.hero-subtitle { color: var(--color-text-light); font-size: 1.1rem; margin-bottom: 1.5rem; }
```

**En Botón:**

```css
.btn {
  display: inline-block;
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
}
```

**En Skills:**

```css
.skill-card {
  background-color: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin-bottom: 1rem;
}
.skill-card h3 { color: var(--color-primary); margin-bottom: 0.5rem; }
.skill-card p { color: var(--color-text-light); font-size: 0.9rem; }
```

**En Projects:**

```css
.project-card {
  background-color: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin-bottom: 1rem;
}
.project-card h3 { color: var(--color-primary); margin-bottom: 0.5rem; }
.project-card p { color: var(--color-text-light); font-size: 0.9rem; margin-bottom: 1rem; }
```

**En Contact:**

```css
#contact { background-color: var(--color-white); border-radius: 0.5rem; }
.form-group input, .form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  font-family: var(--font-main);
  font-size: 1rem;
}
```

**En Footer:**

```css
footer {
  background-color: var(--color-text);
  color: var(--color-white);
  padding: 2rem 1rem;
  margin-top: 2rem;
  text-align: center;
}
footer a { color: var(--color-border); }
```

> 💡 **Prueba rápida:** Cambia `--color-primary` a `#dc2626` (rojo). Todo el sitio cambia de azul a rojo. Luego vuelve a `#2563eb`.

### 1.4 Agregar sticky nav y transiciones

Ahora que el CSS está organizado, agreguemos dos mejoras:

**Nav fijo al scrollear:**

```css
nav {
  background-color: var(--color-white);
  padding: 1rem;
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 100;
}
```

**Transición en el botón:**

```css
.btn {
  /* ...tus propiedades existentes... */
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: var(--color-primary-dark);
}
```

> 📌 **`transition`** va en el estado normal (`.btn`), no en el `:hover`. Así la animación funciona tanto al entrar como al salir.

✅ **Checkpoint:** Tu sitio se ve igual que antes, pero ahora el CSS usa variables. El nav se queda fijo al scrollear y el botón cambia de color al pasar el cursor.

---

## Parte 2: Flexbox en la Navegación (20 min)

### 2.1 Re-hacer nav con patrón hamburger

Ahora vamos a convertir el nav en un layout flexible con el patrón de menú hamburguesa. Reemplaza tus estilos de nav:

```css
nav {
  background-color: var(--color-white);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-brand {
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--color-primary);
}

.nav-toggle {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  display: block;
}

.nav-links {
  display: none;
  list-style: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-border);
  padding: 1rem;
}

.nav-links.active {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.nav-links a {
  color: var(--color-text);
  padding: 0.5rem 0;
  display: block;
}
```

> 📌 **Mobile-first:** Los links están ocultos por defecto. La clase `.active` (que agregaremos con JS el Día 3) los muestra. El botón hamburguesa ahora es visible.

### 2.2 Desktop: Nav Horizontal

Agrega al final del archivo la media query:

```css
/* =========================
   RESPONSIVE (min-width: 768px)
   ========================= */
@media (min-width: 768px) {

  /* Nav horizontal en desktop */
  .nav-toggle {
    display: none;
  }

  .nav-links {
    display: flex;
    position: static;
    flex-direction: row;
    gap: 2rem;
    padding: 0;
    border: none;
    background: transparent;
  }

  .nav-links a:hover {
    color: var(--color-primary);
  }
}
```

Guarda y verifica:
- En pantalla ancha: nav horizontal, botón hamburguesa oculto
- En pantalla angosta: botón visible, enlaces ocultos

✅ **Checkpoint:** La navegación se adapta entre móvil y desktop.

---

## Parte 3: Flexbox en Cards (25 min)

### 3.1 Preparar contenedores flex

Convierte los contenedores de Skills y Projects en flex:

```css
.skills-container,
.projects-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
}

.skill-card,
.project-card {
  flex: 1 1 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
```

> 💡 **Reutilización:** Ambos contenedores usan el mismo patrón Flexbox. Las propiedades visuales (fondo, borde, padding) ya están definidas por separado en cada clase.

### 3.2 Grid de Cards en Desktop

Agrega **dentro** del `@media (min-width: 768px)`:

```css
  /* Cards en 2 columnas */
  .skill-card {
    flex: 1 1 calc(50% - 1rem);
  }

  .project-card {
    flex: 1 1 calc(33.333% - 1rem);
  }
```

> 💡 **`flex: 1 1 calc(50% - 1rem)`** significa:
> - `flex-grow: 1` → puede crecer
> - `flex-shrink: 1` → puede encogerse
> - `flex-basis: calc(50% - 1rem)` → base de 50% menos el gap
>
> Las project cards usan `33.333%` para mostrar 3 columnas (una por proyecto).

### 3.3 Hover en Cards

Agrega **fuera** del media query:

```css
.skill-card:hover,
.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
```

Pasa el cursor sobre las cards. Deberían "flotar" suavemente.

✅ **Checkpoint:** Las skill cards se muestran en 2 columnas y las project cards en 3 columnas en desktop. Ambas tienen efecto hover.

---

## Parte 4: Footer Mejorado + Hero Desktop (15 min)

### 4.1 Expandir el Footer HTML

Primero, vamos a darle más estructura al footer. Reemplaza tu `<footer>` actual en `index.html`:

```html
  <footer>
    <div class="footer-content">
      <div class="footer-section">
        <h3>Tu Nombre</h3>
        <p>Desarrollador Web en formación</p>
      </div>
      <div class="footer-section">
        <h3>Enlaces</h3>
        <ul>
          <li><a href="https://github.com/TU-USUARIO" target="_blank">GitHub</a></li>
          <li><a href="https://linkedin.com/in/TU-USUARIO" target="_blank">LinkedIn</a></li>
        </ul>
      </div>
    </div>
    <p class="footer-copy">&copy; 2026 Tu Nombre. Todos los derechos reservados.</p>
  </footer>
```

### 4.2 Estilos del Footer

Reemplaza los estilos de `footer` en tu CSS:

```css
/* Footer */
footer {
  background-color: var(--color-text);
  color: var(--color-white);
  padding: 2rem 1rem;
  margin-top: 2rem;
}
.footer-content { max-width: 800px; margin: 0 auto; }
.footer-section { margin-bottom: 1.5rem; }
.footer-section h3 { margin-bottom: 0.5rem; }
.footer-section ul { list-style: none; }
.footer-section a { color: var(--color-border); }
.footer-copy {
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-text-light);
  color: var(--color-text-light);
  font-size: 0.9rem;
}
```

### 4.3 Footer en Columnas con Flexbox

Agrega **dentro** del `@media (min-width: 768px)`:

```css
  /* Footer en columnas */
  .footer-content {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }

  .footer-section {
    margin-bottom: 0;
  }
```

### 4.4 Hero Mejorado en Desktop

Agrega **dentro** del `@media (min-width: 768px)`:

```css
  /* Hero más grande en desktop */
  #hero {
    padding: 6rem 2rem;
  }

  #hero h1 {
    font-size: 2.5rem;
  }

  /* Secciones más anchas */
  section {
    padding: 4rem 2rem;
  }
}
```

> ⚠️ **Importante:** Asegúrate de que la llave `}` final cierra el `@media`. Todo el bloque `@media` debe tener una sola apertura y cierre.

✅ **Checkpoint:** El footer muestra columnas lado a lado en desktop. El hero tiene más espacio.

---

## Parte 5: Hover States + Transiciones + Focus States (20 min)

### 5.1 Hover en Enlaces del Nav

Agrega **fuera** del media query:

```css
.nav-links a {
  transition: color 0.3s ease;
}
```

> 📌 La regla `transition` va en el **estado normal**, no en el `:hover`. Así la animación funciona al entrar Y al salir.

### 5.2 Hover en el Botón CTA

El botón ya tiene hover básico. Agreguemos un efecto de elevación:

```css
.btn {
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn:hover {
  background-color: var(--color-primary-dark);
  transform: translateY(-2px);
}
```

> ⚠️ Si ya tienes `transition` en `.btn`, reemplázala (no dupliques).

### 5.3 Focus en Campos del Formulario

Agreguemos feedback visual cuando un campo está activo:

```css
.form-group input,
.form-group textarea {
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}
```

> ⚠️ Si ya tienes estas reglas, agrega solo la línea de `box-shadow`.

### 5.4 Feedback del Formulario

Agrega estilos para los mensajes de éxito y error que usaremos con JavaScript el Día 3:

```css
.form-feedback { margin-top: 1rem; font-weight: 600; }
.form-feedback.success { color: #16a34a; }
.form-feedback.error { color: #dc2626; }
```

> 📌 **Preparación para JS:** El Día 3 vamos a agregar/quitar estas clases con JavaScript para mostrar mensajes de validación.

### 5.5 Hover en Enlaces del Footer

```css
.footer-section a {
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: var(--color-white);
}
```

> ⚠️ Si ya están estas reglas, verifica que `transition` esté en el estado normal.

✅ **Checkpoint:** Todos los elementos interactivos tienen transiciones suaves al pasar el cursor.

---

## Parte 6: Verificar Responsive con DevTools (10 min)

### 6.1 Abrir DevTools

1. Haz clic derecho en tu página → **Inspeccionar** (o `F12`)
2. Haz clic en el ícono de dispositivo móvil (📱) en la barra de DevTools
3. Selecciona **iPhone SE** (375px) o ingresa 375 en el ancho

### 6.2 Checklist Responsive

Verifica cada punto:

| ✓ | Elemento | Mobile (375px) | Desktop (768px+) |
|---|----------|----------------|-------------------|
| ☐ | Nav | Hamburguesa visible, enlaces ocultos | Enlaces horizontales, hamburguesa oculta |
| ☐ | Hero | Centrado, texto legible | Más padding y texto más grande |
| ☐ | Skill Cards | 1 columna (100% ancho) | 2 columnas (50% cada una) |
| ☐ | Project Cards | 1 columna (100% ancho) | 3 columnas (33% cada una) |
| ☐ | Formulario | Campos ocupan 100% ancho | Campos ocupan 100% ancho |
| ☐ | Footer | Secciones apiladas | Secciones en columnas |
| ☐ | Sin scroll horizontal | ✅ | ✅ |

### 6.3 Arreglar Problemas Comunes

| Problema | Solución |
|----------|----------|
| Scroll horizontal en móvil | Agrega `overflow-x: hidden` a `body` |
| Texto muy pequeño en móvil | Aumenta `font-size` base a `16px` |
| Imágenes se salen del contenedor | Verifica que `img { max-width: 100% }` exista |
| Cards no se ajustan | Verifica `flex-wrap: wrap` en `.skills-container` |

✅ **Checkpoint:** Tu sitio funciona correctamente en 375px y 768px+. Sin scroll horizontal.

---

## Parte 7: Commit y Push (5 min)

```bash
git add .
git commit -m "feat: CSS variables, layout flexbox y diseño responsive"
git push
```

Verifica en GitHub que tu código está actualizado.

✅ **Checkpoint Final:** Portfolio con CSS organizado, layout profesional, hover states, y responsive verificado con DevTools.

---

## 📝 Resumen del Día

| Lo que hicimos | Técnica |
|----------------|---------|
| Variables CSS para colores y fuentes | `:root` + `var()` |
| Nav fijo + transición en botón | `position: sticky` + `transition` |
| Nav horizontal en desktop | Flexbox + media query |
| Skill cards en 2 columnas, project cards en 3 | Flexbox + flex-basis |
| Footer expandido + columnas | HTML mejorado + Flexbox |
| Hover en cards y botones | `:hover` + `transition` |
| Form feedback classes | `.success` + `.error` |
| Focus en formulario | `:focus` + box-shadow |
| Responsive mobile-first | `@media (min-width: 768px)` |
| Verificación responsive | Chrome DevTools |

---

## Logros Adicionales

Si terminaste antes, intenta:

- 🟢 Agregar un efecto hover diferente a cada card (escala, rotación, sombra diferente)
- 🟡 Agregar un breakpoint extra para tablets: `@media (min-width: 480px)` donde las cards sean 2 columnas
- 🟡 Agregar una animación de `border-bottom` en los enlaces del nav al hacer hover
- 🔴 Hacer que el hero tenga una imagen de fondo con `background-image` y overlay semitransparente
