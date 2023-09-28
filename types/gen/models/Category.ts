/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Category = {
    name?: string;
    slug?: string;
    articles?: {
        data?: Array<{
            id?: number;
            attributes?: {
                title?: string;
                description?: string;
                slug?: string;
                cover?: {
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
                category?: {
                    data?: {
                        id?: number;
                        attributes?: {
                            name?: string;
                            slug?: string;
                            articles?: {
                                data?: Array<{
                                    id?: number;
                                    attributes?: any;
                                }>;
                            };
                            description?: string;
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
                blocks?: Array<({
                    id?: number;
                    __component?: string;
                    file?: {
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
                } | {
                    id?: number;
                    __component?: string;
                    title?: string;
                    body?: string;
                    author?: string;
                } | {
                    id?: number;
                    __component?: string;
                    body?: string;
                } | {
                    id?: number;
                    __component?: string;
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
                } | {
                    id?: number;
                    __component?: string;
                    url?: string;
                })>;
                authorsBio?: {
                    data?: {
                        id?: number;
                        attributes?: {
                            name?: string;
                            avatar?: {
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
                            email?: string;
                            articles?: {
                                data?: Array<{
                                    id?: number;
                                    attributes?: any;
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
                    };
                };
                seo?: {
                    id?: number;
                    metaTitle?: string;
                    metaDescription?: string;
                    shareImage?: {
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
                };
                createdAt?: string;
                updatedAt?: string;
                publishedAt?: string;
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
    description?: string;
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

