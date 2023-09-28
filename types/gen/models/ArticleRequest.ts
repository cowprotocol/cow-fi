/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SharedMediaComponent } from './SharedMediaComponent';
import type { SharedQuoteComponent } from './SharedQuoteComponent';
import type { SharedRichTextComponent } from './SharedRichTextComponent';
import type { SharedSeoComponent } from './SharedSeoComponent';
import type { SharedSliderComponent } from './SharedSliderComponent';
import type { SharedVideoEmbedComponent } from './SharedVideoEmbedComponent';

export type ArticleRequest = {
    data: {
        title?: string;
        description: string;
        slug?: string;
        cover?: (number | string);
        category?: (number | string);
        blocks?: Array<(SharedMediaComponent | SharedQuoteComponent | SharedRichTextComponent | SharedSliderComponent | SharedVideoEmbedComponent)>;
        authorsBio?: (number | string);
        seo?: SharedSeoComponent;
    };
};

