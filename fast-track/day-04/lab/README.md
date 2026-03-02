# Día 4: Deploy + Pulido + Revisión

> 🚀 **Proyecto:** Mi Portfolio Dev
>
> 📌 **Hoy:** Publicar tu portfolio en GitHub Pages, pulir detalles visuales y revisar con la rúbrica.

## 🎯 Objetivos

1. Activar GitHub Pages y verificar el deploy
2. Pulir detalles visuales y resolver issues pendientes
3. Auto-evaluar tu proyecto con la rúbrica
4. Hacer el commit final y preparar la entrega

---

## 🔑 Conceptos Clave

- **GitHub Pages** - Servicio gratuito que publica sitios web desde un repositorio
- **Deploy** - Proceso de poner tu código en un servidor accesible públicamente
- **Rúbrica** - Criterios de evaluación con puntos asignados por nivel

---

## ⚙️ Antes de Comenzar

| ✓ | Requisito | Verificación |
|---|-----------|--------------|
| ☐ | Días 1-3 completados | HTML + CSS + JS funcional |
| ☐ | Todo el código en GitHub | `git log --oneline` muestra 3+ commits |
| ☐ | Navegador Chrome abierto | Para DevTools y verificación |

---

## Parte 1: Activar GitHub Pages (20 min)

### 1.1 Configurar GitHub Pages

1. Ve a tu repositorio en GitHub: `https://github.com/TU-USUARIO/mi-portfolio-dev`
2. Haz clic en **Settings** (⚙️ ícono de engranaje)
3. En el menú lateral, busca **Pages**
4. En **Source**, selecciona:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
5. Clic en **Save**

### 1.2 Esperar el Deploy

GitHub Pages tarda 1-3 minutos en publicar.

1. Quédate en la página de Settings → Pages
2. Refresca cada 30 segundos
3. Verás un banner verde con tu URL: `https://TU-USUARIO.github.io/mi-portfolio-dev/`

### 1.3 Verificar tu Sitio

Abre la URL en una **ventana de incógnito** (`Ctrl+Shift+N` o `Cmd+Shift+N`):

| ✓ | Verificación |
|---|-------------|
| ☐ | La página carga sin errores |
| ☐ | Los estilos CSS se aplican correctamente |
| ☐ | Las imágenes cargan |
| ☐ | La navegación funciona |
| ☐ | El formulario muestra validación al enviar |

> ⚠️ **Problemas comunes:**
>
> | Problema | Causa probable | Solución |
> |----------|---------------|----------|
> | Página en blanco | `index.html` no está en la raíz | Mover archivo a la raíz del repo |
> | Sin estilos CSS | Ruta incorrecta en `<link>` | Verificar que sea `href="styles.css"` (sin `/`) |
> | JS no funciona | Ruta incorrecta en `<script>` | Verificar que sea `src="script.js"` (sin `/`) |
> | Error 404 | Deploy aún en proceso | Esperar 2-3 minutos y refrescar |

✅ **Checkpoint:** Tu portfolio está publicado y accesible en una URL pública.

---

## Parte 2: Pulido Visual (50 min)

Ahora que tu sitio está publicado, es momento de pulir detalles.

### 2.1 Checklist de Pulido

Revisa tu sitio en **dos tamaños** (375px y 768px+) y corrige lo que necesite:

**Tipografía:**

| ✓ | Verificación |
|---|-------------|
| ☐ | Títulos legibles y bien jerarquizados (h1 > h2 > h3) |
| ☐ | Texto del body tiene buen contraste con el fondo |
| ☐ | Párrafos no son demasiado anchos (máx ~70 caracteres por línea) |
| ☐ | La fuente de Google Fonts carga correctamente |

**Espaciado:**

| ✓ | Verificación |
|---|-------------|
| ☐ | Secciones tienen suficiente padding |
| ☐ | Cards tienen espacio entre ellas |
| ☐ | No hay elementos pegados a los bordes |
| ☐ | El footer no se pega al contenido |

**Responsive:**

| ✓ | Verificación |
|---|-------------|
| ☐ | Sin scroll horizontal en móvil |
| ☐ | Menú hamburguesa funciona |
| ☐ | Cards se apilan en móvil y se expanden en desktop |
| ☐ | El formulario es usable en ambos tamaños |

**Interactividad:**

| ✓ | Verificación |
|---|-------------|
| ☐ | Hover en cards funciona (solo desktop) |
| ☐ | Hover en botón funciona |
| ☐ | Validación de formulario muestra mensajes |
| ☐ | Scroll suave al hacer clic en enlaces |

### 2.2 Personalización de Contenido

Asegúrate de que tu portfolio tiene contenido **real**, no placeholder:

| ✓ | Elemento | Personalizado |
|---|----------|--------------|
| ☐ | Nombre real en hero y nav | |
| ☐ | Título/rol profesional | |
| ☐ | Biografía en About | |
| ☐ | Skills que reflejan tus intereses | |
| ☐ | Enlace a tu GitHub real en footer | |
| ☐ | Año correcto en copyright | |

### 2.3 Mejoras Opcionales

Si tu sitio ya cumple con todo lo anterior, considera agregar:

```css
/* Sombra sutil en la navegación sticky */
nav {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

/* Transición más suave en el scroll */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 70px; /* Compensa la nav sticky */
}
```

> 💡 **`scroll-padding-top`** evita que la nav sticky cubra el título de la sección al hacer scroll.

✅ **Checkpoint:** Tu portfolio está pulido y personalizado.

---

## Parte 3: Auto-Revisión con Rúbrica (20 min)

Revisa tu proyecto usando la [rúbrica de evaluación](../../rubric.md).

### Criterio 1: Estructura y Git (25 pts)

| ✓ | Verificación | Puntos |
|---|-------------|--------|
| ☐ | HTML con 5 secciones semánticas (nav, hero, about, skills, contact, footer) | |
| ☐ | Formulario con `<label>`, `<input>`, `<textarea>` | |
| ☐ | 4+ commits con mensajes descriptivos | |

Revisa tu historial:

```bash
git log --oneline
```

**Tu puntaje estimado:** ___/25

### Criterio 2: Diseño Responsive (25 pts)

| ✓ | Verificación | Puntos |
|---|-------------|--------|
| ☐ | Funciona en 375px sin scroll horizontal | |
| ☐ | Funciona en 768px+ con layout de 2 columnas | |
| ☐ | Flexbox usado en nav, cards y footer | |
| ☐ | Hover states y transiciones presentes | |

**Tu puntaje estimado:** ___/25

### Criterio 3: Interactividad (25 pts)

| ✓ | Verificación | Puntos |
|---|-------------|--------|
| ☐ | Formulario valida campos vacíos | |
| ☐ | Formulario valida formato de email | |
| ☐ | Menú hamburguesa funciona en móvil | |
| ☐ | Scroll suave al hacer clic en enlaces | |

**Tu puntaje estimado:** ___/25

### Criterio 4: Publicación (25 pts)

| ✓ | Verificación | Puntos |
|---|-------------|--------|
| ☐ | GitHub Pages activo y accesible | |
| ☐ | Contenido personalizado (no placeholder) | |
| ☐ | Sin errores 404 ni recursos rotos | |
| ☐ | URL compartible y funcional | |

**Tu puntaje estimado:** ___/25

**Total estimado:** ___/100

✅ **Checkpoint:** Has revisado tu portfolio criterio por criterio.

---

## Parte 4: Commit Final y Deploy (15 min)

### 4.1 Commit Final

```bash
git add .
git commit -m "feat: pulido visual y contenido personalizado"
git push
```

### 4.2 Verificar Deploy Actualizado

1. Espera 1-2 minutos después del push
2. Abre tu URL de GitHub Pages en incógnito
3. Haz `Ctrl+Shift+R` (hard refresh) para limpiar caché
4. Verifica que los cambios se reflejan

### 4.3 Verificación Final

| ✓ | Entregable |
|---|-----------|
| ☐ | URL de GitHub Pages funciona en incógnito |
| ☐ | URL del repositorio es accesible |
| ☐ | 4+ commits visibles en GitHub |
| ☐ | Todos los archivos (HTML, CSS, JS) están en el repo |

✅ **Checkpoint:** Tu portfolio está publicado y actualizado.

---

## Parte 5: Instrucciones de Entrega - Día 5 (5 min)

Mañana (viernes) deberás entregar por Canvas:

### Entregables

1. **URL de GitHub Pages:**
   ```
   https://TU-USUARIO.github.io/mi-portfolio-dev/
   ```

2. **URL del repositorio:**
   ```
   https://github.com/TU-USUARIO/mi-portfolio-dev
   ```

### Fecha límite

- **Día 5 (viernes) 11:59 PM**

### Últimos ajustes permitidos

Puedes seguir haciendo cambios y pusheando hasta la fecha límite. GitHub Pages se actualiza automáticamente con cada push.

> 💡 **Recuerda:** Cada push actualiza tu sitio publicado. Haz un último `git push` después de cualquier cambio.

✅ **Checkpoint Final:** Sabes exactamente qué entregar y cuándo. ¡Tu portfolio está listo!

---

## 📝 Resumen del Día

| Lo que hicimos | Tecnología |
|----------------|------------|
| Activamos GitHub Pages | GitHub Settings |
| Pulimos detalles visuales | CSS refinements |
| Personalizamos contenido | HTML content |
| Auto-revisión con rúbrica | 4 criterios × 25 pts |
| Commit final y deploy | Git + GitHub Pages |

---

## 🎉 Felicidades

En 4 días construiste un portfolio profesional desde cero:

- **Día 1:** Estructura HTML + CSS base + Git
- **Día 2:** Layout Flexbox + diseño responsive
- **Día 3:** JavaScript: validación, menú, scroll
- **Día 4:** Deploy en GitHub Pages + pulido

Tu portfolio está **publicado en internet** y lo puedes compartir con cualquier persona. Este es tu primer paso como desarrollador web.
