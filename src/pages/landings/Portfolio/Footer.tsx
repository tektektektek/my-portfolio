import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className="section pt-4 pb-3 position-relative">
            <Container>
                <Row className="align-items-center border-top border-light pt-4">
                    <Col className="text-center">
                        <ul className="list-inline list-with-separator">
                            <li className="list-inline-item me-0">
                                <Link to="#pricing-section">Pricing</Link>
                            </li>
                            <li className="list-inline-item me-0">
                                <Link to="#about-me">About</Link>
                            </li>
                            <li className="list-inline-item me-0">
                                <Link to="#portfolio-grid">Portfolio</Link>
                            </li>
                            <li className="list-inline-item me-0">
                                <Link to="#">Contact</Link>
                            </li>
                        </ul>
                        <p className="mt-2">
                            {new Date().getFullYear()}© Amoni. All rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Footer;
