> 📦 **Módulo 2:** Clase 4 de 4 (Lab Calificado)

# Clase 08: Vibe Coding — De idea a sitio publicado

## Resumen

Esta es la clase final del Módulo 2 y tu primer lab calificado. Vas a usar inteligencia artificial para convertir el diseño que hiciste en la Clase 07 — tu **Spec Sheet** y mockups — en un sitio web real, publicado en internet con una URL pública.

Aprenderás **Prompt Scaffolding**: la técnica de construir prompts estructurados por bloques (Rol + Contexto + Tarea + Restricciones + Formato) que separa al programador profesional del aficionado. Verás en vivo el contraste entre un prompt vago (V1) y uno scaffolded (V2), y el resultado dramáticamente diferente que produce cada uno.

Al final de la clase, tu MyLinks estará vivo en `tunombre.github.io/mylinks` — tu primera URL pública. Y entenderás qué hace cada bloque del HTML/CSS que la IA generó por ti.

---

## ¿Por qué te sirve?

- **Vibe Coding es el presente.** Andrej Karpathy acuñó el término en febrero de 2025 para describir cómo la programación está cambiando: describes en lenguaje natural y la IA escribe el código. Pero hay 2 formas de hacerlo: con criterio o a ciegas. Hoy aprendes a hacerlo con criterio.

- **Saber pedir es tan importante como saber hacer.** Un prompt scaffolded de 5 bloques produce 10x mejor código que uno de 1 línea. Eso es habilidad transferible — la usarás todos los días en tu carrera.

- **GitHub Pages es hosting profesional gratuito.** Tu sitio queda en una URL real (no en tu computadora). Es algo que pones en tu LinkedIn hoy mismo y te diferencia.

---

## 🎯 ¿Qué haremos en clase?

1. **V1: Prompt vago en Claude** — Verás un resultado genérico para entender qué NO queremos.

2. **V2: Prompt Scaffolded con Gemini** — Convertirás tu Spec Sheet del Lab 07 en un prompt estructurado y lo dispararás en Claude con tus mockups adjuntos.

3. **Iterar con criterio** — Personalizarás los botones con código real de [uiverse.io](https://uiverse.io){:target="_blank"} adaptado a tu paleta.

4. **Extraer a VS Code** — Sacarás el código del Artifact de Claude y lo correrás localmente con Live Server.

5. **Publicar en GitHub Pages** — Tu MyLinks tendrá una URL pública que cualquiera puede visitar.

---

## Objetivos de Aprendizaje

Al finalizar esta clase, podrás:

1. **Diferenciar** un prompt vago de un prompt scaffolded observando el output de cada uno.
2. **Construir** un Prompt Scaffolded usando Spec Sheet + mockups del Lab 07.
3. **Iterar con criterio** sobre el código generado por la IA con instrucciones específicas y referencias reales.
4. **Extraer** el código generado a un proyecto local con Live Server.
5. **Publicar** un sitio web en GitHub Pages con URL pública.

---

## ✅ Preparación para la Clase

### Tu Proyecto Hasta Ahora

Antes de continuar, verifica que tienes:

- [ ] Repositorio MyLinks con commits regulares (de la Clase 06).
- [ ] Diseño responsive funcionando.
- [ ] **3 entregables del Lab 07** en una carpeta accesible:
  - `spec-sheet.txt`
  - `mockup-mobile.png`
  - `mockup-desktop.png`

### Herramientas

- [ ] **Claude.ai** — [claude.ai](https://claude.ai/){:target="_blank"} (cuenta gratuita).
- [ ] **Gemini** — [gemini.google.com](https://gemini.google.com/){:target="_blank"} (cuenta de Google).
- [ ] **VS Code con Live Server** — Lo usaste en clases anteriores.
- [ ] **Tu repositorio MyLinks** — Clonado en VS Code y listo para editar.

### Preparación

- [ ] Crea cuenta en Claude.ai y Gemini si aún no las tienes.
- [ ] Ten los 3 archivos del Lab 07 a mano (en una carpeta o en el escritorio).
- [ ] Verifica que `git status` corre sin errores en tu repo MyLinks.
- [ ] Cierra apps innecesarias — vas a tener Claude, Gemini y VS Code abiertos en paralelo.

---

## Glosario

| Término | Definición |
|---------|------------|
| **Vibe Coding** | Programar describiendo en lenguaje natural lo que quieres y dejando que la IA escriba el código. Tú supervisas, iteras y validas. |
| **Prompt Scaffolding** | Técnica de construir un prompt estructurado por bloques (Rol + Contexto + Tarea + Restricciones + Formato). |
| **Artifact** | Panel renderizable de Claude donde el código se ejecuta en vivo a la derecha del chat. |
| **Iterar con criterio** | Refinar el output de la IA con instrucciones específicas y código real, no caprichos vagos. |
| **GitHub Pages** | Hosting gratuito de GitHub para sitios estáticos. Toma tu repo y lo publica en una URL. |

---

## Sistema de Evaluación

Este es un **lab calificado**. Tu trabajo será evaluado con la siguiente rúbrica:

| Criterio | Peso | Qué se evalúa |
|----------|------|---------------|
| Prompt Scaffolded y uso del Spec Sheet | 25% | Calidad del prompt + uso de Lab 07 + mockups adjuntos |
| Iteración con criterio | 25% | Iteración con código real adaptado, no copia ciega |
| Extracción y Diseño Responsive | 25% | Live Server local + responsive en móvil y desktop |
| Publicación y Coherencia | 25% | URL pública + coherencia con Spec Sheet + 3+ commits |

**Escala:** A (90-100), B (80-89), C (70-79), F (<70)

> Ver rúbrica detallada en [rubric.md](lab/rubric.md).

---

## Recursos Adicionales

- [Claude.ai](https://claude.ai/){:target="_blank"} — IA para generar código con Artifacts.
- [Gemini](https://gemini.google.com/){:target="_blank"} — IA para razonar y planificar prompts.
- [uiverse.io](https://uiverse.io/){:target="_blank"} — Galería open-source de componentes CSS.
- [GitHub Pages Docs](https://docs.github.com/es/pages){:target="_blank"} — Documentación oficial.
- [Andrej Karpathy on Vibe Coding](https://x.com/karpathy){:target="_blank"} — Quien acuñó el término.
