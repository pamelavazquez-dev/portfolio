import React from 'react';

function LoadingScreen() {
  return (
    <div className="loadingScreen" role="status" aria-live="polite">
      <div className="loadingCard">
        <div className="loadingMark" aria-hidden="true">
          <span />
        </div>
        <p className="eyebrow">Portfolio</p>
        <h1>Cargando portfolio de Pamela</h1>
        <p>Preparando proyectos, stack y contacto...</p>
        <div className="loadingBar" aria-hidden="true">
          <span />
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
