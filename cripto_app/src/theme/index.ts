import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#B100FF",
    },
    success: {
      main: "#1BD145",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "h2" },
          style: ({ theme }) => ({
            fontSize: "30px",
            fontWeight: "600",
            [theme.breakpoints.between("xs", "sm")]: {
              fontSize: "20px",
            },
            [theme.breakpoints.between("sm", "md")]: {
              fontSize: "24px",
            },
          }),
        },
        {
          props: { variant: "body1" },
          style: ({ theme }) => ({
            fontSize: "18px",
            [theme.breakpoints.between("xs", "sm")]: {
              fontSize: "16px",
            },
          }),
        },
        {
          props: { variant: "h3" },
          style: ({ theme }) => ({
            fontSize: "24px",
            [theme.breakpoints.down("sm")]: {
              fontSize: "18px",
            },
          }),
        },
      ],
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            backgroundColor: "white",
            borderRadius: "0px",
            fontSize: "16px",
            padding: "15px",
            fontWeight: "400",
            transition: "all 0.1s ease",
            position: "relative",
            ":active": {
              boxShadow: "none",
              transform: "translate(6px, 6px)",
              backgroundColor: "white",
              zIndex: 10,
            },
            ":hover": {
              opacity: 1,
              backgroundColor: "white",
            },
            ":disabled": {
              color: "grey",
            },
          },
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: ({ theme }) => ({
            boxShadow: `6px 6px 0px ${theme.palette.primary.main}`,
            border: `1px solid ${theme.palette.primary.main}`,
            ":disabled": {
              border: `1px solid ${theme.palette.primary.main}`,
            },
          }),
        },
        {
          props: { variant: "outlined", color: "success" },
          style: ({ theme }) => ({
            boxShadow: `6px 6px 0px ${theme.palette.success.main}`,
            border: `1px solid ${theme.palette.success.main}`,
          }),
        },
      ],
    },
  },
});

export { theme };
