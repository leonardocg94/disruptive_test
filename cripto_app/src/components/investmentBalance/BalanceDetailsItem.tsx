import { FC } from "react";
import { Detail } from "../../types";
import { Box, Typography } from "@mui/material";
import styleList from "./InvestmentBalance.styles";
import { formatMoney } from "../../utils";

const { detailsItem: styles } = styleList;

type Props = { item: Detail };
export const BalanceDetailsItem: FC<Props> = ({
  item: { month, monthly_profit, monthly_total },
}) => {
  return (
    <Box sx={styles.root}>
      <Typography sx={styles.commonText}>Mes {month}</Typography>
      <Typography sx={styles.labelText}>Ganancia:</Typography>
      <Typography sx={styles.commonText}>
        {formatMoney(monthly_profit)}
      </Typography>
      <Typography sx={styles.labelText}>Total del mes:</Typography>
      <Typography sx={styles.commonText}>
        {formatMoney(monthly_total)}
      </Typography>
    </Box>
  );
};
