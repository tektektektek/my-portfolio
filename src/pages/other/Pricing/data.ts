// types
import { PlanItem } from 'components/pricing';

const plans: PlanItem[] = [
    {
        id: 1,
        name: 'Starter Website',
        duration: 'starting from',
        price: '1200',
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
        price: '300',
        duration2:'/ day',
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
        price: '500',
        duration2:'/ day',
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
