import campusImage from '../../assets/images/campus-aprentic.webp';
import cineAtlasImage from '../../assets/images/cine-atlas.webp';
import ecommerceImage from '../../assets/images/e-commerce .webp';

const projects = [
  {
    title: 'Campus Virtual The Bridge',
    category: 'Full stack',
    description:
      'Plataforma SaaS educativa con roles de admin, alumno y profesor. Autenticación con Firebase, rutas protegidas y gestión de contenido académico.',
    stack: ['Firebase', 'Backend', 'Frontend'],
    url: 'https://campus-aprentic.vercel.app/',
    codeUrl: 'https://github.com/pamelavazquez-dev/campus-aprentic.git',
    image: campusImage,
    imageAlt: 'Vista del Campus Virtual The Bridge',
    demoCredentials: [
      {
        role: 'Profesor',
        email: 'lperez@aprentic.com',
        password: 'lape1234!',
      },
      {
        role: 'Alumno',
        email: 'cruiz@aprentic.com',
        password: 'caru1234!',
      },
    ],
  },
  {
    title: 'CineAtlas',
    category: 'Frontend + llamada API',
    description:
      'Aplicación para consultar películas a partir de llamada a API TMDB, con filtros de búsqueda y modal para ver detalles.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://cine-atlas-five.vercel.app/',
    codeUrl: 'https://github.com/pamelavazquez-dev/CineAtlas.git',
    image: cineAtlasImage,
    imageAlt: 'Vista de la aplicación CineAtlas',
  },
  {
    title: 'E-commerce Gatitos Footprints (En desarrollo)',
    category: 'React + Vite + Firebase',
    description:
      'Tienda con productos personalizados donde el cliente puede diseñar su producto, ver stock y realizar el pago.',
    stack: ['Firebase', 'Backend', 'Frontend'],
    url: '',
    codeUrl: '',
    image: ecommerceImage,
    imageAlt: 'Vista del e-commerce Gatitos Footprints',
  },
];

export default projects;
