import profile from './profile';

const projects = [
  {
    title: 'CineAtlas',
    category: 'Frontend interactivo',
    description:
      'Guia web para practicar supuestos diarios en una clinica veterinaria, desarrollada con HTML, CSS y JavaScript.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://pamelavazquez-dev.github.io/CineAtlas/',
    codeUrl: 'https://github.com/pamelavazquez-dev/CineAtlas.git',
  },
  {
    title: 'Portfolio SPA',
    category: 'React + Vite',
    description:
      'Rediseno de mi portfolio personal como SPA moderna, con una presentacion profesional y orientada a busqueda de empleo.',
    stack: ['React', 'Vite', 'Tailwind'],
    url: 'https://pamelavazquez.vercel.app/',
    codeUrl: 'https://github.com/pamelavazquez-dev/portfolio.git',
  },
  {
    title: 'Campus Virtual The Bridge',
    category: 'Full stack',
    description:
      'Plataforma SaaS educativa con roles de admin, alumno y profesor. Autenticación con firebase, rutas protegidas y gestión de contenido académico.',
    stack: ['Firebase', 'Backend', 'Frontend'],
    url: 'https://campus-aprentic.vercel.app/',
    codeUrl: 'https://github.com/pamelavazquez-dev/campus-aprentic.git',
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
];

export default projects;
