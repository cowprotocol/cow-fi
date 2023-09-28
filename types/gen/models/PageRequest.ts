/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MetaMetadataComponent } from './MetaMetadataComponent';
import type { SectionsBottomActionsComponent } from './SectionsBottomActionsComponent';
import type { SectionsFeatureColumnsGroupComponent } from './SectionsFeatureColumnsGroupComponent';
import type { SectionsFeatureRowsGroupComponent } from './SectionsFeatureRowsGroupComponent';
import type { SectionsFeaturesComponent } from './SectionsFeaturesComponent';
import type { SectionsHeadingComponent } from './SectionsHeadingComponent';
import type { SectionsHeroComponent } from './SectionsHeroComponent';
import type { SectionsLargeVideoComponent } from './SectionsLargeVideoComponent';
import type { SectionsLeadFormComponent } from './SectionsLeadFormComponent';
import type { SectionsPricingComponent } from './SectionsPricingComponent';
import type { SectionsRichTextComponent } from './SectionsRichTextComponent';
import type { SectionsTestimonialsGroupComponent } from './SectionsTestimonialsGroupComponent';

export type PageRequest = {
    data: {
        shortName?: string;
        metadata: MetaMetadataComponent;
        contentSections?: Array<(SectionsHeroComponent | SectionsBottomActionsComponent | SectionsFeatureColumnsGroupComponent | SectionsFeatureRowsGroupComponent | SectionsTestimonialsGroupComponent | SectionsLargeVideoComponent | SectionsRichTextComponent | SectionsPricingComponent | SectionsLeadFormComponent | SectionsFeaturesComponent | SectionsHeadingComponent)>;
        slug?: string;
        heading?: string;
        description?: string;
        locale?: string;
    };
};

