/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GlobalLocalizationRequest } from '../models/GlobalLocalizationRequest';
import type { GlobalLocalizationResponse } from '../models/GlobalLocalizationResponse';
import type { GlobalRequest } from '../models/GlobalRequest';
import type { GlobalResponse } from '../models/GlobalResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GlobalService {

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
     * @returns GlobalResponse OK
     * @throws ApiError
     */
    public static getGlobal(
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
    ): CancelablePromise<GlobalResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/global',
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
     * @returns GlobalResponse OK
     * @throws ApiError
     */
    public static putGlobal(
        requestBody: GlobalRequest,
    ): CancelablePromise<GlobalResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/global',
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
     * @returns number OK
     * @throws ApiError
     */
    public static deleteGlobal(): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/global',
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
     * @returns GlobalLocalizationResponse OK
     * @throws ApiError
     */
    public static postGlobalLocalizations(
        requestBody: GlobalLocalizationRequest,
    ): CancelablePromise<GlobalLocalizationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/global/localizations',
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

}
