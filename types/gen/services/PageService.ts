/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PageListResponse } from '../models/PageListResponse';
import type { PageLocalizationRequest } from '../models/PageLocalizationRequest';
import type { PageLocalizationResponse } from '../models/PageLocalizationResponse';
import type { PageRequest } from '../models/PageRequest';
import type { PageResponse } from '../models/PageResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PageService {

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
     * @returns PageListResponse OK
     * @throws ApiError
     */
    public static getPages(
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
    ): CancelablePromise<PageListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/pages',
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
     * @returns PageResponse OK
     * @throws ApiError
     */
    public static postPages(
        requestBody: PageRequest,
    ): CancelablePromise<PageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/pages',
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
     * @returns PageResponse OK
     * @throws ApiError
     */
    public static getPagesId(
        id: number,
    ): CancelablePromise<PageResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/pages/{id}',
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
     * @returns PageResponse OK
     * @throws ApiError
     */
    public static putPagesId(
        id: number,
        requestBody: PageRequest,
    ): CancelablePromise<PageResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/pages/{id}',
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
    public static deletePagesId(
        id: number,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/pages/{id}',
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
     * @returns PageLocalizationResponse OK
     * @throws ApiError
     */
    public static postPagesIdLocalizations(
        id: number,
        requestBody: PageLocalizationRequest,
    ): CancelablePromise<PageLocalizationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/pages/{id}/localizations',
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

}
