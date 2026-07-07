import React from 'react';
import SocialLinks from '../common/SocialLinks';
import profile from '../../data/profile';
import { profilePhoto } from '../../assets/profile';

function HeroSection() {
  return (
    <section id="inicio" className="hero">
      <div className="heroText">
        <p className="eyebrow">{profile.role}</p>
        <h1>Hola, soy Pame</h1>
        <p className="heroIntro">
          Desarrolladora Web Full Stack Junior. Me apasiona construir aplicaciones web que
          combinen código limpio con una buena experiencia de usuario. Durante mi formación
          he participado en proyectos individuales y colaborativos, aprendiendo la importancia
          del trabajo en equipo, la comunicación y la mejora continua. Ahora busco formar parte
          de un equipo donde seguir aprendiendo, aportar valor y afrontar nuevos retos.
        </p>

        <div className="heroActions" aria-label="Acciones principales">
          <a className="button buttonPrimary" href="#proyectos">
            Ver proyectos
          </a>
          <a className="button buttonGhost" href={profile.cvUrl} target="_blank" rel="noreferrer">
            Ver CV
          </a>
          <a className="button buttonDark" href="#contacto">
            Contacto
          </a>
        </div>

        <SocialLinks />
      </div>

      <div className="heroPhoto">
        <img src={profilePhoto} alt={`Retrato profesional de ${profile.name}`} />
      </div>
    </section>
  );
}

export default HeroSection;
