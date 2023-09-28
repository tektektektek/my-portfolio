import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';


// images
import portfolio1 from 'assets/images/hero/amoni-v2.png';

const handleScrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

const Hero3 = () => {
    const { t } = useTranslation();
    return (
        <section className="hero-3 pt-lg-7 pt-3 position-relative hero-with-shapes">
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape3"></div>
            <Container className="hero-container">
                <Row>
                    <Col lg={6} data-aos="fade-right" data-aos-duration="1000">
                        <h4 className="mt-4 pt-2">
                            {t("hero3.greeting")}
                        </h4>

                        <h1 className="hero-title">{t("hero3.title")}</h1>
                        <p className="mt-3 fs-16 text-secondary">
                            {t("hero3.description")}
                        </p>

                        <div className="pt-3 pt-sm-5">
                            <Link to="#contact-me" className="btn btn-info" data-toggle="smooth-scroll"
                            onClick={() => handleScrollToElement('contact-me')}  // Ajoutez cette ligne
                            >
                                {t("hero3.contactButton")}
                            </Link>
                            <Link to="#" className="btn btn-outline-secondary ms-2">
                                {t("hero3.downloadButton")}
                            </Link>
                        </div>
                    </Col>
                    <Col lg={{ offset: 1, span: 5 }}>
                        <div
                            className="img-container text-center text-lg-end"
                            data-aos="fade-up"
                            data-aos-duration="500"
                        >
                            <img src={portfolio1} alt="Hero" className="img-fluid" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero3;
