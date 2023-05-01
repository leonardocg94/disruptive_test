import { Box, Link, Typography } from "@mui/material";
import { ShadowButton } from "../ui/buttons";
import styleList from "./CryptoConcurrency.styles";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { exportCsvUtil, exportJsonUtil } from "../../utils";

const { export: styles } = styleList;

export const CryptoConcurrencyExport = () => {
  //REDUX
  const { crypto_concurrency } = useSelector(
    (state: RootState) => state.crypto_concurrency
  );

  //VARIALBES Y CUERPO
  const cryptoIsEmpty = crypto_concurrency.length < 1;

  //MANEJADORES Y FUNCIONES
  const exportHandler = (num: number) => {
    switch (num) {
      case 0:
        return exportCsvUtil(crypto_concurrency);
      case 1:
        return exportJsonUtil(crypto_concurrency);
      default:
        return;
    }
  };

  //RENDERIZADO
  return (
    <Box sx={styles.root}>
      <Typography sx={styles.export}>Exportar</Typography>
      <ShadowButton
        variant="outlined"
        sx={styles.button}
        disabled={cryptoIsEmpty}
        onClick={() => exportHandler(0)}
      >
        CSV
      </ShadowButton>
      <ShadowButton
        variant="outlined"
        sx={styles.button}
        disabled={cryptoIsEmpty}
        onClick={() => exportHandler(1)}
      >
        JSON
      </ShadowButton>
    </Box>
  );
};
