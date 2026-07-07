import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  return window.localStorage.getItem('theme') || 'light';
};

function MainLayout() {
  const [theme, setTheme] = useState(getInitialTheme);
  const isDarkMode = theme === 'dark';

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="portfolio min-h-screen" data-theme={theme}>
      <Header isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
