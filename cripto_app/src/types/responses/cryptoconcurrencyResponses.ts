export type ConcurrencyData = {
  id: string;
  img: string;
  name: string;
  symbol: string;
  metrics: {
    market_data: {
      price_usd: number;
      percent_change_usd_last_1_hour: number;
      percent_change_usd_last_24_hours: number;
      real_volume_last_24_hours: number;
    };
    marketcap: {
      current_marketcap_usd: number;
    };
    roi_data: {
      percent_change_last_1_week: number;
      percent_change_last_1_month: number;
      percent_change_year_to_date: number;
    };
  };
};
