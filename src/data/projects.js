import profile from './profile';

const projects = [
  {
    title: 'Guia ATV',
    category: 'Frontend interactivo',
    description:
      'Guia web para practicar supuestos diarios en una clinica veterinaria, desarrollada con HTML, CSS y JavaScript.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://pamelavazquez-dev.github.io/guia-atv/',
    codeUrl: '',
  },
  {
    title: 'Portfolio SPA',
    category: 'React + Vite',
    description:
      'Rediseño de mi portfolio personal como SPA moderna, con una presentacion profesional y orientada a busqueda de empleo.',
    stack: ['React', 'Vite', 'Tailwind'],
    url: profile.githubUrl,
    codeUrl: '',
  },
  {
    title: 'Proyecto full stack',
    category: 'Proximamente',
    description:
      'Espacio reservado para un proyecto con API, autenticacion, base de datos y despliegue.',
    stack: ['API', 'Backend', 'Frontend'],
    url: profile.githubUrl,
    codeUrl: '',
  },
];

export default projects;
