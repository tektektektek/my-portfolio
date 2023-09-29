import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section id='about-me' className="hero-4 py-5 bg-gradient2">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={7} className="text-center">
                        <h1 className="hero-title">{t('portfolioHero.title')}</h1>
                        <p className="fs-17 text-muted pt-3">
                            {t('portfolioHero.description')}
                        </p>
                        <div className="text-center mt-5 pb-md-0">
                            <a href="../public//DOGBE-CV.pdf" download="DOGBE-CV.pdf" className="btn btn-info">
                                <FeatherIcon icon="download" className="icon-xxs me-2" />
                                {t('portfolioHero.downloadButton')}
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
