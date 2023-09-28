/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ElementsNotificationBannerComponent } from './ElementsNotificationBannerComponent';
import type { LayoutFooterComponent } from './LayoutFooterComponent';
import type { LayoutNavbarComponent } from './LayoutNavbarComponent';
import type { MetaMetadataComponent } from './MetaMetadataComponent';

export type GlobalRequest = {
    data: {
        metadata?: MetaMetadataComponent;
        favicon: (number | string);
        notificationBanner?: ElementsNotificationBannerComponent;
        navbar?: LayoutNavbarComponent;
        footer?: LayoutFooterComponent;
        locale?: string;
    };
};

