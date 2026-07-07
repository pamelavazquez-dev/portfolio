import React from 'react';
import techStack from '../../data/techStack';

function StackSection() {
  return (
    <section id="stack" className="section sectionTint stackSection">
      <div className="sectionHeader wide leftHeader">
        <p className="eyebrow">Stack</p>
        <h2>Herramientas que he dominado en mi formación</h2>
      </div>
      <div className="techGrid">
        {techStack.map((tech) => (
          <article className="techCard" key={tech.name}>
            <img src={tech.icon} alt="" aria-hidden="true" />
            <span>{tech.name}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default StackSection;
