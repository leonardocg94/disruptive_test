import { Typography } from "@mui/material";
import { useEffect } from "react";
import { io } from "socket.io-client";
import { useAppDispatch } from "../../hooks";
import { ConcurrencyData } from "../../types/responses";
import { setCryptoConcurrency } from "../../store/cryptoConcurrencySlice";
import { SquareContainer } from "../ui/containers";
import { CryptoConcurrencyTable } from "./CryptoConcurrencyTable";
import { CryptoConcurrencyExport } from "./CryptoConcurrencyExport";

const socket = io("http://localhost:8001");

export const CryptoConcurrencyContent = () => {
  //REDUX
  const dispatch = useAppDispatch();

  //EFECTOS
  useEffect(() => {
    socket.on("get_concurrency", (data: ConcurrencyData[]) => {
      dispatch(setCryptoConcurrency(data));
    });
  }, [dispatch]);

  //RENDERIZADO
  return (
    <SquareContainer>
      <Typography variant="h2">Cryptos en tiempo real</Typography>
      <CryptoConcurrencyTable />
      <CryptoConcurrencyExport />
    </SquareContainer>
  );
};
