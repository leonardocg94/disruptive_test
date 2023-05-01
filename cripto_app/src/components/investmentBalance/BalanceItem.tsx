import { FC } from "react";
import { InvestmentBalance } from "../../types";
import { Box, Typography } from "@mui/material";
import styleList from "./InvestmentBalance.styles";
import { formatMoney } from "../../utils";
import { BalanceDetailsItem } from "./BalanceDetailsItem";

const { balanceItem: styles } = styleList;

type Props = { item: InvestmentBalance };
export const BalanceItem: FC<Props> = ({
  item: { name, img, symbol, initial, final, details },
}) => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.header}>
        <Box component={"img"} src={img} sx={styles.img} />
        <Typography variant="h3">{name}</Typography>
      </Box>
      <Box sx={styles.summary}>
        <Box>
          <Typography>
            Monto inicial USD: {formatMoney(initial.usd_amount)}
          </Typography>
          <Typography>
            Monto inicial {symbol}: {initial.crypto_amount}
          </Typography>
        </Box>
        <Box>
          <Typography>
            Monto Final USD: {formatMoney(final.usd_amount)}
          </Typography>
          <Typography>
            Monto Final {symbol}: {final.crypto_amount}
          </Typography>
        </Box>
      </Box>
      <Box sx={styleList.details}>
        {details.map((detail) => (
          <BalanceDetailsItem key={detail.month} item={detail} />
        ))}
      </Box>
    </Box>
  );
};
