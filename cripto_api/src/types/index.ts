export type BaseResponse<T = any> = {
  success: boolean;
  data?: T;
  error?: string;
};
export * from "./bodies";
export * from "./data";
export * from "./responses";
