// types
import { PlanItem } from 'components/pricing';
import i18n from 'i18next';

const plans: PlanItem[] = [
    {
        id: 1,
        name: i18n.t("pricing.starterWebsiteName"),
        duration: i18n.t("pricing.startingFrom"),
        price: '1200',
        features: [
            i18n.t("pricing.feature1"),
            i18n.t("pricing.feature2"),
            i18n.t("pricing.feature3"),
            i18n.t("pricing.feature4"),
            i18n.t("pricing.feature5"),
        ],
        isRecommended: false,
    },
    {
        id: 2,
        name: i18n.t("pricing.basicWebsiteName"),
        duration: i18n.t("pricing.startingFrom") + ' ' + i18n.t("pricing.feature16"),
        price: '320',
        duration2:'/ ' + i18n.t("pricing.feature17"),
        features: [
            i18n.t("pricing.feature6"),
            i18n.t("pricing.feature7"),
            i18n.t("pricing.feature8"),
            i18n.t("pricing.feature9"),
            i18n.t("pricing.feature10"),
        ],
        isRecommended: true,
        isPopular: true,
    },
    {
        id: 3,
        name: i18n.t("pricing.premiumWebsiteName"),
        duration: i18n.t("pricing.startingFrom") + ' ' + i18n.t("pricing.feature16"),
        price: '500',
        duration2:'/ ' + i18n.t("pricing.feature17"),
        features: [
            i18n.t("pricing.feature11"),
            i18n.t("pricing.feature12"),
            i18n.t("pricing.feature14"),
            i18n.t("pricing.feature7"),
            i18n.t("pricing.feature15"),
        ],
        isRecommended: false,
    },
];

export { plans };
