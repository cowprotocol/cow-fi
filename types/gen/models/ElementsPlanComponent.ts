/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ElementsPlanComponent = {
    id?: number;
    name?: string;
    description?: string;
    isRecommended?: boolean;
    price?: number;
    pricePeriod?: string;
    product_features?: {
        data?: Array<{
            id?: number;
            attributes?: {
                name?: string;
                createdAt?: string;
                updatedAt?: string;
                publishedAt?: string;
                createdBy?: {
                    data?: {
                        id?: number;
                        attributes?: any;
                    };
                };
                updatedBy?: {
                    data?: {
                        id?: number;
                        attributes?: any;
                    };
                };
            };
        }>;
    };
};

