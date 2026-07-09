import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import education from '../../data/education';

function CertificateModal({ certificate, onClose }) {
  const certificateViewerUrl = `${certificate.certificateUrl}#toolbar=1&navpanes=0&view=FitH`;

  return createPortal(
    <div className="certificateModal" role="dialog" aria-modal="true" aria-labelledby="certificate-title">
      <button className="certificateBackdrop" type="button" aria-label="Cerrar certificado" onClick={onClose} />
      <div className="certificateDialog">
        <div className="certificateHeader">
          <div>
            <p className="eyebrow">Certificado</p>
            <h3 id="certificate-title">{certificate.title}</h3>
          </div>
          <button className="certificateClose" type="button" aria-label="Cerrar certificado" onClick={onClose}>
            &times;
          </button>
        </div>
        <iframe
          className="certificateFrame"
          src={certificateViewerUrl}
          title={`Certificado de ${certificate.title}`}
        />
        <div className="certificateMobileNotice">
          <p>En móvil es mejor abrir el PDF completo para ver todas las páginas y ajustar el zoom.</p>
          <a className="educationButton" href={certificate.certificateUrl} target="_blank" rel="noreferrer">
            Abrir certificado completo
          </a>
        </div>
      </div>
    </div>,
    document.body,
  );
}

function EducationSection() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  useEffect(() => {
    if (!selectedCertificate) {
      return undefined;
    }

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', closeOnEscape);
    document.body.classList.add('modalOpen');

    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.body.classList.remove('modalOpen');
    };
  }, [selectedCertificate]);

  return (
    <section id="formacion" className="section educationSection">
      <div className="sectionHeader wide leftHeader">
        <p className="eyebrow">Formación</p>
        <h2>Aprendizaje que sostiene mi perfil técnico</h2>
      </div>

      <div className="educationGrid">
        {education.map((item) => (
          <article className="educationCard" key={item.title}>
            <div>
              <p className="educationYear">{item.year}</p>
              <h3>{item.title}</h3>
              <p>{item.organization}</p>
            </div>
            <button className="educationButton" type="button" onClick={() => setSelectedCertificate(item)}>
              Ver certificado
            </button>
          </article>
        ))}
      </div>

      {selectedCertificate && <CertificateModal certificate={selectedCertificate} onClose={closeModal} />}
    </section>
  );
}

export default EducationSection;
