import React from 'react';
import navigationLinks from '../../data/navigation';
import profile from '../../data/profile';
import { profilePhoto } from '../../assets/profile';

function Header({ isDarkMode, onToggleTheme }) {
  return (
    <header className="header">
      <a className="brand" href="#inicio" aria-label="Ir al inicio">
        <img src={profilePhoto} alt={profile.name} />
        <span>{profile.name}</span>
      </a>

      <nav className="nav" aria-label="Navegacion principal">
        {navigationLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
        <button
          className="themeToggle"
          type="button"
          onClick={onToggleTheme}
          aria-label={isDarkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
          title={isDarkMode ? 'Modo claro' : 'Modo oscuro'}
        >
          <span aria-hidden="true">{isDarkMode ? '☀' : '☾'}</span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
