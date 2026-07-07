import React from 'react';
import GithubIcon from '../icons/GithubIcon';
import LinkedinIcon from '../icons/LinkedinIcon';
import profile from '../../data/profile';

function SocialLinks() {
  return (
    <div className="socialLinks" aria-label="Redes sociales">
      <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <LinkedinIcon />
      </a>
      <a href={profile.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
        <GithubIcon />
      </a>
    </div>
  );
}

export default SocialLinks;
