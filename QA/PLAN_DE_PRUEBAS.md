# Plan de Pruebas de Calidad

Este documento detalla el plan de pruebas para verificar el cumplimiento de los 7 estándares de calidad de software en el portafolio.

## Estrategia de Pruebas

### 1. Correctitud (Correctness)
- **Método:** Pruebas funcionales de validación del formulario.
- **Verificación:** Garantizar que el formulario de contacto no acepte campos vacíos o correos inválidos.

### 2. Fiabilidad (Reliability)
- **Método:** Simulación de envío del formulario en condiciones normales y de fallo.
- **Verificación:** Que el hook `useForm` procese correctamente las excepciones de red y actualice la interfaz de usuario en consecuencia.

### 3. Usabilidad (Usability)
- **Método:** Auditoría visual y de estructura tipográfica.
- **Verificación:** Contraste tipográfico, legibilidad de la fuente Plus Jakarta Sans, comportamiento responsivo y consistencia visual minimalista.

### 4. Eficiencia (Efficiency)
- **Método:** Evaluación del bundle de Vite e importaciones estructuradas.
- **Verificación:** Carga de imágenes/iconos a través de código SVG directo y libre de librerías sobredimensionadas.

### 5. Mantenibilidad (Maintainability)
- **Método:** Inspección estática del árbol de directorios.
- **Verificación:** Estructura modular orientada a características (`src/features/...`).

### 6. Portabilidad (Portability)
- **Método:** Verificación de rutas relativas y variables de entorno.
- **Verificación:** No existen rutas físicas locales absolutas, uso correcto de rutas en Vite.

### 7. Seguridad (Security)
- **Método:** Análisis de cabeceras de red y prevención de inyecciones.
- **Verificación:** Cabeceras CSP configuradas en `netlify.toml` para denegar orígenes inseguros y prevenir inyecciones.
