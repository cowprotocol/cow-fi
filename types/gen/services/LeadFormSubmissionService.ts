/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LeadFormSubmissionListResponse } from '../models/LeadFormSubmissionListResponse';
import type { LeadFormSubmissionRequest } from '../models/LeadFormSubmissionRequest';
import type { LeadFormSubmissionResponse } from '../models/LeadFormSubmissionResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LeadFormSubmissionService {

    /**
     * @param sort Sort by attributes ascending (asc) or descending (desc)
     * @param paginationWithCount Return page/pageSize (default: true)
     * @param paginationPage Page number (default: 0)
     * @param paginationPageSize Page size (default: 25)
     * @param paginationStart Offset value (default: 0)
     * @param paginationLimit Number of entities to return (default: 25)
     * @param fields Fields to return (ex: title,author)
     * @param populate Relations to return
     * @param filters Filters to apply
     * @param locale Locale to apply
     * @returns LeadFormSubmissionListResponse OK
     * @throws ApiError
     */
    public static getLeadFormSubmissions(
        sort?: string,
        paginationWithCount?: boolean,
        paginationPage?: number,
        paginationPageSize?: number,
        paginationStart?: number,
        paginationLimit?: number,
        fields?: string,
        populate?: string,
        filters?: Record<string, any>,
        locale?: string,
    ): CancelablePromise<LeadFormSubmissionListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lead-form-submissions',
            query: {
                'sort': sort,
                'pagination[withCount]': paginationWithCount,
                'pagination[page]': paginationPage,
                'pagination[pageSize]': paginationPageSize,
                'pagination[start]': paginationStart,
                'pagination[limit]': paginationLimit,
                'fields': fields,
                'populate': populate,
                'filters': filters,
                'locale': locale,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param requestBody
     * @returns LeadFormSubmissionResponse OK
     * @throws ApiError
     */
    public static postLeadFormSubmissions(
        requestBody: LeadFormSubmissionRequest,
    ): CancelablePromise<LeadFormSubmissionResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/lead-form-submissions',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param id
     * @returns LeadFormSubmissionResponse OK
     * @throws ApiError
     */
    public static getLeadFormSubmissionsId(
        id: number,
    ): CancelablePromise<LeadFormSubmissionResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lead-form-submissions/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns LeadFormSubmissionResponse OK
     * @throws ApiError
     */
    public static putLeadFormSubmissionsId(
        id: number,
        requestBody: LeadFormSubmissionRequest,
    ): CancelablePromise<LeadFormSubmissionResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/lead-form-submissions/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param id
     * @returns number OK
     * @throws ApiError
     */
    public static deleteLeadFormSubmissionsId(
        id: number,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/lead-form-submissions/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }

}
