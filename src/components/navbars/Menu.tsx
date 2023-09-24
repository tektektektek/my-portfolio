import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import classNames from 'classnames';

const handleScrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const yOffset = -70;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

const Menu = ({ navClass, buttonClass, showDownload }: any) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleClick = (section: string) => {
    handleScrollToElement(section);
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
