import { ConcurrencyData } from "../types";

export const downloadFileUtil = (text: string, extension: string) => {
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = `crypto_concurrences.${extension}`;
  link.href = url;
  link.click();
  link.remove();
};

export const exportCsvUtil = (data: ConcurrencyData[]) => {
  let csvText =
    "ID,NAME,SYMBOL,IMAGE,PRICE (USD),CHANGE VS USD (1H),CHANGE VS USD (24H),REPORTED MARKETCAP,REAL VOLUME (24H),CHANGE VS USD (7D), CHANGE VS USD (30D),CHANGE VS USD (YTD)\r\n";
  for (const [index, concurrency] of data.entries())
    csvText += `${concurrency.id},${concurrency.name},${concurrency.symbol}, ${
      concurrency.img
    },${concurrency.metrics.market_data.price_usd},${
      concurrency.metrics.market_data.percent_change_usd_last_1_hour
    },${concurrency.metrics.market_data.percent_change_usd_last_24_hours},${
      concurrency.metrics.marketcap.current_marketcap_usd
    },${concurrency.metrics.market_data.real_volume_last_24_hours},${
      concurrency.metrics.roi_data.percent_change_last_1_week
    },${concurrency.metrics.roi_data.percent_change_last_1_month},${
      concurrency.metrics.roi_data.percent_change_year_to_date
    }${index === data.length - 1 ? "" : "\r\n"}`;

  downloadFileUtil(csvText, "csv")
};

export const exportJsonUtil = (data: ConcurrencyData[]) => {
  const text = JSON.stringify({ crypto_concurrences: data }, null, 3);
  downloadFileUtil(text, "json");
};
