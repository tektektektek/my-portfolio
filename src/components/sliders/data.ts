import { Slide } from './types';

import Avatar1 from '../../assets/images/avatars/avis-1.jpg';
import Avatar2 from '../../assets/images/avatars/avis-2.png';
import Avatar3 from '../../assets/images/avatars/avis-3.png';

const slides: Slide[] = [
    {
        statement: 'slides.slide1.statement',
        customer: {
            avatar: Avatar1,
            name: 'slides.slide1.customerName',
            designation: 'slides.slide1.designation',
        },
    },
    {
        statement: 'slides.slide2.statement',
        customer: {
            avatar: Avatar2,
            name: 'slides.slide2.customerName',
            designation: 'slides.slide2.designation',
        },
    },
    {
        statement: 'slides.slide3.statement',
        customer: {
            avatar: Avatar3,
            name: 'slides.slide3.customerName',
            designation: 'slides.slide3.designation',
        },
    },
];

export { slides };
