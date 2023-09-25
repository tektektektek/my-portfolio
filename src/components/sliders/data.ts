// types
import { Slide } from './types';

// images
import Avatar1 from '../../assets/images/avatars/avis-1.jpg';
import Avatar2 from '../../assets/images/avatars/avis-2.png';
import Avatar3 from '../../assets/images/avatars/avis-3.png';
import Amazon from '../../assets/images/brands/amazon.svg';
import Google from '../../assets/images/brands/google.svg';


const slides: Slide[] = [
    {
        statement:
            ' Working with Amoni has been an exceptional experience. His technical acumen, swift problem-solving abilities, and collaborative approach have been instrumental in the successful realization of my project.',
        customer: {
            avatar: Avatar1,
            name: 'Ahmadou GUEYE',
            designation: 'SEO BambaWaves',
        },
        // logo: Amazon,
    },
    {
        statement:
            "Collaborating with Amoni was nothing short of genuinely transformative. His unparalleled communication skills and empathetic understanding of client needs not only met but indeed exceeded our project's ambitious objectives.",
        customer: {
            avatar: Avatar2,
            name: 'Ilhan GHERMI',
            designation: 'SEO IntegralForma ',
        },
        // logo: Google,
    },
    {
        statement:
            'Engaging with Amoni was a game-changer for our initiative. His strategic insight, coupled with his remarkable ability to forge meaningful relationships, has been pivotal in elevating our project to new heights.',
        customer: {
            avatar: Avatar3,
            name: 'Ibrahim TOURE',
            designation: 'SEO Fraichissime',
        },
        // logo: Google,
    },
];



export { slides };
