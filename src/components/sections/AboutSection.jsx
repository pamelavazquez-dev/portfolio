import React from 'react';

function AboutSection() {
  return (
    <section id="sobre-mi" className="section sectionTint aboutSection">
      <div className="sectionHeader leftHeader">
        <p className="eyebrow">Sobre mí</p>
        <h2>Perfil profesional</h2>
      </div>
      <div className="sectionText">
        <p>
          Me gusta afrontar cada proyecto como una oportunidad para seguir aprendiendo y
          mejorar tanto a nivel técnico como personal. Trabajo con tecnologías como HTML,
          CSS, JavaScript, React, Vite, Node.js, Express, MongoDB y Firebase,
          desarrollando aplicaciones completas tanto en el frontend como en el backend.
        </p>
        <p>
          Además, incorporo herramientas de Inteligencia Artificial a mi flujo de trabajo
          para agilizar el desarrollo, optimizar procesos, generar documentación, explorar
          soluciones y mejorar la productividad, siempre aplicando criterio técnico y
          validando cada implementación.
        </p>
        <p>
          Me motiva formar parte de equipos donde compartir conocimientos, aprender de
          otros profesionales y contribuir al desarrollo de productos de calidad que
          aporten valor a las personas que los utilizan.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
