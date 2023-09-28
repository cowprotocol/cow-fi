/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GlobalListResponseDataItemLocalized } from './GlobalListResponseDataItemLocalized';

export type GlobalLocalizationListResponse = {
    data?: Array<GlobalListResponseDataItemLocalized>;
    meta?: {
        pagination?: {
            page?: number;
            pageSize?: number;
            pageCount?: number;
            total?: number;
        };
    };
};

