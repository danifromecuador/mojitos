# Mojito's Bar APP 

## 📗 Tabla de Contenidos

- [⚠️ Aclaración](#aclaración)
- [📖 Sobre el Proyecto](#sobre-el-proyecto)
  - [🛠 Tecnologías Utilizadas](#tecnologías-utilizadas)
  - [Stack Tecnológico](#stack-tecnológico)
  - [Características Principales](#características-principales)
  - [Recursos](#recursos)
- [💻 Live Link](#live-link)
- [⚙️ Configuración](#configuración)
- [👥 Autor](#autor)
- [🔭 Funcionalidades Futuras](#funcionalidades-futuras)
- [🤝 Contribuciones](#contribuciones)
- [⭐️ Muestra tu Apoyo](#muestra-tu-apoyo)
- [🙏 Agradecimientos](#agradecimientos)
- [📝 Licencia](#licencia)

## Aclaración
- NO he usado base de datos para guardar los cocteles o los usuarios, el backend contiene solo la API REST.
- Sí se pueden cargar imágenes, pero se hace uso de la API del servicio [imgBB](https://imgbb.com/) para almacenar los archivos.
- Si bien no estaba en los requerimientos del challenge, quise desplegar la app en AWS.

## Sobre el Proyecto

Este proyecto es una aplicación de cocteles desarrollada como monorepo con dos directorios principales: **backend** y **frontend**.

En esta app, el usuario puede:
- Ver la lista de todos los cocteles
- Ver el detalle de un solo coctel
- Buscar un coctel por su nombre
- Crear un coctel, con imágenes locales de su equipo
- Editar un coctel existente
- Eliminar un coctel

### Tecnologías Utilizadas

### Stack Tecnológico

- Backend: Node.js versión 18 (API REST para gestión de cocteles)
- Frontend: React con Vite 6 (No se usó Vite 7 por temas de compatibilidad con Node 18), para el manejo de estados globales he usado [Zustand](https://zustand.docs.pmnd.rs/)
- Almacenamiento Favoritos: almacenamiento local (localStorage)
- Almacenamiento de Imágenes: API de [imgBB](https://imgbb.com/)
- Despliegue: AWS EC2 & Docker

### Características Principales

- API para listar, crear, editar y borrar cocteles con fotos.
- Las fotos se guardan en la API de imgBB
- Pantallas para listar, buscar, ver detalles y editar cocteles.
- Formularios para agregar y modificar cocteles.
- Manejo de favoritos y persistencia en localStorage.
- Documentación de API con Postman.
- Despliege en AWS EC2 mono-AZ, con 2 containers Docker nginx para frontend y backend

### Recursos

- [Documentación de la API backend](https://www.postman.com/supply-architect-46643137/public-workspace/documentation/hrp88dk/mojitos)

## Live Link <a name="live-link"></a>
<a href="http://18.219.40.70/">Mojito's BAR en AWS</a>

## Configuración

Para correr el backend y frontend localmente:

1. Clona el repositorio.
```
git clone git@github.com:danifromecuador/mojitos.git
```
2. Abre una terminal, instala dependencias y levanta backend:

```
cd mojitos/backend
npm install
npm start
```

3. Abre otra terminal, instala dependencias y levanta frontend:

```
cd ..
cd frontend
npm install
npm run dev
```

4. Abre la página http://localhost:5173/
en tu navegador favorito
5. Crea tus mejores cocteles!

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
