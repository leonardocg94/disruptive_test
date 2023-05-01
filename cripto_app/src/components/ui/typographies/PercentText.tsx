import { Typography } from "@mui/material";
import { FC } from "react";

type Props = { percent: number };
export const PercentText: FC<Props> = ({ percent }) => {
  //VARIABLES Y CUERPO
  const isNegative = percent < 0;
  
  //RENDERIZADO
  return (
    <Typography
      sx={(theme) => ({
        color: isNegative ? "crimson" : theme.palette.success.main,
      })}
    >
      {`${!isNegative ? "+" : ""}${percent.toFixed(2)}%`}
    </Typography>
  );
};
