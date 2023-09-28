/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductFeatureListResponse } from '../models/ProductFeatureListResponse';
import type { ProductFeatureRequest } from '../models/ProductFeatureRequest';
import type { ProductFeatureResponse } from '../models/ProductFeatureResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProductFeatureService {

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
     * @returns ProductFeatureListResponse OK
     * @throws ApiError
     */
    public static getProductFeatures(
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
    ): CancelablePromise<ProductFeatureListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/product-features',
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
     * @returns ProductFeatureResponse OK
     * @throws ApiError
     */
    public static postProductFeatures(
        requestBody: ProductFeatureRequest,
    ): CancelablePromise<ProductFeatureResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/product-features',
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
     * @returns ProductFeatureResponse OK
     * @throws ApiError
     */
    public static getProductFeaturesId(
        id: number,
    ): CancelablePromise<ProductFeatureResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/product-features/{id}',
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
     * @returns ProductFeatureResponse OK
     * @throws ApiError
     */
    public static putProductFeaturesId(
        id: number,
        requestBody: ProductFeatureRequest,
    ): CancelablePromise<ProductFeatureResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/product-features/{id}',
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
    public static deleteProductFeaturesId(
        id: number,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/product-features/{id}',
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
