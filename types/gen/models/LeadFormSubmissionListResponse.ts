/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LeadFormSubmissionListResponseDataItem } from './LeadFormSubmissionListResponseDataItem';

export type LeadFormSubmissionListResponse = {
    data?: Array<LeadFormSubmissionListResponseDataItem>;
    meta?: {
        pagination?: {
            page?: number;
            pageSize?: number;
            pageCount?: number;
            total?: number;
        };
    };
};

