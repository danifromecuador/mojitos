# Prueba Técnica de Cocteles Monorepo

## 📗 Tabla de Contenidos

- [📖 Sobre el Proyecto](#sobre-el-proyecto)
  - [🛠 Tecnologías Utilizadas](#tecnologías-utilizadas)
    - [Stack Tecnológico](#stack-tecnológico)
    - [Características Principales](#características-principales)
    - [Recursos](#recursos)
- [💻 Comenzando](#comenzando)
  - [Configuración](#configuración)
- [👥 Autor](#autor)
- [🔭 Funcionalidades Futuras](#funcionalidades-futuras)
- [🤝 Contribuciones](#contribuciones)
- [⭐️ Muestra tu Apoyo](#muestra-tu-apoyo)
- [🙏 Agradecimientos](#agradecimientos)
- [📝 Licencia](#licencia)

## Aclaración
- NO he usado base de datos para guardar los cocteles o los usuarios, el backend contiene solo la API REST.
- Sí se pueden cargar imágenes, pero se hace uso de la API del servicio [imgBB](https://imgbb.com/) para almacenar las imágenes.

## Sobre el Proyecto

Este proyecto es una aplicación de cócteles desarrollada como monorepo con dos directorios principales: **backend** y **frontend**.

### Tecnologías Utilizadas

#### Stack Tecnológico

- Backend: Node.js versión 18 (API REST para gestión de cócteles)
- Frontend: React con Vite 6 (Interfaz de usuario moderna y reactiva), para el manejo de estados globales he usado [Zustand](https://zustand.docs.pmnd.rs/)
- Almacenamiento Favoritos: almacenamiento local (localStorage)
- Almacenamiento de Imágenes: API de [imgBB](https://imgbb.com/)

#### Características Principales

- API para listar, crear, editar y borrar cócteles con fotos.
- Las fotos se guardan en la API de imgBB
- Pantallas para listar, buscar, ver detalles y editar cócteles.
- Formularios para agregar y modificar cócteles.
- Manejo de favoritos y persistencia en localStorage.
- Documentación de API con Postman.

#### Recursos

- [Documentación en Postman de la API backend](https://www.postman.com/supply-architect-46643137/public-workspace/documentation/hrp88dk/mojitos)
- API de [imgBB](https://imgbb.com/) para subir y guardar las imágenes
- Postman para publicar la documentación de la API backend

## Comenzando

### Configuración

Para correr el backend y frontend localmente:

1. Clona el repositorio.
2. Instala dependencias y levanta backend:

```
cd backend
npm install
npm start
```

3. Instala dependencias y levanta frontend:

```
cd frontend
npm install
npm run dev
```

## Autor

- LinkedIn: [Daniel Morillo](https://www.linkedin.com/in/danifromec/)
- GitHub: [Daniel Morillo](https://github.com/danifromecuador)

## Funcionalidades Futuras

- Agregar autenticación y autorización.
- Mejorar búsqueda y filtros avanzados.
- Agregar tests
- Añadir restricciones para la subida de imágenes como tamaño o resolución
- Mejorar la estructura de la store de [Zustand](https://zustand.docs.pmnd.rs/)

## Contribuciones

Las contribuciones son bienvenidas. Abre un issue o pull request para mejorar el proyecto.

## Muestra tu Apoyo

Si este proyecto te ha sido útil, no dudes en darle una estrella en GitHub.

## Agradecimientos

- Gracias a la comunidad de desarrolladores y recursos abiertos que hicieron posible este proyecto.
- Agradecimiento especial a [César Valencia](https://www.linkedin.com/in/cesar-alberto-valencia-aguilar?miniProfileUrn=urn%3Ali%3Afsd_profile%3AACoAACYjZjYBQ3wJXb0ff46vD3IMVtqTQzMgQKs&lipi=urn%3Ali%3Apage%3Aprofile_common_profile_index%3B2f766322-ec2d-4d67-955c-325009d091e1) por su invaluable apoyo técnico y moral.

## Licencia

Este proyecto está bajo licencia MIT.
