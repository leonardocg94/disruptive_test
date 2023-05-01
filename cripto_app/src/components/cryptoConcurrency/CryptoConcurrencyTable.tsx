import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { formatMoney } from "../../utils";
import { PercentText } from "../ui/typographies";
import styleList from "./CryptoConcurrency.styles";
import { useEffect, useState } from "react";

const { table: styles } = styleList;

export const CryptoConcurrencyTable = () => {
  //REDUX
  const { crypto_concurrency } = useSelector(
    (state: RootState) => state.crypto_concurrency
  );

  //ESTADOS
  const [loading, setLoading] = useState<boolean>(true);

  //EFFECTOS
  useEffect(() => {
    if (crypto_concurrency && crypto_concurrency.length > 0) setLoading(false);
    if (!crypto_concurrency || crypto_concurrency.length < 1) setLoading(true);
  }, [crypto_concurrency]);

  //RENDERIZADO
  return loading ? (
    <Typography sx={styles.load}>Cargando cryptos...</Typography>
  ) : (
    <TableContainer component={Paper} sx={styles.root}>
      <Table sx={styles.paper} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ASSET</TableCell>
            <TableCell align="center">PRICE (USD)</TableCell>
            <TableCell align="center">CHANGE VS USD (1H)</TableCell>
            <TableCell align="center">CHANGE VS USD (24H)</TableCell>
            <TableCell align="center">REPORTED MARKETCAP</TableCell>
            <TableCell align="center">REAL VOLUME (24H)</TableCell>
            <TableCell align="center">CHANGE VS USD (7D)</TableCell>
            <TableCell align="center">CHANGE VS USD (30D)</TableCell>
            <TableCell align="center">CHANGE VS USD (YTD)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {crypto_concurrency &&
            crypto_concurrency.length > 0 &&
            crypto_concurrency.map((row) => (
              <TableRow key={row.id} sx={styles.headRow}>
                <TableCell align="center" sx={styles.commonCell}>
                  <Box sx={styles.assetCell}>
                    <Box component={"img"} src={row.img} sx={styles.assetImg} />
                    <Typography>
                      {row.name} - {row.symbol}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center" sx={styles.commonCell}>
                  <Typography>
                    {formatMoney(row.metrics.market_data.price_usd)}
                  </Typography>
                </TableCell>
                <TableCell align="center" sx={styles.commonCell}>
                  <PercentText
                    percent={
                      row.metrics.market_data.percent_change_usd_last_1_hour
                    }
                  />
                </TableCell>
                <TableCell align="center" sx={styles.commonCell}>
                  <PercentText
                    percent={
                      row.metrics.market_data.percent_change_usd_last_24_hours
                    }
                  />
                </TableCell>
                <TableCell align="center" sx={styles.commonCell}>
                  <Typography>
                    {formatMoney(row.metrics.marketcap.current_marketcap_usd)}
                  </Typography>
                </TableCell>
                <TableCell align="center" sx={styles.commonCell}>
                  <Typography>
                    {formatMoney(
                      row.metrics.market_data.real_volume_last_24_hours
                    )}
                  </Typography>
                </TableCell>
                <TableCell align="center" sx={styles.commonCell}>
                  <PercentText
                    percent={row.metrics.roi_data.percent_change_last_1_week}
                  />
                </TableCell>
                <TableCell align="center" sx={styles.commonCell}>
                  <PercentText
                    percent={row.metrics.roi_data.percent_change_last_1_month}
                  />
                </TableCell>
                <TableCell align="center" sx={styles.commonCell}>
                  <PercentText
                    percent={row.metrics.roi_data.percent_change_year_to_date}
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
