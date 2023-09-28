/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ElementsNotificationBannerComponent = {
    id?: number;
    type?: ElementsNotificationBannerComponent.type;
    heading?: string;
    text?: string;
    show?: boolean;
    link?: {
        id?: number;
        url?: string;
        newTab?: boolean;
        text?: string;
    };
};

export namespace ElementsNotificationBannerComponent {

    export enum type {
        ALERT = 'alert',
        INFO = 'info',
        WARNING = 'warning',
    }


}

