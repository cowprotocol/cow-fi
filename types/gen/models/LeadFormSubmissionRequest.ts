/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LeadFormSubmissionRequest = {
    data: {
        email?: string;
        status?: LeadFormSubmissionRequest.status;
    };
};

export namespace LeadFormSubmissionRequest {

    export enum status {
        SEEN = 'seen',
        CONTACTED = 'contacted',
        IGNORED = 'ignored',
    }


}

