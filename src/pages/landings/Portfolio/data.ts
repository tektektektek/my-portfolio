// types
import { Project, Service } from './types';

import ProjectImg1 from 'assets/images/features/agency1.jpg';
import ProjectImg2 from 'assets/images/features/agency2.jpg';

const services: Service[] = [
    {
        icon: 'code',
        title: 'Website',
        description: 'As an expert in web development, I design digital solutions that combine aesthetics and performance to catalyze the success of your business.',
    },
    {
        icon: 'image',
        title: 'Graphic Design',
        description: 'Endowed with supplementary skills in graphic design, I create striking visuals that enhance and complement my primary web development projects.',
    },
    {
        icon: 'video',
        title: 'Video Editor',
        description: 'While my core expertise lies in web development, I also possess skills in video editing, allowing me to produce enriching multimedia content.',
    },
];

const projects: Project[] = [
    {
        title: 'Project 1',
        description: 'Branding, Interaction, Website',
        image: ProjectImg1,
    },
    {
        title: 'Project 2',
        description: 'Branding, Website',
        image: ProjectImg2,
    },
    {
        title: 'Project 3',
        description: 'Branding, Interaction, Website',
        image: ProjectImg2,
    },
    {
        title: 'Project 4',
        description: 'Branding, Website',
        image: ProjectImg1,
    },
    {
        title: 'Project 5',
        description: 'Branding, Interaction, Website',
        image: ProjectImg2,
    },
    {
        title: 'Project 6',
        description: 'Branding, Website',
        image: ProjectImg1,
    },
];

export { services, projects };
