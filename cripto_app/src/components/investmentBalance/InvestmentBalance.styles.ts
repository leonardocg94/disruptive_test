import { SxProps, Theme } from "@mui/material";
type Styles = {
  form: SxProps;
  formError: (condition: boolean) => SxProps;
  submit: SxProps;
  input: SxProps;
  summary: SxProps;
  summaryMessage: SxProps;
  details: SxProps<Theme>;
  balanceItem: {
    root: SxProps;
    img: SxProps;
    header: SxProps;
    summary: SxProps;
  };
  detailsItem: {
    root: SxProps<Theme>;
    commonText: SxProps;
    labelText: SxProps;
  };
};

const styles: Styles = {
  form: {
    width: "100%",
    display: "flex",
    gap: "30px",
    minHeight: "70px",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: { sm: "nowrap", xs: "wrap" },
    my: 4,
  },
  formError(condition) {
    return {
      color: condition ? "crimson" : "green",
      mt: 2,
      textAlign: "center",
    };
  },
  submit: {
    minWidth: { sm: "125px", xs: "100%" },
  },
  input: {
    minWidth: { sm: "250px", xs: "100%" },
  },
  summary: {
    mt: 5,
  },
  details(theme) {
    return {
      display: "flex",
      gap: 3,
      overflowX: "auto",
      mt: 2,
      pb: 1,
      "::-webkit-scrollbar": {
        height: "4px",
      },

      "::-webkit-scrollbar-track": {
        background: "#e0e0e0",
      },

      "::-webkit-scrollbar-thumb": {
        background: theme.palette.primary.main,
      },
    };
  },
  summaryMessage: {
    textAlign: "center",
  },
  balanceItem: {
    root: {
      ":not(:last-child)": {
        mb: 3,
      },
    },
    img: {
      width: "50px",
      height: "50px",
      mr: 3,
    },
    header: {
      display: "flex",
      alignItems: "center",
      mb: 2,
    },
    summary: {
      display: "flex",
      gap: 3,
      flexWrap: "wrap",
    },
  },
  detailsItem: {
    root(theme) {
      return {
        border: `0.8px solid ${theme.palette.primary.main}`,
        p: 2,
        minWidth: "200px",
      };
    },
    commonText: {
      textAlign: "center",
    },
    get labelText() {
      return {
        ...this.commonText,
        fontWeight: "500",
      };
    },
  },
};

export default styles;
