import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

// types
import { PlanItem } from './types';

type PricingCardProps = {
    plans: Array<PlanItem>;
    containerClass?: string;
    hasAnimation?: boolean;
};

const PricingCards1: React.FC<PricingCardProps> = ({ plans, containerClass, hasAnimation }) => {
    const { t } = useTranslation();

    return (
        <Row className={containerClass}>
            {plans.map((plan, index) => (
                <Col lg={4} key={index.toString()}>
                    <Card
                        className="border position-relative hoverable overflow-hidden"
                        {...(hasAnimation && {
                            'data-aos': 'fade-up',
                            'data-aos-duration': (index + (7 + index)) * 100,
                        })}
                    >
                        <Card.Body className="text-center">
                            {plan.isPopular && (
                                <span className="ribbon2 bg-success text-white shadow">{t("pricing.popularLabel")}</span>
                            )}
                            <h4 className="my-0 text-info">{t(plan.name)}</h4>
                            <h1 className="mb-0">
                                <span className="fw-normal text-muted fs-13 align-middle">{t(plan.duration)} <br /></span>
                                <span className="fw-bolder display-5">{plan.price}</span>
                                <span className="fw-normal text-muted fs-13 align-top">€</span>
                                {plan.duration2 && <span className="fw-normal text-muted fs-13 align-middle">{t(plan.duration2)} <br /></span>}
                            </h1>
                            <ul className="list-unstyled border-top py-4 mt-4 text-start">
                                {plan.features.map((feature, index) => (
                                    <li key={index.toString()} className="py-2 d-flex align-items-center">
                                        {feature && (
                                            <>
                                                <FeatherIcon icon="check" className="icon-xs text-success align-middle me-2" />
                                                {t(feature)}
                                            </>
                                        )}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                to="#"
                                className={classNames(
                                    'btn',
                                    plan.isRecommended ? 'btn-info' : 'btn-soft-info',
                                    'd-block'
                                )}
                            >
                                {t("pricing.contactMeLabel")}
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default PricingCards1;
