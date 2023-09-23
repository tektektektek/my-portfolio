import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';

type BackToTopProps = {
    variant: string;
};

const BackToTop = ({ variant }: BackToTopProps) => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        showButton ? (
            <Link
                className={classNames('btn', 'btn-soft-' + variant, 'shadow-none', 'btn-icon', 'btn-back-to-top')}
                id="btn-back-to-top"
                to="#"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <FeatherIcon icon="arrow-up" className="icon-xxs" />
            </Link>
        ) : null
    );
};

BackToTop.defaultProps = {
    variant: 'primary',
};

export default BackToTop;
