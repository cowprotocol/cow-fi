/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductFeatureListResponseDataItem } from './ProductFeatureListResponseDataItem';

export type ProductFeatureListResponse = {
    data?: Array<ProductFeatureListResponseDataItem>;
    meta?: {
        pagination?: {
            page?: number;
            pageSize?: number;
            pageCount?: number;
            total?: number;
        };
    };
};

