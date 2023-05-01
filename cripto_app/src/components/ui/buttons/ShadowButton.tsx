import { ButtonProps, Button } from "@mui/material";
import { FC, PropsWithChildren } from "react";

export const ShadowButton: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  sx,
  ...rest
}) => {
  //RENDERIZADO
  return (
    <Button sx={sx} {...rest}>
      {children}
    </Button>
  );
};
