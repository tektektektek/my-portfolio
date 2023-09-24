export type PlanItem = {
    id: number;
    name: string;
    price: string;
    duration: string;
    duration2?: string;
    features: Array<string>;
    isRecommended: boolean;
    isPopular?: boolean;
}
