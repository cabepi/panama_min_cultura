# Política de Seguridad

El equipo de infraestructura del **Ministerio de Cultura de Panamá** toma seriamente la confidencialidad de la información y la integridad e invulneración operacional de toda la plataforma de código abierto desarrollada.

## Versiones Soportadas

Actualmente, solo las construcciones consolidadas marcadas como **Último Release Estable** reciben retroalimentación y actualizaciones críticas por parte de los ingenieros centrales. Las versiones catalogadas como "Alpha" o "Beta" continúan considerándose bajo inestabilidad potencial.

| Versión | Perfil | Estado de Soporte Activo |
| ------- | :---: | :----------------------: |
| 1.0.x   | Producción | ❌  No publicada todavía  |
| **0.1.x**   | **Alpha Core** | **✅ Total**                    |

## Cómo Reportar una Vulnerabilidad

Si un experto tecnológico, investigador de ciberseguridad o un usuario identifica deficiencias potenciales u hoyos de explotación (tales como `Inyección SQL`, vulneración `Cross-Site Scripting XSS`, fugas de Expiración en tokens JWT, saltos y falsificaciones `CSRF`), **solicitamos encarecidamente NO generar "Issues" abiertos dentro del rastreador público del repositorio.**

Procedimiento de reporte oficial:
1. Contactar urgentemente en privado al Líder Técnico de Repositorio o mantenedor directo enviando un correo con los detalles probatorios. (Correo *Pendiente de Definición Gubernamental*).
2. Asegurar en el mensaje de correo evidencia adjunta, los pasos analíticos exactos para reproducir empíricamente el modelo fallido, y la potencial severidad técnica que acarrea la brecha. 
3. El equipo acusará recibo en un plazo no mayor a **48 horas laborables**, iniciando la apertura de una rama de contención confidencial inmediata (`hotfix-security`) para blindar el error antes de que el público lo adquiera mediante un parche retroactivo de urgencia.

Toda contribución que preserve el entorno neutral y fiable de MiCultura agradece una acción discreta y pragmática.
