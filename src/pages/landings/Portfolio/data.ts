// types
import { Project, Service } from './types';
import i18n from 'i18next';


import ProjectImg1 from 'assets/images/features/agency1.jpg';
import ProjectImg2 from 'assets/images/features/agency2.jpg';
import ProjectImg3 from 'assets/images/features/agency3.jpg';


const services: Service[] = [
    
    {
        icon: 'code',
        title: 'services.website.title',
        description: 'services.website.description',
    },
    {
        icon: 'image',
        title: 'services.graphicDesign.title',
        description: 'services.graphicDesign.description',
    },
    {
        icon: 'video',
        title: 'services.videoEditor.title',
        description: 'services.videoEditor.description',
    },
];

const projects: Project[] = [
    {
        title: i18n.t('projects.project1.title'),
        description: i18n.t('projects.project1.description'),
        image: ProjectImg1,
    },
    {
        title: i18n.t('projects.project2.title'),
        description: i18n.t('projects.project2.description'),
        image: ProjectImg2,
    },
    {
        title: i18n.t('projects.project3.title'),
        description: i18n.t('projects.project3.description'),
        image: ProjectImg3,
    },
];


export { services, projects };
