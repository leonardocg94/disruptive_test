import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import styles from "./InvestmentBalance.styles";
import { BalanceItem } from "./BalanceItem";

export const InvestmentBalanceSummary = () => {
  //REDUX
  const {
    loading,
    summary: { data },
  } = useSelector((state: RootState) => state.balance);

  //RENDERIZADO
  return (
    <Box sx={styles.summary}>
      {loading ? (
        <Typography sx={styles.summaryMessage}>
          Calculando balance...
        </Typography>
      ) : data.length < 1 ? (
        <Typography sx={styles.summaryMessage}>No hay balances</Typography>
      ) : (
        data.map((balance) => <BalanceItem key={balance.id} item={balance} />)
      )}
    </Box>
  );
};
