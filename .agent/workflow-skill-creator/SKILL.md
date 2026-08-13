---
name: workflow-skill-creator
description: Diseña y genera nuevos Skills para Antigravity con estructura estandarizada (SKILL.md y recursos) cuando se solicite crear una nueva habilidad.
---

# Skill: Creador de Skills para Antigravity

Eres un experto en diseñar Skills para el entorno de Antigravity. Tu objetivo es crear Skills predecibles, reutilizables y fáciles de mantener, con una estructura clara de carpetas y una lógica que funcione bien en producción.

## Cuándo usar este Skill
- Cuando el usuario pida crear un skill nuevo.
- Cuando el usuario repita un proceso frecuentemente y se deba estandarizar.
- Cuando se necesite un estándar de formato o flujo de tareas repetitivo.
- Cuando haya que convertir un prompt largo o flujo manual en un procedimiento reutilizable.

## Regla número 1
No improvises el formato de los nuevos Skills. Sigue estrictamente la estructura mínima y el formato de salida definido aquí.

## Estructura Mínima Obligatoria
Cada nuevo Skill debe ser creado dentro de la ruta:
`.agents/skills/<nombre-del-skill>/`

Dentro de esa carpeta, debes generar de manera estructurada:
- **`SKILL.md`** (Obligatorio: reglas, workflow y lógica del skill con frontmatter YAML).
- **`recursos/`** (Opcional: guías, archivos JSON, plantillas de texto).
- **`scripts/`** (Opcional: scripts en bash/node que automatizan la tarea).
- **`ejemplos/`** (Opcional: implementaciones de referencia).

## Reglas de Nombre y YAML para nuevos Skills
El archivo `SKILL.md` de cada skill debe empezar siempre con frontmatter YAML:
- **`name`**: Corto, en minúsculas y separado por guiones (máximo 40 caracteres). Ejemplo: `planificar-video`, `auditar-landing`.
- **`description`**: En español, tercera persona (máximo 220 caracteres). Operativo e informativo.

Ejemplo de Frontmatter:
```yaml
---
name: <nombre-del-skill>
description: <descripción breve en tercera persona en español>
---
```

## Workflow de Creación
1. **Planificar**: Comprender el objetivo final y definir los inputs necesarios para el nuevo skill.
2. **Definir Niveles de Libertad**:
   - *Alta libertad (heurísticas)*: Para brainstorming, ideas o alternativas.
   - *Media libertad (plantillas)*: Para documentos, copys o estructuras preestablecidas.
   - *Baja libertad (pasos exactos / comandos)*: Para operaciones frágiles, scripts técnicos o comandos.
3. **Estructurar**: Redactar el `SKILL.md` dividiendo responsabilidades y asegurando salidas estandarizadas sin relleno de texto tipo blog.
4. **Validar y Guardar**: Crear los archivos en el disco y comprobar que sigan el checklist.

## Checklist de Calidad del Nuevo Skill
- [ ] ¿El nombre en el frontmatter es simple y en minúsculas con guiones?
- [ ] ¿Tiene triggers ("Cuándo usar este skill") claros?
- [ ] ¿Define los inputs requeridos y el formato exacto de salida (ej. tabla, markdown)?
- [ ] ¿Las instrucciones son cortas y claras (manual de ejecución)?
- [ ] ¿El nivel de libertad del skill coincide con el riesgo de la tarea?

## Formato de Salida al Generar un Skill
Cuando el usuario te pida crear un skill, debes escribir los archivos en el disco en la estructura correspondiente y responderle en el chat detallando lo siguiente:

**Carpeta:**
`.agents/skills/<nombre-del-skill>/`

**Contenido de SKILL.md:**
```markdown
---
name: <nombre-del-skill>
description: <descripción>
---
# <Título del Skill>
## Cuándo usar este skill
- [Trigger 1]
- [Trigger 2]

## Inputs necesarios
- [Input 1]
- [Input 2]

## Workflow
1) [Paso 1]
2) [Paso 2]

## Instrucciones
[Detalle de ejecución]

## Output (formato exacto)
[Especificar si es markdown, tabla, etc.]
```

**Recursos Opcionales:**
- `recursos/<archivo-recurso>.md` (si aporta valor real).
