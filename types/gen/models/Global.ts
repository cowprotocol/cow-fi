/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ElementsNotificationBannerComponent } from './ElementsNotificationBannerComponent';
import type { LayoutFooterComponent } from './LayoutFooterComponent';
import type { LayoutNavbarComponent } from './LayoutNavbarComponent';
import type { MetaMetadataComponent } from './MetaMetadataComponent';

export type Global = {
    metadata?: MetaMetadataComponent;
    favicon: {
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
                        attributes?: {
                            name?: string;
                            pathId?: number;
                            parent?: {
                                data?: {
                                    id?: number;
                                    attributes?: any;
                                };
                            };
                            children?: {
                                data?: Array<{
                                    id?: number;
                                    attributes?: any;
                                }>;
                            };
                            files?: {
                                data?: Array<{
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
                                                attributes?: {
                                                    firstname?: string;
                                                    lastname?: string;
                                                    username?: string;
                                                    email?: string;
                                                    resetPasswordToken?: string;
                                                    registrationToken?: string;
                                                    isActive?: boolean;
                                                    roles?: {
                                                        data?: Array<{
                                                            id?: number;
                                                            attributes?: {
                                                                name?: string;
                                                                code?: string;
                                                                description?: string;
                                                                users?: {
                                                                    data?: Array<{
                                                                        id?: number;
                                                                        attributes?: any;
                                                                    }>;
                                                                };
                                                                permissions?: {
                                                                    data?: Array<{
                                                                        id?: number;
                                                                        attributes?: {
                                                                            action?: string;
                                                                            subject?: string;
                                                                            properties?: any;
                                                                            conditions?: any;
                                                                            role?: {
                                                                                data?: {
                                                                                    id?: number;
                                                                                    attributes?: any;
                                                                                };
                                                                            };
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
                                                                    }>;
                                                                };
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
                                                        }>;
                                                    };
                                                    blocked?: boolean;
                                                    preferedLanguage?: string;
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
                                        updatedBy?: {
                                            data?: {
                                                id?: number;
                                                attributes?: any;
                                            };
                                        };
                                    };
                                }>;
                            };
                            path?: string;
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
    notificationBanner?: ElementsNotificationBannerComponent;
    navbar?: LayoutNavbarComponent;
    footer?: LayoutFooterComponent;
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
    localizations?: {
        data?: Array<Global>;
    };
    locale?: string;
};

