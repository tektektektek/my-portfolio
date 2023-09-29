import { Benefit } from './types';
import i18n from 'i18next';

const benefits: Benefit[] = [
    {
        icon: 'layout',
        title: i18n.t('benefits.provenExpertise.title'),
        description: i18n.t('benefits.provenExpertise.description'),
    },
    {
        icon: 'check-circle',
        title: i18n.t('benefits.industrySpecificAdaptability.title'),
        description: i18n.t('benefits.industrySpecificAdaptability.description'),
    },
    {
        icon: 'shield',
        title: i18n.t('benefits.unparalleledSecurity.title'),
        description: i18n.t('benefits.unparalleledSecurity.description'),
    },
    {
        icon: 'users',
        title: i18n.t('benefits.advancedSEO.title'),
        description: i18n.t('benefits.advancedSEO.description'),
    },
    {
        icon: 'phone-call',
        title: i18n.t('benefits.dedicatedSupport.title'),
        description: i18n.t('benefits.dedicatedSupport.description'),
    },
    {
        icon: 'thumbs-up',
        title: i18n.t('benefits.sustainableInvestment.title'),
        description: i18n.t('benefits.sustainableInvestment.description'),
    },
];

export { benefits };
