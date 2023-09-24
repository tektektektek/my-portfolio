import { Col, Container, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

const handleScrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
        // Utilisation de setTimeout pour s'assurer que le défilement se passe après que tout soit chargé
        setTimeout(() => {
            const yOffset = -70; // Décalage pour compenser la hauteur de la barre de navigation
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100); // 100 ms de délai, ajustez comme nécessaire
    }
};

const Footer = () => {
    return (
        <section className="section pt-4 pb-3 position-relative">
            <Container>
                <Row className="align-items-center border-top border-light pt-4">
                    <Col className="text-center">
                        <ul className="list-inline list-with-separator">
                        <li className="list-inline-item me-0">
                                <a href="#home-back" onClick={() => handleScrollToElement('home-back')}>Home</a>
                            </li>
                            <li className="list-inline-item me-0">
                                <a href="#pricing-section" onClick={() => handleScrollToElement('pricing-section')}>Pricing</a>
                            </li>
                            <li className="list-inline-item me-0">
                                <a href="#about-me" onClick={() => handleScrollToElement('about-me')}>About Me</a>
                            </li>
                            <li className="list-inline-item me-0">
                                <a href="#portfolio-grid" onClick={() => handleScrollToElement('portfolio-grid')}>Portfolio</a>
                            </li>
                            <li className="list-inline-item me-0">
                                <a href="#contact-me" onClick={() => handleScrollToElement('contact-me')}>Contact</a>
                            </li>
                        </ul>
                        <p className="mt-2">
                            {new Date().getFullYear()}© Amoni. All rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Footer;