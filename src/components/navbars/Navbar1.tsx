import { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import classNames from 'classnames';

// hooks
import { useUser } from '../../hooks/auth';

// components
import Menu from './Menu';

// images
import logo from '../../assets/images/logo.png';
import logoLight from '../../assets/images/logo-light.png';

type Navbar1Props = {
    isSticky?: boolean;
    navClass?: string;
    buttonClass?: string;
    fixedWidth?: boolean;
    hideSearch?: boolean;
};

const Navbar1 = ({ isSticky, navClass, buttonClass, fixedWidth, hideSearch }: Navbar1Props) => {
    const [loggedInUser] = useUser();
    const [navbarSticky, setNavbarSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (document.body.scrollTop >= 5 || document.documentElement.scrollTop >= 5) {
                setNavbarSticky(true);
            } else {
                setNavbarSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header>
            <div style={{ height: '70px' }}></div> {/* Conteneur "fantôme" pour prendre l'espace de la navbar */}
            <Navbar
                id={isSticky ? 'sticky' : ''}
                collapseOnSelect
                expand="lg"
                className={classNames('topnav-menu navbar-sticky', { 'navbar-shrink': navbarSticky, 'navbar-bg-white': navbarSticky }, navClass)}
                >
                <Container fluid={!fixedWidth}>
                    <Navbar.Brand href="/" className="logo">
                        <img src={logo} height="30" className="align-top logo-dark" alt="" />
                        <img src={logoLight} height="30" className="align-top logo-light" alt="" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="topnav-menu-content">
                        {!hideSearch && (
                            <Nav className="align-items-lg-center d-flex me-auto">
                                <Nav.Item as="li">
                                    <form id="search" className="form-inline d-none d-sm-flex">
                                        <div className="form-control-with-hint ms-lg-2 ms-xl-4">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="search-input"
                                                placeholder="What are you looking for?"
                                            />
                                            <span className="form-control-feedback uil uil-search fs-16"></span>
                                        </div>
                                    </form>
                                </Nav.Item>
                            </Nav>
                        )}
                        <Menu
                            showDownload
                            // loggedInUser={loggedInUser}
                            navClass="ms-auto"
                            buttonClass={buttonClass ? buttonClass : 'btn-primary'}
                        />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Navbar1;
