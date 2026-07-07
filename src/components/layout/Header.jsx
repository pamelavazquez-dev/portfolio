import React, { useState } from 'react';
import navigationLinks from '../../data/navigation';
import profile from '../../data/profile';
import { profilePhoto } from '../../assets/profile';

function Header({ isDarkMode, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((currentValue) => !currentValue);
  };

  return (
    <header className="header">
      <a className="brand" href="#inicio" aria-label="Ir al inicio" onClick={closeMenu}>
        <img src={profilePhoto} alt={profile.name} />
        <span>{profile.name}</span>
      </a>

      <button
        className={`menuToggle${isMenuOpen ? ' isOpen' : ''}`}
        type="button"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-controls="main-navigation"
        aria-label={isMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        className={`nav${isMenuOpen ? ' isOpen' : ''}`}
        id="main-navigation"
        aria-label="Navegacion principal"
      >
        {navigationLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
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
