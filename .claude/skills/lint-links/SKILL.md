---
name: lint-links
description: Valida y corrige enlaces externos en archivos Markdown. Usar cuando se pida revisar links, validar enlaces, o corregir target blank.
allowed-tools: Read, Glob, Grep, Edit
---

# Lint Links - Validador de Enlaces Externos

## Objetivo

Detectar enlaces externos en archivos Markdown que no tienen `{:target="_blank"}` y opcionalmente corregirlos.

## Definiciones

**Enlace externo:** URL que comienza con `http://` o `https://`

**Enlace interno:**
- Anclas: `#seccion`
- Rutas relativas: `./archivo.md`, `../carpeta/`
- Sin protocolo

## Formato Correcto (Kramdown)

```markdown
[texto](https://url-externa.com){:target="_blank"}
```

---

## Proceso

### Paso 1: Determinar alcance

Por defecto escanear `curriculum/` recursivamente. Si el usuario especifica un archivo o carpeta, usar ese alcance.

### Paso 2: Buscar enlaces externos

Usar Grep para encontrar el patrón:
```
\[.*\]\(https?://[^)]+\)
```

### Paso 3: Filtrar resultados

Separar en dos categorías:

**✅ Correctos:** Ya tienen `{:target="_blank"}`
```markdown
[Google](https://google.com){:target="_blank"}
```

**❌ Incorrectos:** No tienen el atributo
```markdown
[Google](https://google.com)
```

### Paso 4: Reportar o corregir

**Modo reporte (default):**
Mostrar lista de archivos con enlaces incorrectos:

```
## Reporte de Enlaces

### ❌ Enlaces sin target="_blank"

| Archivo | Línea | Enlace |
|---------|-------|--------|
| class-01/lab/README.md | 23 | [VS Code](https://code.visualstudio.com/) |
| class-02/README.md | 15 | [Excalidraw](https://excalidraw.com/) |

**Total:** X enlaces a corregir

### ✅ Enlaces correctos: Y
```

**Modo corrección (si el usuario lo pide):**
Usar Edit para agregar `{:target="_blank"}` a cada enlace incorrecto.

---

## Ejemplos de Uso

**Escanear todo:**
```
/lint-links
```

**Escanear archivo específico:**
```
/lint-links curriculum/class-01/lab/README.md
```

**Corregir automáticamente:**
```
/lint-links --fix
```

---

## Patrones Regex

### Detectar enlaces Markdown con URL externa
```regex
\[([^\]]+)\]\((https?://[^)]+)\)(?!\{:target)
```

Explicación:
- `\[([^\]]+)\]` - Captura el texto del enlace
- `\((https?://[^)]+)\)` - Captura URL que empieza con http(s)://
- `(?!\{:target)` - Negative lookahead: NO seguido de `{:target`

### Detectar enlaces ya correctos
```regex
\[([^\]]+)\]\((https?://[^)]+)\)\{:target="_blank"\}
```

---

## Notas

- NO modificar enlaces internos (anclas, rutas relativas)
- NO modificar enlaces en bloques de código (``` o `)
- Preservar cualquier otro atributo Kramdown existente
