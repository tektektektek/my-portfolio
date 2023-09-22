// types
import { PlanItem } from 'components/pricing';

const plans: PlanItem[] = [
    {
        id: 1,
        name: 'Starter Website',
        duration: 'starting from',
        price: '1500',
        features: [
            'Budget Optimization',
            'Online Presence',
            'Responsive Design',
            'Quick Implementation',
            'Email-based Technical Support',
        ],
        isRecommended: false,
    },
    {
        id: 2,
        name: 'Professional Website',
        duration: 'starting from',
        price: '3000',
        features: [
            'Customized Solutions',
            'Advanced SEO',
            'Performance Analytics',
            'Secure Authentication',
            'Priority Technical Support',
        ],
        isRecommended: true,
        isPopular: true,
    },
    {
        id: 3,
        name: 'Enterprise Website',
        duration: 'starting from',
        price: '5000',
        features: [
            'Scalable Architecture',
            'Enhanced Security',
            'API Integrations',
            'Advanced SEO',
            'And much more',
        ],
        isRecommended: false,
    },
];


export { plans };
