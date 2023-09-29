import { PlanItem } from 'components/pricing';

export const plans: PlanItem[] = [
    {
        id: 1,
        name: "pricing.starterWebsiteName",
        duration: "pricing.startingFrom",
        price: '1200',
        features: [
            "pricing.feature1",
            "pricing.feature2",
            "pricing.feature3",
            "pricing.feature4",
            "pricing.feature5",
        ],
        isRecommended: false,
    },
    {
        id: 2,
        name: "pricing.basicWebsiteName",
        duration: "pricing.startingFrom",
        price: '320',
        duration2: "pricing.feature17",
        features: [
            "pricing.feature6",
            "pricing.feature7",
            "pricing.feature8",
            "pricing.feature9",
            "pricing.feature10",
        ],
        isRecommended: true,
        isPopular: true,
    },
    {
        id: 3,
        name: "pricing.premiumWebsiteName",
        duration: "pricing.startingFrom",
        price: '500',
        duration2: "pricing.feature17",
        features: [
            "pricing.feature11",
            "pricing.feature12",
            "pricing.feature14",
            "pricing.feature7",
            "pricing.feature15",
        ],
        isRecommended: false,
    },
];
