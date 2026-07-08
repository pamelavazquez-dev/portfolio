import React, { useState } from 'react';
import projects from '../../data/projects';

function ProjectCard({ project }) {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const hasDemoCredentials = Boolean(project.demoCredentials?.length);

  const toggleDemoCredentials = () => {
    setIsDemoOpen((currentValue) => !currentValue);
  };

  return (
    <article className="projectCard">
      {hasDemoCredentials && (
        <button
          className="projectDemoToggle"
          type="button"
          onClick={toggleDemoCredentials}
          aria-expanded={isDemoOpen}
        >
          Demo
        </button>
      )}

      <p className="projectCategory">{project.category}</p>
      <h3>{project.title}</h3>
      <img className="projectImage" src={project.image} alt={project.imageAlt} loading="lazy" />
      <p>{project.description}</p>
      <div className="tagList">
        {project.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div className="projectActions">
        <a
          className={`projectButton projectButtonPrimary${project.url ? '' : ' isDisabled'}`}
          href={project.url || undefined}
          target="_blank"
          rel="noreferrer"
          aria-disabled={!project.url}
          onClick={(event) => {
            if (!project.url) {
              event.preventDefault();
            }
          }}
        >
          Ver proyecto
        </a>
        <a
          className={`projectButton projectButtonSecondary${project.codeUrl ? '' : ' isDisabled'}`}
          href={project.codeUrl || undefined}
          target="_blank"
          rel="noreferrer"
          aria-disabled={!project.codeUrl}
          onClick={(event) => {
            if (!project.codeUrl) {
              event.preventDefault();
            }
          }}
        >
          &lt;/&gt; Código
        </a>
      </div>

      {hasDemoCredentials && isDemoOpen && (
        <div className="demoCredentials">
          {project.demoCredentials.map((credential) => (
            <div className="demoCredential" key={credential.email}>
              <strong>{credential.role}</strong>
              <span>Email: {credential.email}</span>
              <span>Password: {credential.password}</span>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}

function ProjectsSection() {
  return (
    <section id="proyectos" className="section">
      <div className="sectionHeader wide">
        <p className="eyebrow">Proyectos</p>
        <h2>Algunos de mis proyectos</h2>
      </div>

      <div className="projectGrid">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
