<!-- .slide: data-background="#0A192F" -->
# Clase 08: Vibe Coding
## De idea a sitio publicado

---

## 🔗 TRANSICIÓN: Diseño → Sitio Publicado

### Clase anterior (07):
- Hiciste tu Spec Sheet con tokens y enlaces
- Exportaste mockup móvil y mockup escritorio en Figma

### Hoy (Lab Calificado):
- Conviertes esos 3 archivos en un sitio web real con **IA**
- Aprendes **Prompt Scaffolding** profesional
- Publicas en **GitHub Pages** con URL pública

> "Del Spec Sheet al mundo, en una sola clase."

---

## 🚦 ¿Qué tipo de Vibe Coder vas a ser hoy?

| ❌ Irresponsable | ✅ Profesional |
|---|---|
| Prompt vago → acepta sin leer | Prompt scaffolded → evalúa output |
| Copia y pega sin entender | Entiende cada bloque |
| "Arréglalo" cuando falla | Localiza el error y guía a la IA |
| "Así me lo generó la IA" | El código es **su responsabilidad** |

> **Tu objetivo hoy:** salir sabiendo qué hace cada línea del HTML/CSS que la IA escribió.

---

## 🧠 QUIZ PRE-LAB

### Pregunta:
Andrej Karpathy acuñó el término *Vibe Coding* en febrero de 2025. ¿Qué crees que significa?

*Toma 2-3 respuestas antes de continuar*

---

## 💡 ¿Por qué dos IAs?

### Gemini: el planificador
- Razona y organiza contexto largo
- Convierte tu Spec Sheet → prompt estructurado

### Claude: el constructor
- Recibe el prompt y genera código
- Crea **Artifacts** renderizables (vista previa en vivo)

> "Gemini te ayuda a pedir. Claude te ayuda a construir."

---

## 💡 La diferencia entre V1 y V2

### V1 — Zero-shot (lo que NO hacemos):

```
Crea un linktree con botones para mis redes sociales
```

→ Resultado: genérico, podría ser de cualquiera

### V2 — Scaffolded (lo que SÍ hacemos):

```
[ROL] Desarrollador frontend senior
[CONTEXTO] Erick, brutalista, reclutador en 3 segundos
[TAREA] Crear MyLinks responsive
[RESTRICCIONES] HTML semántico, mockups adjuntos
[FORMATO] Artifact renderizable
```

→ Resultado: tu sitio, tu estilo, tus links

---

## ✅ CHECKPOINT 1: V1 Generado

### Verificar:
- Pegaste prompt vago en Claude
- Observaste resultado genérico
- Entiendes qué NO funciona

> El V1 es la **vara de comparación**. Sin él, no aprecias el V2.

---

## ✅ CHECKPOINT 2: V2 Scaffolded en Claude

### Verificar:
- Pegaste plantilla en Gemini con Spec Sheet completo
- Copiaste el prompt estructurado a Claude
- **Adjuntaste ambos mockups** (mobile + desktop)
- Tienes Artifact con tu MyLinks personalizado

**Commit #1:**
```bash
git commit -m "feat: generar MyLinks con prompt scaffolded"
```

---

## ✅ CHECKPOINT 3: Iteración con uiverse.io

### Verificar:
- Elegiste un botón en uiverse.io
- Le pasaste el CSS a Claude con instrucción específica
- Claude **adaptó** los colores a tu paleta (no copió tal cual)
- Botones personalizados se ven coherentes con el resto

> Iterar con criterio = código real + instrucción precisa. Cero "hazlo bonito".

---

## ✅ CHECKPOINT 4: Live Server Local

### Verificar:
- Copiaste el Artifact final a `index.html`
- Abriste con Live Server
- Paridad visual: Claude izquierda vs Live Server derecha

**Commit #2:**
```bash
git commit -m "feat: extraer MyLinks a proyecto local"
```

---

## ✅ CHECKPOINT 5: GitHub Pages (Desafío Calificado)

### Pasos:
1. `git push`
2. Settings → Pages → Branch: main → Save
3. Esperar 1-3 min
4. Verificar URL pública
5. **Pegarla en el chat de la clase**

### El momento "wow":
> Abre la URL en tu **celular**. Está en internet. Es tuyo.

---

## 💡 REFLEXIÓN: El Spec Sheet vale oro

| Sin Spec Sheet | Con Spec Sheet del Lab 07 |
|---|---|
| La IA adivina todo | La IA tiene contexto preciso |
| Resultado genérico | Resultado coherente con tu diseño |
| 5+ iteraciones para llegar | Llegas en 1-2 iteraciones |

> El trabajo de la Clase 07 es la palanca que hace al Lab 08 fluir.

---

## 🎉 ¡Felicidades! Módulo 2 Completo

### Lo que lograste en 4 clases:

| Clase | Habilidad |
|-------|-----------|
| 05 | Terminal + Git |
| 06 | Responsive + DevTools |
| 07 | Wireframing + Figma |
| **08** | **Vibe Coding + Deploy** |

### Tu MyLinks ahora:
- ✅ Está en GitHub
- ✅ Es responsive
- ✅ Tiene tu Spec Sheet detrás
- ✅ Vive en internet con URL pública

### Próximo módulo: **JavaScript** — Dale cerebro a tus páginas.
