import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

const Hero = () => {
    return (
        <section id='about-me' className="hero-4 py-5 bg-gradient2">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={7} className="text-center">
                        <h1 className="hero-title">Gain Access to My Professional Journey</h1>
                        <p className="fs-17 text-muted pt-3">
                            I invite you to explore my curriculum vitae, a narrative of ceaseless dedication in the realm of front-end development and data analysis. You will find therein a distinguished portfolio of service offerings, from responsive web design to cutting-edge innovations in Cosmos SDK and Web3 technologies.
                        </p>
                        <div className="text-center mt-5 pb-md-0">
                            <a href="../public//DOGBE-CV.pdf" download="DOGBE-CV.pdf" className="btn btn-info">
                                <FeatherIcon icon="download" className="icon-xxs me-2" />
                                Download CV
                            </a>
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
