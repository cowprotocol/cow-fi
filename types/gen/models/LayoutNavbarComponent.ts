/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LayoutNavbarComponent = {
    id?: number;
    links?: Array<{
        id?: number;
        url?: string;
        newTab?: boolean;
        text?: string;
    }>;
    button?: {
        id?: number;
        url?: string;
        newTab?: boolean;
        text?: string;
        type?: LayoutNavbarComponent.type;
    };
    navbarLogo?: {
        id?: number;
        logoImg?: {
            data?: {
                id?: number;
                attributes?: {
                    name?: string;
                    alternativeText?: string;
                    caption?: string;
                    width?: number;
                    height?: number;
                    formats?: any;
                    hash?: string;
                    ext?: string;
                    mime?: string;
                    size?: number;
                    url?: string;
                    previewUrl?: string;
                    provider?: string;
                    provider_metadata?: any;
                    related?: {
                        data?: Array<{
                            id?: number;
                            attributes?: any;
                        }>;
                    };
                    folder?: {
                        data?: {
                            id?: number;
                            attributes?: any;
                        };
                    };
                    folderPath?: string;
                    createdAt?: string;
                    updatedAt?: string;
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
            };
        };
        logoText?: string;
    };
};

export namespace LayoutNavbarComponent {

    export enum type {
        PRIMARY = 'primary',
        SECONDARY = 'secondary',
    }


}

