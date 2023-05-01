import { Typography } from "@mui/material";
import { SquareContainer } from "../ui/containers";
import { InvestmentBalanceForm } from "./InvestmentBalanceForm";
import { InvestmentBalanceSummary } from "./InvestmentBalanceSummary";

export const InvestmentBalanceContent = () => {
  return (
    <SquareContainer>
      <Typography variant="h2">Calculadora de inversión</Typography>
      <InvestmentBalanceForm />
      <InvestmentBalanceSummary />
    </SquareContainer>
  );
};
