# Matriz de Cumplimiento de Calidad de Software

Esta matriz mapea los 7 estándares de calidad a los archivos del proyecto que los implementan y sus respectivas validaciones.

| Pilar de Calidad | Archivo / Componente Principal | Validación Realizada | Estado |
| :--- | :--- | :--- | :--- |
| **Correctitud** | [ContactoForm.jsx](file:///d:/mi-pagina/src/features/contacto/components/ContactoForm.jsx) | Validaciones integradas de formulario y estados de error | Cumplido |
| **Fiabilidad** | [useForm.js](file:///d:/mi-pagina/src/hooks/useForm.js) | Manejo de excepciones `try/catch` en llamadas asíncronas | Cumplido |
| **Usabilidad** | [variables.css](file:///d:/mi-pagina/src/styles/variables.css) | Diseño fluido, paleta contrastada de colores y soporte media query | Cumplido |
| **Eficiencia** | [ProyectoCard.jsx](file:///d:/mi-pagina/src/features/proyectos/components/ProyectoCard.jsx) | SVGs vectoriales ligeros inline, sin dependencias pesadas | Cumplido |
| **Mantenibilidad**| [resumeData.js](file:///d:/mi-pagina/src/constants/resumeData.js) | Arquitectura modular basada en carpetas por características | Cumplido |
| **Portabilidad** | [vite.config.js](file:///d:/mi-pagina/vite.config.js) | Rutas relativas del compilador e infraestructura parametrizada | Cumplido |
| **Seguridad** | [netlify.toml](file:///d:/mi-pagina/netlify.toml) | Configuración de cabeceras HTTP de seguridad (CSP estricto) | Cumplido |
