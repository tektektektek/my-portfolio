import { Badge, Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';



// components
import { PricingCards1, PlanItem } from 'components/pricing';

type PricingPlansProps = {
    plans: PlanItem[];
};

const PricingPlans = ({ plans }: PricingPlansProps) => {
    const { t } = useTranslation();
    return (
        <section id='pricing-section' className="section py-3 position-relative">
            <Container>
                <Row>
                    <Col className="text-center">
                        <Badge pill bg="" className="badge-soft-info px-2 py-1">
                        {t("pricing.plansBadge")}
                        </Badge>
                        <h1 className="display-5 fw-semibold">{t("pricing.plansTitle")}</h1>
                        <p className="text-muted mx-auto">
                        {t("pricing.plansDescriptionPart1")} {t("pricing.plansDescriptionPart2")} <span className="text-info fw-bold">{t("pricing.plansDescriptionPart3")}</span> 
                        </p>
                    </Col>
                </Row>
                <PricingCards1 plans={plans} containerClass="align-items-center mt-0 mt-sm-5" />
            </Container>
        </section>
    );
};

export default PricingPlans;
