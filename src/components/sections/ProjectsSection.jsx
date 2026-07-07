import React from 'react';
import projects from '../../data/projects';

function ProjectsSection() {
  return (
    <section id="proyectos" className="section">
      <div className="sectionHeader wide">
        <p className="eyebrow">Proyectos</p>
        <h2>Algunos de mis proyectos</h2>
      </div>

      <div className="projectGrid">
        {projects.map((project) => (
          <article className="projectCard" key={project.title}>
            <p className="projectCategory">{project.category}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tagList">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="projectActions">
              <a className="projectButton projectButtonPrimary" href={project.url} target="_blank" rel="noreferrer">
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
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
