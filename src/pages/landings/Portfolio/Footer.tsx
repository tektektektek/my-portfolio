import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const handleScrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
        setTimeout(() => {
            const yOffset = -70; 
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100); 
    }
};

const Footer = () => {
    const { t } = useTranslation();

    return (
        <section className="section pt-4 pb-3 position-relative">
            <Container>
                <Row className="align-items-center border-top border-light pt-4">
                    <Col className="text-center">
                        <ul className="list-inline list-with-separator">
                            <li className="list-inline-item me-0">
                                <a href="#home-back" onClick={() => handleScrollToElement('home-back')}>{t('footer.home')}</a>
                            </li>
                            <li className="list-inline-item me-0">
                                <a href="#pricing-section" onClick={() => handleScrollToElement('pricing-section')}>{t('footer.pricing')}</a>
                            </li>
                            <li className="list-inline-item me-0">
                                <a href="#about-me" onClick={() => handleScrollToElement('about-me')}>{t('footer.aboutMe')}</a>
                            </li>
                            <li className="list-inline-item me-0">
                                <a href="#portfolio-grid" onClick={() => handleScrollToElement('portfolio-grid')}>{t('footer.portfolio')}</a>
                            </li>
                            <li className="list-inline-item me-0">
                                <a href="#contact-me" onClick={() => handleScrollToElement('contact-me')}>{t('footer.contact')}</a>
                            </li>
                        </ul>
                        <p className="mt-2">
                            {new Date().getFullYear()}© {t('footer.copyright')}
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Footer;
