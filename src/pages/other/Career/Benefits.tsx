import React from 'react';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { useTranslation } from 'react-i18next';

// types
import { Benefit } from './types';

type BenefitsProps = {
    benefits: Benefit[];
};

const Benefits: React.FC<BenefitsProps> = ({ benefits }) => {
    const { t } = useTranslation();

    return (
        <section className="py-3 mt-5 mb-6 career-service position-relative">
            <Container>
                <Row>
                    <Col className="text-center">
                        <Badge pill bg="light" className="badge-soft-info px-2 py-1">
                            {t("benefits.badge")}
                        </Badge>
                        <h1 className="display-5 fw-semibold">{t("benefits.title")}</h1>
                        <p className="text-muted mx-auto">{t("benefits.joinTeam")}</p>
                    </Col>
                </Row>
                <Row>
                    {benefits.map((benefit, index) => (
                        <Col
                            lg={6}
                            key={index.toString()}
                            data-aos="fade-up"
                            data-aos-duration={(index + (3 + index)) * 100}
                        >
                            <div className="d-flex align-items-top pe-sm-5 mt-lg-5 mt-4">
                                <span className="bg-soft-info avatar avatar-md rounded icon icon-with-bg icon-sm text-primary me-4 flex-shrink-0">
                                    <FeatherIcon icon={benefit.icon} className="icon-dual-info" />
                                </span>
                                <div className="flex-grow-1">
                                    <h5 className="mt-0">{t(benefit.title)}</h5>
                                    <p className="text-muted mb-0">{t(benefit.description)}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Benefits;
