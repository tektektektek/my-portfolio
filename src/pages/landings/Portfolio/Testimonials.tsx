import { Button, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { useTranslation } from 'react-i18next';

// components
import { SwiperSlider2 } from 'components/sliders';

// dummy data
import { slides } from 'components/sliders/data';

const Testimonials = () => {
    const { t } = useTranslation();

    const translatedSlides = slides.map(slide => ({
        ...slide,
        statement: t(slide.statement),
        customer: {
            ...slide.customer,
            name: t(slide.customer.name),
            designation: t(slide.customer.designation)
        }
    }));

    return (
        <section
            className="section mt-5 py-4 py-sm-8 bg-gradient4 position-relative overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="600"
        >
            <div className="divider top d-none d-sm-block"></div>
            <Container className="testimonials-3">
                <Row className="align-items-center">
                    <Col>
                        <h1 className="display-5 fw-medium">{t('testimonial.title')}</h1>
                    </Col>
                    <Col xs="auto" className="text-sm-end pt-2 pt-sm-0">
                        <div className="navigations">
                            <Button variant="link" className="text-normal p-0 swiper-custom-prev">
                                <FeatherIcon icon="arrow-left" className="icon-dual" />
                            </Button>
                            <Button variant="link" className="text-normal p-0 swiper-custom-next">
                                <FeatherIcon icon="arrow-right" className="icon-dual" />
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-3 mt-sm-5">
                    <Col>
                        <div className="slider">
                            <SwiperSlider2 slides={translatedSlides} /*hasLogo */ />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Testimonials;
