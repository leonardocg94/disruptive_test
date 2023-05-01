import fs from "fs";
import { AllowedCryptos, CryptoRate } from "../types";

//función que regresa un diccionario de las crypto y su porcentaje de ganancia
export const getCryptoDataFromCsv = () => {
  //lectura del archivo donde esta la información delas crypto
  const file = fs.readFileSync("src/data/crypto_rates.csv", {
    encoding: "utf-8",
    flag: "r",
  });

  //se corta el texto del archivo por filas y se eliminan la de las cabeceras
  const cryptoRows = file.split("\r\n").slice(1);
  const cryptoRates: CryptoRate[] = [];
  
  //se crea el diccionario crypto tasa de inversion
  for (let crypto of cryptoRows) {
    const [symbol, rate] = crypto.split(",");
    cryptoRates.push({
      symbol: symbol as AllowedCryptos,
      rate: parseFloat(rate),
    });
  }
  return cryptoRates;
};
