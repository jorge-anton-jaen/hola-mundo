# Capturas App

Una aplicación Angular para gestión de capturas, colonias y servicios veterinarios.

Este proyecto fue generado usando [Angular CLI](https://github.com/angular/angular-cli) versión 19.2.15.

## Características

- **Gestión de Capturas**: Formulario y mantenimiento de capturas de animales
- **Gestión de Colonias**: Formulario y mantenimiento de colonias
- **Gestión de Servicios**: Formulario y mantenimiento de servicios veterinarios
- **Integración con Firebase**: Base de datos en tiempo real y autenticación
- **Bootstrap**: Interfaz responsive y moderna con iconos

## Tecnologías Utilizadas

- Angular 19.2.0
- Firebase 12.1.0
- Angular Fire 20.0.1
- Bootstrap 5.3.7 + Bootstrap Icons 1.13.1
- TypeScript 5.7.2
- Server-Side Rendering (SSR)

## Servidor de Desarrollo

Para iniciar un servidor de desarrollo local, ejecuta:

```bash
npm start
```

Una vez que el servidor esté ejecutándose, abre tu navegador y navega a `http://localhost:4200/`. La aplicación se recargará automáticamente cuando modifiques cualquier archivo fuente.

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/jorge-anton-jaen/hola-mundo.git
cd capturas-app
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura Firebase:
   - Crea un proyecto en Firebase Console
   - Obtén la configuración de Firebase
   - Actualiza la configuración en el proyecto

## Generación de Código

Angular CLI incluye herramientas poderosas de generación de código. Para generar un nuevo componente, ejecuta:

```bash
ng generate component component-name
```

Para una lista completa de esquemas disponibles (como `components`, `directives`, o `pipes`), ejecuta:

```bash
ng generate --help
```

## Construcción

Para construir el proyecto ejecuta:

```bash
ng build
```

Esto compilará tu proyecto y almacenará los artefactos de construcción en el directorio `dist/`. Por defecto, la construcción de producción optimiza tu aplicación para rendimiento y velocidad.

## Ejecutar Pruebas Unitarias

Para ejecutar pruebas unitarias con el corredor de pruebas [Karma](https://karma-runner.github.io), usa el siguiente comando:

```bash
ng test
```

## Ejecutar Pruebas End-to-End

Para pruebas end-to-end (e2e), ejecuta:

```bash
ng e2e
```

Angular CLI no viene con un framework de pruebas end-to-end por defecto. Puedes elegir uno que se adapte a tus necesidades.

## Estructura del Proyecto

```
src/
├── app/
│   ├── capturas/              # Módulo de gestión de capturas
│   │   ├── formulario-captura/
│   │   └── mantenimiento-capturas/
│   ├── colonias/              # Módulo de gestión de colonias
│   │   ├── formulario-colonia/
│   │   └── mantenimiento-colonias/
│   ├── servicios/             # Módulo de gestión de servicios
│   ├── formulario-servicio/   # Formulario de servicios
│   ├── mantenimiento-servicios/ # Mantenimiento de servicios
│   ├── fichas/                # Módulo de fichas
│   └── models/                # Modelos de datos
│       ├── animal.model.ts
│       ├── Captura.model.ts
│       ├── colonia.model.ts
│       └── servicio.model.ts
└── ...
```

## Recursos Adicionales

Para más información sobre el uso de Angular CLI, incluyendo referencias detalladas de comandos, visita la página [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).

## Contribuir

1. Haz fork del proyecto
2. Crea una rama para tu característica (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request
