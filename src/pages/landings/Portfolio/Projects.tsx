import { Link } from 'react-router-dom';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { useTranslation } from 'react-i18next';


// types
import { Project} from './types';

// Initialize Swiper plugins
SwiperCore.use([Pagination, Autoplay, Navigation]);

type ProjectsProps = {
    projects: Project[];
};

const Projects = ({ projects }: ProjectsProps) => {
    const { t } = useTranslation();
    return (
        <section id='portfolio-grid' className="pt-6 pb-3 position-relative">
            <Container>
                <Tab.Container defaultActiveKey="pills-design-tab">
                    <Row className="justify-content-center">
                        <Col className="text-start">
                            <h1 className="display-5 fw-medium">{t('portfolioProjects.title')}</h1>
                            <p className="text-muted mx-auto pt-3">{t('portfolioProjects.text')}</p>
                        </Col>
                        {/* <Col xs="auto">
                            <Nav
                                as="ul"
                                variant="pills"
                                className="pe-0 me-0 align-items-center"
                                id="pills-tab"
                                role="tablist"
                            >
                                <Nav.Item as="li" role="presentation">
                                    <Nav.Link
                                        className="cursor-pointer"
                                        id="pills-design-tab"
                                        eventKey="pills-design-tab"
                                    >
                                        Web Development
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col> */}
                    </Row>
                    <Row className="mt-3">
                        <Col lg={12}>
                            <Tab.Content className="mt-2" id="pills-tabContent">
                                <Tab.Pane eventKey="pills-design-tab">
                                    <Swiper
                                        spaceBetween={50}
                                        slidesPerView={1}
                                        autoplay={{
                                            delay: 10500,
                                            disableOnInteraction: false,
                                          }}
                                        pagination={{ dynamicBullets: true }}
                                        loop={true}  // Ajoutez cette ligne
                                        navigation={true}
                                        modules={[Autoplay, Pagination, Navigation]}
                                        className="mySwiper"

                                    >
                                        {(projects || []).map((project, index) => (
                                            <SwiperSlide key={index.toString()}>
                                                <div className="bg-light ps-5 pt-5 mb-4 mb-sm-5 rounded feature-item">
                                                    <Row className="align-items-center">
                                                        <Col xs="auto">
                                                            <h3 className="text-dark mt-0">{project.title}</h3>
                                                        </Col>
                                                        <Col className="text-end pe-5">{project.description}</Col>
                                                    </Row>
                                                    <Row className="mt-4">
                                                        <Col>
                                                            <img
                                                                src={project.image}
                                                                alt="ProjectImg1"
                                                                className="img-fluid shadow rounded"
                                                            />
                                                        </Col>
                                                    </Row>
                                                    <div className="overlay">
                                                        <Link
                                                            to="#"
                                                            className="btn btn-info btn-sm btn-view shadow-lg"
                                                        >
                                                            {t('portfolioProjects.viewButton')}
                                                            <FeatherIcon
                                                                icon="arrow-right"
                                                                className="icon-xs ms-2"
                                                            />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </section>
    );
};

export default Projects;
