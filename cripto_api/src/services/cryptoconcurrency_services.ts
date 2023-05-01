import axios from "axios";
import {
  AllowedCryptos,
  BaseResponse,
  CRYPTOS,
  ConcurrencyResponse,
} from "../types";

export const getCryptoConcurrencyDataService = async () => {
  try {
    //traemos la lista de información de las cryptos
    const response = await axios.get<ConcurrencyResponse>(
      "https://data.messari.io/api/v2/assets?fields=id,name,symbol,metrics/market_data/price_usd,metrics/market_data/percent_change_usd_last_1_hour,metrics/market_data/percent_change_usd_last_24_hours,metrics/market_data/real_volume_last_24_hours,metrics/marketcap/current_marketcap_usd,metrics/roi_data/percent_change_last_1_week,metrics/roi_data/percent_change_last_1_month,metrics/roi_data/percent_change_year_to_date",
      { headers: { "x-messari-api-key": process.env.MESSARI_KEY } }
    );
    //creando cuerpo de la respuesta
    const res: BaseResponse<ConcurrencyResponse> = {
      success: true,
      data: {
        status: response.data.status,
        // filtrando las cryptos de interes y agregando la imagen desde public
        data: response.data.data
          .filter((crypto) => CRYPTOS.includes(crypto.symbol as AllowedCryptos))
          .map((crypto) => ({
            ...crypto,
            img: `http://localhost:8001/${crypto.symbol}.png`,
          })),
      },
    };
    return res;
  } catch (error) {
    console.log({ error });
    const err = error as Error;
    const response: BaseResponse<ConcurrencyResponse> = {
      success: false,
      error: err.message,
    };
    return response;
  }
};
