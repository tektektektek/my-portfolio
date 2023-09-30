// types
import { Project, Service } from './types';


import ProjectImg1 from 'assets/images/features/agency1.jpg';
import ProjectImg2 from 'assets/images/features/agency2.jpg';
import ProjectImg3 from 'assets/images/features/agency3.jpg';
import ProjectImg4 from 'assets/images/features/agency4.jpg';



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
        title: 'projects.project1.title',
        description: 'projects.project1.description',
        image: ProjectImg1,
    },
    {
        title: 'projects.project2.title',
        description: 'projects.project2.description',
        image: ProjectImg2,
    },
    {
        title: 'projects.project3.title',
        description: 'projects.project3.description',
        image: ProjectImg3,
    },
    {
        title: 'projects.project4.title',
        description: 'projects.project4.description',
        image: ProjectImg4,
    },
];


export { services, projects };
