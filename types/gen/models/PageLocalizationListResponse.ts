/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PageListResponseDataItemLocalized } from './PageListResponseDataItemLocalized';

export type PageLocalizationListResponse = {
    data?: Array<PageListResponseDataItemLocalized>;
    meta?: {
        pagination?: {
            page?: number;
            pageSize?: number;
            pageCount?: number;
            total?: number;
        };
    };
};

