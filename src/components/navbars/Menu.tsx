import React, { useEffect, useState } from 'react'; // N'oubliez pas d'importer useEffect
import { Nav } from 'react-bootstrap';
import classNames from 'classnames';

type MenuProps = {
  navClass?: string;
  buttonClass?: string;
  showDownload?: boolean;
};

const Menu: React.FC<MenuProps> = ({ navClass, buttonClass, showDownload }) => {
  const [activeSection, setActiveSection] = useState<string | null>('home-back'); // Initialisé à 'home-back'

useEffect(() => {
  const handleScroll = () => {
    const sections = ['home-back', 'pricing-section', 'about-me', 'portfolio-grid', 'contact-me'];
    for (const section of sections) {
      const element = document.getElementById(section);
      const navbarHeight = 70;
      let offset = 0;

      // Appliquer un décalage spécifique à la section "Contact"
      if (section === 'contact-me') {
        offset = 480;
      }

      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= (navbarHeight + offset) && rect.bottom > (navbarHeight + offset)) {
          setActiveSection(section);
          break;
        }
      }
    }
  };


    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (section: string) => { // Ajout de types
    const element = document.getElementById(section);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setActiveSection(section);
  };

  return (
    <Nav as="ul" className={classNames('align-items-lg-center', navClass)}>
      <Nav.Item as="li">
        <a
          href="#home-back"
          className={classNames('nav-link', { active: activeSection === 'home-back' })}
          onClick={(e) => { e.preventDefault(); handleClick('home-back'); }}
        >
          Home
        </a>
      </Nav.Item>
      <Nav.Item as="li">
        <a
          href="#pricing-section"
          className={classNames('nav-link', { active: activeSection === 'pricing-section' })}
          onClick={(e) => { e.preventDefault(); handleClick('pricing-section'); }}
        >
          Pricing
        </a>
      </Nav.Item>
      <Nav.Item as="li">
        <a
          href="#about-me"
          className={classNames('nav-link', { active: activeSection === 'about-me' })}
          onClick={(e) => { e.preventDefault(); handleClick('about-me'); }}
        >
          About Me
        </a>
      </Nav.Item>
      <Nav.Item as="li">
        <a
          href="#portfolio-grid"
          className={classNames('nav-link', { active: activeSection === 'portfolio-grid' })}
          onClick={(e) => { e.preventDefault(); handleClick('portfolio-grid'); }}
        >
          Portfolio Grid
        </a>
      </Nav.Item>
      <Nav.Item as="li">
        <a
          href="#contact-me"
          className={classNames('nav-link', { active: activeSection === 'contact-me' })}
          onClick={(e) => { e.preventDefault(); handleClick('contact-me'); }}
        >
          Contact
        </a>
      </Nav.Item>
      {showDownload && (
        <Nav.Item as="li">
          <a
            href="../public/DOGBE-CV.pdf"
            download="DOGBE-CV.pdf"
            className={classNames('btn', buttonClass)}
          >
            Download CV
          </a>
        </Nav.Item>
      )}
    </Nav>
  );
};

export default Menu;
