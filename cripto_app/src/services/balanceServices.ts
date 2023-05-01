import { AxiosError } from "axios";
import { BaseResponse, GetInvestmentBalanceResponse } from "../types";
import { axiosInstance } from ".";

export const getInvestmentBalanceService = async (amount: number) => {
  try {
    const response = await axiosInstance.get<
      BaseResponse<GetInvestmentBalanceResponse>
    >(`balance?amount=${amount}`);
    return response.data;
  } catch (error) {
    const err = error as AxiosError<BaseResponse<GetInvestmentBalanceResponse>>;
    return err.response!.data;
  }
};
