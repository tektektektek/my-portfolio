import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FeatherIcon from 'feather-icons-react';
import { useTranslation } from 'react-i18next';

// components
import { FormInput } from 'components/form';

const ContactUs = () => {
    const { t } = useTranslation();

    // form validation schema
    const schemaResolver = yupResolver(
        yup.object().shape({
            fname: yup.string().required(t('contact.form.fnameRequired')),
            lname: yup.string().required(t('contact.form.lnameRequired')),
            email: yup.string().required(t('contact.form.emailRequired')).email(t('contact.form.emailInvalid')),
            message: yup.string().required(t('contact.form.messageRequired')),
        })
    );

    // form method
    const methods = useForm({ resolver: schemaResolver });
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = methods;

    // handle form submission
    const onSubmit = () => { };

    return (
        <section id='contact-me' className="section pb-lg-5 py-4 position-relative">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <Card className="shadow-none">
                            <Card.Body className="p-xl-5 p-0">
                                <h2 className="mb-2 mt-0 fw-medium mt-6">{t('contact.title')}</h2>
                                <p className="mb-5">
                                    {t('contact.description')}
                                </p>

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Row>
                                        <Col md={6}>
                                            <FormInput
                                                type="text"
                                                name="fname"
                                                label={t('contact.form.fname')}
                                                placeholder={t('contact.form.fnamePlaceholder')}
                                                containerClass={'mb-3'}
                                                register={register}
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                        <Col md={6}>
                                            <FormInput
                                                type="text"
                                                name="lname"
                                                label={t('contact.form.lname')}
                                                placeholder={t('contact.form.lnamePlaceholder')}
                                                containerClass={'mb-3'}
                                                register={register}
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                        <Col lg={12}>
                                            <FormInput
                                                type="email"
                                                name="email"
                                                label={t('contact.form.email')}
                                                placeholder={t('contact.form.emailPlaceholder')}
                                                containerClass={'mb-3'}
                                                register={register}
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                        <Col lg={12}>
                                            <FormInput
                                                type="textarea"
                                                name="message"
                                                label={t('contact.form.message')}
                                                placeholder={t('contact.form.messagePlaceholder')}
                                                rows={5}
                                                containerClass={'mb-3'}
                                                register={register}
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                        <Col lg="auto" className="mb-0">
                                            <Button type="submit" className="btn-info">
                                                {t('contact.form.sendButton')}
                                                <span className="icon icon-xs text-white ms-1">
                                                    <FeatherIcon icon="send" />
                                                </span>
                                            </Button>
                                        </Col>
                                    </Row>
                                </form>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={{ offset: 1, span: 5 }}>
                        <div style={{ height: '520px' }}>
                            <GoogleMapReact defaultZoom={12} defaultCenter={{ lat: 48.8566, lng: 2.3522 }} />
                        </div>
                    </Col>

                </Row>
                <Row className="mt-5 align-items-center">
                    <Col md={4}>
                        <div className="d-flex px-md-1 px-lg-5 mb-md-0 mb-3">
                            <span className="bg-soft-primary avatar avatar-sm rounded icon icon-with-bg icon-xs text-primary me-3 flex-shrink-0">
                                <FeatherIcon icon="mail" className="icon-dual-primary" />
                            </span>
                            <div className="flex-grow-1">
                                <h5 className="m-0 fw-medium">{t('contact.email')}</h5>
                                <Link to="mailto:mail@amoni.me" className="text-muted fw-normal h5 my-1">
                                    mail@amoni.me
                                </Link>
                            </div>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className="d-flex px-md-1 px-lg-5 mb-md-0 mb-3">
                            <span className="bg-soft-orange avatar avatar-sm rounded icon icon-with-bg icon-xs text-orange me-3 flex-shrink-0">
                                <FeatherIcon icon="phone-call" className="icon-dual-orange" />
                            </span>
                            <div className="flex-grow-1">
                                <h5 className="m-0 fw-medium">{t('contact.phone')}</h5>
                                <Link to="#" className="text-muted fw-normal h5 my-1">
                                    +33 7 69 54 98 85
                                </Link>
                            </div>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className="d-flex px-md-1 px-lg-5 mb-md-0 mb-3">
                            <span className="bg-soft-info avatar avatar-sm rounded icon icon-with-bg icon-xs text-info me-3 flex-shrink-0">
                                <FeatherIcon icon="map-pin" className="icon-dual-info" />
                            </span>
                            <div className="flex-grow-1">
                                <h5 className="m-0 fw-medium">{t('contact.address')}</h5>
                                <Link to="#" className="text-muted fw-normal h5 my-1">
                                    Paris
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactUs;
