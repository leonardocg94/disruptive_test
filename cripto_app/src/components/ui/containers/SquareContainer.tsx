import { Box, SxProps, Theme } from "@mui/material";
import { FC, PropsWithChildren } from "react";

export const SquareContainer: FC<PropsWithChildren> = ({ children }) => {
  return <Box sx={rootContainerStyles}>{children}</Box>;
};

const rootContainerStyles: SxProps<Theme> = (theme) => ({
  bgcolor: "white",
  width: "1400px",
  maxWidth: "100%",
  mx: "auto",
  p: 4,
  boxShadow: "10px 10px 5px rgba(0,0,0,0.16)",
  borderTop: `3px solid ${theme.palette.primary.main}`,
  borderLeft: `3px solid ${theme.palette.primary.main}`,
});
