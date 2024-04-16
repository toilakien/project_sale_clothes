export interface BaseResponse<T = any> {
    id: number;
    attributes: T;
}
