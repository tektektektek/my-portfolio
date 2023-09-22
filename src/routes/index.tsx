import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

// components
import Root from './Root';

// lazy load all the views

// home
const Home = React.lazy(() => import('../pages/landings/Portfolio'));

// landings

const Portfolio = React.lazy(() => import('../pages/landings/Portfolio'));

// pages

const Contact = React.lazy(() => import('../pages/other/Contact'));
const Career = React.lazy(() => import('../pages/other/Career'));
const Pricing = React.lazy(() => import('../pages/other/Pricing'));

const PortfolioGrid = React.lazy(() => import('../pages/other/portfolio/PortfolioGrid'));


const loading = () => <div className=""></div>;

type LoadComponentProps = {
    component: React.LazyExoticComponent<() => JSX.Element>;
};

const LoadComponent = ({ component: Component }: LoadComponentProps) => (
    <Suspense fallback={loading()}>
        <Component />
    </Suspense>
);

const AllRoutes = () => {
    return useRoutes([
        {
            // root route
            path: '/',
            element: <Root />,
        },
        {
            // public routes
            path: '/',
            children: [

                {
                    path: 'home',
                    element: <LoadComponent component={Home} />,
                },
                {
                    path: 'landing',
                    children: [
                        { path: 'portfolio', element: <LoadComponent component={Portfolio} /> },
                    ],
                },
                {
                    path: 'pages',
                    children: [
                        
                        { path: 'contact', element: <LoadComponent component={Contact} /> },
                        { path: 'career', element: <LoadComponent component={Career} /> },
                        { path: 'pricing', element: <LoadComponent component={Pricing} /> },
                        {
                            path: 'portfolio',
                            children: [
                                { path: 'grid', element: <LoadComponent component={PortfolioGrid} /> },
            
                            ],
                        },
                    ]
                },
            ],
        },
    ]);
};

export default AllRoutes;
