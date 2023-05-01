import { SxProps, Theme } from "@mui/material";
type Styles = {
  table: {
    root: SxProps<Theme>;
    paper: SxProps;
    headRow: SxProps;
    commonCell: SxProps;
    assetCell: SxProps;
    assetImg: SxProps;
    load: SxProps;
  };
  export: {
    root: SxProps;
    export: SxProps;
    button: SxProps;
  };
};

const styles: Styles = {
  table: {
    root: (theme) => ({
      mt: 3,
      "::-webkit-scrollbar": {
        height: "4px",
      },

      "::-webkit-scrollbar-track": {
        background: "#e0e0e0",
      },

      "::-webkit-scrollbar-thumb": {
        background: theme.palette.primary.main,
      },
    }),
    paper: { minWidth: { sm: 650, xs: "auto" } },
    headRow: { "&:last-child td, &:last-child th": { border: 0 } },
    commonCell: { minWidth: "170px" },
    assetCell: { display: "flex", alignItems: "center", gap: 1 },
    assetImg: { width: "30px", height: "30px" },
    load: {
      mt: 3,
      textAlign: "center",
    },
  },
  export: {
    root: {
      display: "flex",
      gap: 3,
      alignItems: "center",
      minHeight: "70px",
      mt: 3,
      flexWrap: { sm: "nowrap", xs: "wrap" },
      justifyContent: "flex-end",
    },
    export: {
      fontWeight: "500",
      textAlign: { sm: "left", xs: "center" },
      minWidth: { xs: "100%", sm: "auto" },
    },
    button: { minWidth: { sm: "120px", xs: "100%" } },
  },
};

export default styles;
