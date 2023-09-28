/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UploadFile } from '../models/UploadFile';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UploadFileService {

    /**
     * Upload files
     * @param formData Upload files
     * @returns UploadFile response
     * @throws ApiError
     */
    public static postUpload(
        formData: {
            /**
             * The folder where the file(s) will be uploaded to (only supported on strapi-provider-upload-aws-s3).
             */
            path?: string;
            /**
             * The ID of the entry which the file(s) will be linked to
             */
            refId?: string;
            /**
             * The unique ID (uid) of the model which the file(s) will be linked to (api::restaurant.restaurant).
             */
            ref?: string;
            /**
             * The field of the entry which the file(s) will be precisely linked to.
             */
            field?: string;
            files: Array<Blob>;
        },
    ): CancelablePromise<Array<UploadFile>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/upload',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Upload file information
     * @param id File id
     * @param formData Upload files
     * @returns UploadFile response
     * @throws ApiError
     */
    public static postUpload?id=(
        id: string,
        formData: {
            fileInfo?: {
                name?: string;
                alternativeText?: string;
                caption?: string;
            };
            files?: Blob;
        },
    ): CancelablePromise<Array<UploadFile>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/upload?id={id}',
            query: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @returns UploadFile Get a list of files
     * @throws ApiError
     */
    public static getUploadFiles(): CancelablePromise<Array<UploadFile>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/upload/files',
        });
    }

    /**
     * @param id
     * @returns UploadFile Get a specific file
     * @throws ApiError
     */
    public static getUploadFiles1(
        id: string,
    ): CancelablePromise<UploadFile> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/upload/files/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @returns UploadFile Delete a file
     * @throws ApiError
     */
    public static deleteUploadFiles(
        id: string,
    ): CancelablePromise<UploadFile> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/upload/files/{id}',
            path: {
                'id': id,
            },
        });
    }

}
