export type BaseResponse<T = any> = {
  success: boolean;
  data?: T;
  error?: string;
};
export * from "./storeTypes";
export * from "./responses";
