import { Box, TextField, Typography } from "@mui/material";
import { ShadowButton } from "../ui/buttons";
import styles from "./InvestmentBalance.styles";
import { ChangeEvent, FormEvent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useAppDispatch, useTemporalMessage } from "../../hooks";
import {
  setBalanceForm,
  setBalanceLoading,
  setBalanceSummary,
} from "../../store/investmentBalanceSlice";
import { getInvestmentBalanceService } from "../../services";

export const InvestmentBalanceForm = () => {
  //REDUX
  const { amount } = useSelector((state: RootState) => state.balance.form);
  const { loading } = useSelector((state: RootState) => state.balance);
  const dispatch = useAppDispatch();

  //HOOKS PERSONALIZADOS
  const [show, msg, isError, setStatus, initStatus] = useTemporalMessage(5000);

  //MANEJADORES Y FUNCIONES
  //maneja el cambio en el input
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    //restablece el mensaje de error si existe
    if (show) initStatus();
    const val = event.target.value;

    //si el valor existe
    if (val) {
      //convertir a número el valor y verificar si es mayor que 0
      const floatVal = parseFloat(val);
      if (floatVal <= 0) {
        setStatus({ isError, msg: "Ingresar mínimo 1 dolar", show: true });
        return;
      }
      //si es mayor a cero guardar el valor como número
      dispatch(setBalanceForm(floatVal));
      return;
    }

    //si el valor esta vacio guardar como string
    dispatch(setBalanceForm(""));
  };

  //maneja el envío del formulario y la obtención de los balances de proyección
  const submitHandler = async (event: FormEvent) => {
    //evita el comportamiento por defecto del evento submit
    event.preventDefault();

    //inicia el estado de carga
    dispatch(setBalanceLoading(true));

    //realiza la petición
    const data = await getInvestmentBalanceService(amount as number);

    //si no es satisfactoria muestra el mensaje de error
    if (!data.success) setStatus({ isError, msg: data.error!, show: true });

    //si es satisfactoria carga los balances de proyección
    if (data.success)
      dispatch(setBalanceSummary(data.data!.investment_balances));

    //termina el estado de carga
    dispatch(setBalanceLoading(false));
  };

  //RENDERIZADO
  return (
    <>
      <Box component={"form"} sx={styles.form} onSubmit={submitHandler}>
        <TextField
          sx={styles.input}
          label="Inversión"
          type="number"
          onChange={changeHandler}
          value={amount}
        />
        <ShadowButton
          sx={styles.submit}
          type="submit"
          variant="outlined"
          disabled={!amount || loading}
        >
          Enviar
        </ShadowButton>
      </Box>
      {show && <Typography sx={styles.formError(isError)}>{msg}</Typography>}
    </>
  );
};
