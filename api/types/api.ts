export interface APIResponse {
    status: {
        success: boolean;
        errors: unknown[];
    };
    data: unknown;
}
