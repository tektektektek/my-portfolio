import { Card, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { useTranslation } from 'react-i18next';


// types
import { Service } from './types';

type ServicesProps = {
    services: Service[];
};

const Services = ({ services }: ServicesProps) => {
    const { t } = useTranslation();
    return (
        <section className="position-relative py-6">
            <Container>
                <Row className="justify-content-center">
                    <Col className="text-start">
                        <h1 className="display-5 fw-semibold">{t("services.title")}</h1>
                        <p className="text-muted mx-auto">
                        {t("services.descriptionPart1")} 
                        <span className="text-danger fw-medium">{t("services.descriptionPart2")}</span>.
                        </p>
                    </Col>
                </Row>
                <Row className="pt-5 align-items-center features-9">
                    {(services || []).map((service, index) => {
                        return (
                            <Col lg={4} key={index.toString()}>
                                <Card
                                    className="shadow feature-item rounded-0"
                                    data-aos="fade-up"
                                    data-aos-duration="600"
                                >
                                    <Card.Body className="text-start">
                                        <div className="bg-soft-danger avatar avatar-sm icon icon-with-bg icon-xs text-danger">
                                            <FeatherIcon icon={service.icon} claasName="icon-dual-danger" />
                                        </div>
                                        <h4 className="mt-4 text-dark">{t(service.title)}</h4>
                                        <p className="text-muted mb-0">{t(service.description)}</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
};

export default Services;
