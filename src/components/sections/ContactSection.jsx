import React from 'react';
import profile from '../../data/profile';

function ContactSection() {
  return (
    <section id="contacto" className="contactSection">
      <p className="eyebrow">Contacto</p>
      <h2>Hablemos de tu equipo o proyecto.</h2>
      <p>
        Estoy abierta a oportunidades como desarrolladora web full stack junior y a
        proyectos donde pueda seguir creciendo.
      </p>
      <div className="contactActions">
        <a className="button buttonMint" href={`mailto:${profile.email}`}>
          Enviar email
        </a>
        <a className="button buttonLight" href={profile.linkedinUrl} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
