import { Nav, Dropdown, Row, Col } from 'react-bootstrap';
import { NavLink, Link, useLocation } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';

type MenuProps = {
    showDownload?: boolean;
    navClass?: string;
    buttonClass?: string;
    loggedInUser?: {};
};

// Fonction pour gérer le défilement doux
const handleScrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
};

const Menu = ({ navClass, buttonClass, showDownload, loggedInUser }: MenuProps) => {
    let location = useLocation();

    const isActiveRoute = (path: string) => {
        if (location.pathname) {
            return location.pathname.includes(path);
        }
        return false;
    };

    return (
        <Nav as="ul" className={classNames('align-items-lg-center', navClass)}>
            <Nav.Item as="li">
                <NavLink to="/home" end className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}>
                    Home
                </NavLink>
            </Nav.Item>
            <Nav.Item as="li">
                <NavLink
                    to="#pricing-section"
                    end
                    className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}
                    onClick={() => handleScrollToElement('pricing-section')}
                >
                    Pricing
                </NavLink>
            </Nav.Item>
            <Nav.Item as="li">
            <NavLink
                    to="#about-me"
                    end
                    className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}
                    onClick={() => handleScrollToElement('about-me')}
                >
                    About Me
                </NavLink>
            </Nav.Item>
            <Nav.Item as="li">
            <NavLink
                    to="#portfolio-grid"
                    end
                    className={classNames('nav-link', ({ ...isActive }) => isActive && 'active')}
                    onClick={() => handleScrollToElement('portfolio-grid')}
                >
                    Portfolio Grid
                </NavLink>
            </Nav.Item>
            <Nav.Item as="li">
                <NavLink
                    to="/pages/Contact"
                    end
                    className={classNames(
                        'nav-link',
                        ({ ...isActive }) => isActive && 'active'
                    )}
                >
                    Contact
                </NavLink>
            </Nav.Item>
          
            {showDownload && (
                <>
                    <Nav.Item as="li">
                        <a href="../public/DOGBE-CV.pdf" download="DOGBE-CV.pdf" className={classNames('btn', buttonClass)}>
                            Download CV
                        </a>
                    </Nav.Item>

                </>
            )}
        </Nav>
    );
};

export default Menu;
