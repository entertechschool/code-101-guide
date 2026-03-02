# Guía del Facilitador - Fast-Track: Mi Portfolio Dev

> **Formato:** 4 sesiones de 120 min (Lun-Jue, 8-10 PM) + entrega async Día 5
>
> **Audiencia:** Estudiantes que necesitan completar Code 101 de forma acelerada (~50% no completaron el curso regular)

---

## Filosofía del Fast-Track

Este programa es un **workshop intensivo**, no una clase teórica. La diferencia clave:

| Curso Regular | Fast-Track |
|--------------|------------|
| Explicar → Demostrar → Practicar | Construir juntos → Explicar mientras se hace |
| Slides + Lab separados | Code-along continuo |
| 3 proyectos separados | 1 proyecto integrador |
| Teoría profunda | Solo lo necesario para construir |

**Regla de oro:** Si el estudiante no lo va a escribir hoy, no lo expliques hoy.

---

## Micro-Lectures (5 min cada una)

Cada día comienza con una micro-lecture. Es una explicación **máximo 5 minutos** con diagrama en pizarra o Excalidraw. NO abrir slides.

### Día 1: "Cómo funciona una página web"

**Diagrama en pizarra:**

```
[Navegador] ──solicita──→ [Servidor]
     ↑                        │
     │                        ↓
     └──── recibe ←──── [HTML + CSS + JS]
```

**Puntos clave (máx 3):**
1. El navegador solicita archivos al servidor
2. HTML = estructura, CSS = estilos, JS = interactividad
3. Hoy construimos los primeros dos. JS viene el Día 3.

### Día 2: "Variables CSS y Flexbox"

**Diagrama en pizarra:**

```
Antes (Día 1):           Después (Día 2):
#2563eb ← repetido 4x    :root { --primary: #2563eb }
#2563eb                   var(--primary) ← 1 lugar
#2563eb
#2563eb

Sin Flexbox:          Con Flexbox:
┌─────────┐          ┌───┬───┬───┐
│ Item 1  │          │ 1 │ 2 │ 3 │
├─────────┤          └───┴───┴───┘
│ Item 2  │
├─────────┤          display: flex
│ Item 3  │          justify-content: space-between
└─────────┘
```

**Puntos clave (máx 3):**
1. Las variables CSS evitan repetir valores — cambias en un lugar, se actualiza en todo el sitio
2. `display: flex` convierte cualquier contenedor en flexible
3. `justify-content` controla distribución horizontal

### Día 3: "JS: lo mínimo necesario"

**Diagrama en pizarra:**

```
HTML (estructura)
  ↓ getElementById
JS (lógica) ──→ Cambiar contenido
  ↓ addEventListener
Evento (clic) ──→ Ejecutar función
```

**Puntos clave (máx 3):**
1. JavaScript puede leer y modificar el HTML
2. `getElementById` selecciona un elemento
3. `addEventListener` ejecuta código cuando algo pasa (clic, submit)

### Día 4: "Git y GitHub Pages en 5 min"

**Diagrama en pizarra:**

```
Tu computadora          GitHub            Internet
┌──────────┐    push    ┌──────┐  Pages   ┌──────────┐
│ Código   │ ────────→  │ Repo │ ───────→ │ Sitio web│
│ local    │            │      │          │ público  │
└──────────┘            └──────┘          └──────────┘
```

**Puntos clave (máx 3):**
1. `git push` sube tu código a GitHub
2. GitHub Pages convierte tu repo en un sitio web público
3. Cada push actualiza automáticamente el sitio

---

## Distribución de Tiempo Detallada

### Día 1: HTML + CSS Base + Git Setup (120 min)

| Min | Actividad | Rol del Facilitador |
|-----|-----------|-------------------|
| 0-5 | Micro-lecture | Diagrama en pizarra |
| 5-15 | Setup: repo + clone | Demostrar en proyector, esperar que todos estén listos |
| 15-35 | HTML: nav + hero + about (con lista intereses) | Code-along. Explicar etiquetas y `<ul>` semántico |
| 35-55 | HTML: skills + projects + contact + footer | Code-along. Enfatizar `<article>` y patrón card |
| 55-60 | **Break** | Circular y verificar que todos tengan HTML completo |
| 60-90 | CSS: reset + base + nav + hero + botón | Valores directos (sin variables). Mostrar cambios en vivo |
| 90-105 | CSS: secciones + cards (skills/projects) + form + footer base | Code-along. Sin transiciones ni hover |
| 105-115 | Buffer / personalización | Ayudar rezagados, personalizar textos y colores |
| 115-120 | Git: add + commit + push | Guiar paso a paso. Resolver issues de autenticación |

**Contingencias Día 1:**
- Si Git auth falla: usar GitHub Desktop como alternativa
- Si un estudiante se atrasa en HTML: darle el archivo completo del `starter/` y que siga con CSS
- Si Live Server no funciona: abrir `index.html` directamente en el navegador
- Si el tiempo es corto en HTML: la sección Projects se puede omitir (no es crítica para Day 2/3)

### Día 2: CSS Variables + Flexbox + Responsive (120 min)

| Min | Actividad | Rol del Facilitador |
|-----|-----------|-------------------|
| 0-5 | Micro-lecture | Diagrama Variables + Flexbox en pizarra |
| 5-25 | CSS Variables: refactorizar + sticky nav | Motivar: "¿Ven que `#2563eb` aparece 4 veces?" |
| 25-40 | Flexbox: nav responsive + hamburger | Explicar mobile-first mientras se escribe |
| 40-55 | Flexbox: cards 2-3 columnas + expandir footer + footer columnas | Demostrar `flex: 1 1 calc(50% - 1rem)` |
| 55-60 | **Break** | Verificar que Flexbox funciona en al menos 2 áreas |
| 60-75 | Hover: cards + botón + nav | Explicar `transition` en estado normal vs `:hover` |
| 75-85 | Focus: formulario | Code-along |
| 85-100 | DevTools: verificar responsive | Guiar uso de Device Mode |
| 100-115 | Arreglar issues responsive | Soporte individual |
| 115-120 | Commit + push | Guiar |

**Contingencias Día 2:**
- Si un estudiante no tiene Flexbox funcionando: compartir el CSS completo y que inspeccione cómo funciona
- Si DevTools confunde: demostrar en proyector paso a paso
- Error común: olvidar cerrar la llave `}` del `@media` → todo el CSS se rompe

### Día 3: JavaScript (120 min)

| Min | Actividad | Rol del Facilitador |
|-----|-----------|-------------------|
| 0-5 | Micro-lecture | Diagrama DOM en pizarra |
| 5-15 | Conectar JS + console.log | Verificar que TODOS ven el mensaje en consola |
| 15-30 | Validación: seleccionar elementos | Explicar `getElementById` y `const` |
| 30-45 | Validación: función + condicionales | Code-along paso a paso |
| 45-60 | Validación: email + feedback | Probar todos los casos juntos |
| 60-65 | **Break** | Verificar que validación funciona |
| 65-80 | Menú: seleccionar + toggle | Explicar `classList.toggle` |
| 80-90 | Menú: cerrar al clic + ícono | Code-along |
| 90-100 | Scroll: scrollIntoView | Combinar con cierre de menú |
| 100-115 | Scroll: botón hero + probar | Verificación completa |
| 115-120 | Commit + push | Guiar |

**Contingencias Día 3:**
- Si `document.getElementById` retorna `null`: verificar que `<script>` está antes de `</body>`
- Si la validación no funciona: verificar IDs en HTML vs JS (typos más comunes)
- Si el menú no toggle: verificar que la clase CSS `.active` existe y tiene `display: flex`
- Error común: `addEventListener` con mayúsculas incorrectas → no da error pero no funciona

### Día 4: Deploy + Pulido (120 min)

| Min | Actividad | Rol del Facilitador |
|-----|-----------|-------------------|
| 0-5 | Micro-lecture | Diagrama deploy en pizarra |
| 5-15 | GitHub Pages: activar | Demostrar en proyector, paso a paso |
| 15-25 | Verificar deploy | Esperar a que todos tengan URL funcionando |
| 25-30 | **Break** | Resolver issues de deploy |
| 30-50 | Pulido: tipografía + espaciado | Guiar checklist en proyector |
| 50-70 | Pulido: responsive + interactividad | Soporte individual |
| 70-80 | Personalización: contenido real | Recordar que placeholder = puntos perdidos |
| 80-100 | Auto-revisión con rúbrica | Proyectar rúbrica, revisar juntos criterio por criterio |
| 100-115 | Commit final + verificar deploy | Guiar push + hard refresh |
| 115-120 | Instrucciones Día 5 + cierre | Proyectar instrucciones de entrega |

**Contingencias Día 4:**
- Si GitHub Pages no activa: verificar que el branch sea `main` y la carpeta sea `/ (root)`
- Si los estilos no cargan en Pages: verificar rutas relativas (sin `/` al inicio)
- Si un estudiante tiene todo en placeholder: priorizar al menos nombre, bio y 1 skill real
- Si un estudiante no tiene JS del Día 3: darle el `script.js` completo para que tenga funcionalidad

---

## Errores Más Comunes

### HTML

| Error | Síntoma | Solución |
|-------|---------|----------|
| Olvidar cerrar etiqueta | Layout roto | Usar indentación para detectar |
| `for` y `id` no coinciden | Label no conecta con input | Verificar spelling exacto |
| `<script>` en `<head>` | JS no encuentra elementos | Mover antes de `</body>` |

### CSS

| Error | Síntoma | Solución |
|-------|---------|----------|
| Olvidar `}` del `@media` | Todo el CSS se rompe | Contar llaves de apertura y cierre |
| Typo en variable (Día 2) | Propiedad no aplica | Verificar nombre en `:root` |
| `transition` en `:hover` (Día 2) | Animación solo al entrar | Mover `transition` al selector normal |
| `px` en vez de `rem` | No escala bien | 1rem = 16px (dividir entre 16) |

### JavaScript

| Error | Síntoma | Solución |
|-------|---------|----------|
| ID incorrecto | `null` en consola | Copiar ID exacto del HTML |
| `addeventlistener` (minúscula) | No funciona, sin error | Usar `addEventListener` (camelCase) |
| Olvidar `preventDefault()` | Página recarga al submit | Agregar como primera línea |
| Clase CSS no existe | Toggle no hace nada | Crear la clase `.active` en CSS |

### Git/Deploy

| Error | Síntoma | Solución |
|-------|---------|----------|
| Auth fallida | Push rechazado | Configurar token o SSH |
| Branch incorrecto en Pages | 404 | Settings → Pages → seleccionar `main` |
| Rutas con `/` al inicio | Recursos no cargan en Pages | Usar rutas relativas (`styles.css`, no `/styles.css`) |

---

## Checkpoints por Día

Usa estos checkpoints para verificar que el grupo está al ritmo:

### Final Día 1

| ✓ | Verificación |
|---|-------------|
| ☐ | Todos tienen repo en GitHub |
| ☐ | HTML con 6 secciones visibles en el navegador (incluye projects) |
| ☐ | CSS básico aplicado (colores, tipografía, espaciado) |
| ☐ | Al menos 1 commit en GitHub |

### Final Día 2

| ✓ | Verificación |
|---|-------------|
| ☐ | Nav horizontal en desktop, hamburguesa en móvil |
| ☐ | Cards en 2 columnas en desktop |
| ☐ | Hover states visibles |
| ☐ | 2+ commits en GitHub |

### Final Día 3

| ✓ | Verificación |
|---|-------------|
| ☐ | Formulario muestra error al enviar vacío |
| ☐ | Menú hamburguesa abre y cierra |
| ☐ | Scroll suave funciona |
| ☐ | Sin errores en la consola |
| ☐ | 3+ commits en GitHub |

### Final Día 4

| ✓ | Verificación |
|---|-------------|
| ☐ | GitHub Pages URL funciona |
| ☐ | Contenido personalizado (no placeholder) |
| ☐ | Responsive verificado en DevTools |
| ☐ | 4+ commits en GitHub |
| ☐ | Estudiante sabe qué entregar el Día 5 |

---

## Soporte al Estudiante Rezagado

En un grupo intensivo, siempre habrá estudiantes que se atrasen. Estrategia:

1. **Nunca detener al grupo** por un estudiante. Dar soporte individual mientras los demás avanzan.
2. **Archivos de rescate:** Tener preparados los archivos completos de cada día para compartir:
   - Día 1: `index.html` + `styles.css` completos
   - Día 2: `styles.css` con Flexbox y responsive
   - Día 3: `script.js` completo
3. **Regla del 80%:** Si un estudiante tiene 80% del día completado al final de la sesión, puede continuar async. Si tiene menos del 50%, necesita los archivos de rescate.
4. **Pair programming:** Emparejar estudiante rezagado con uno avanzado para los últimos 15 minutos.

---

## Materiales Necesarios

| Material | Propósito |
|----------|-----------|
| Proyector/pantalla compartida | Code-along visible para todos |
| Pizarra o Excalidraw | Micro-lectures (diagramas) |
| Archivos `starter/` listos | Backup para estudiantes |
| Archivos completos por día | Rescate para rezagados |
| [Rúbrica](../rubric.md) impresa o proyectada | Auto-revisión Día 4 |
| Lista de URLs de GitHub Pages | Evaluación post-entrega |

---

## Evaluación

- **Fecha de evaluación:** Después del Día 5 (fecha límite de entrega)
- **Herramienta:** Abrir cada URL de GitHub Pages + revisar historial de commits
- **Tiempo estimado:** 5-8 minutos por estudiante
- **Rúbrica:** [rubric.md](../rubric.md) (4 criterios × 25 pts)

---

*Guía creada para el programa Fast-Track de Code 101 - Entertech School*
