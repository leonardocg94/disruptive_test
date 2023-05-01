import { Box, Container } from "@mui/material";
import { InvestmentBalanceContent } from "./components/investmentBalance";
import { CryptoConcurrencyContent } from "./components/cryptoConcurrency";

function App() {
  return (
    <>
      <Container
        sx={{
          py: 5,
          minHeight: "100vh",
        }}
      >
        <InvestmentBalanceContent />
        <Box mt={5} />
        <CryptoConcurrencyContent />
      </Container>
    </>
  );
}

export default App;
