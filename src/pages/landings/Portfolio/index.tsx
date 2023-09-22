// components
import { Navbar1 } from 'components/navbars';
import { Hero3 } from 'components/heros';
import BackToTop from 'components/BackToTop';
import PricingPlans from '../../other/Pricing/PricingPlans';
import Benefits from '../../other/Career/Benefits';


import Services from './Services';
import Projects from './Projects';
import Hero from '../../other/portfolio/PortfolioGrid/Hero';
import Testimonials from './Testimonials';
import ContactUs from '../../../pages/other/Contact/ContactUs';
import Footer from './Footer';


// dummy data
import { projects, services } from './data';
import { plans } from '../../other/Pricing/data';
import { benefits} from '../../other/Career/data';

const Portfolio = () => {
    return (
        <>
            {/* header and hero */}
            <div className="header-6">
                <Navbar1 navClass="navbar-light" fixedWidth hideSearch buttonClass="btn-outline-secondary btn-sm" />
                <Hero3 />
            </div>
            {/* services */}
            <Services services={services} />

            <PricingPlans plans={plans} />

            {/* benefits */}
            <Benefits benefits={benefits} />
            
            <div>
                <Hero />
            </div>

            {/* projects */}
            <Projects projects={projects} />

            {/* testimonials */}
            <Testimonials />

            {/* contact us */}
            <ContactUs />

            {/* footer*/}
            <Footer />

            <BackToTop variant="danger" />
        </>
    );
};

export default Portfolio;
