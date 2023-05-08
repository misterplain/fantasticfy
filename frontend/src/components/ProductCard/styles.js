const styles = {
  productCard: (theme) => ({
    width: "90%",
    border: `5px solid ${theme.palette.primary.main}`,
    borderRadius: "10px",

    display: "flex",
    flexDirection: "column",

    height: "390px",
    [theme.breakpoints.up("sm")]: {
      height: "400px",
    },
    [theme.breakpoints.up("md")]: {
      height: "350px",
    },
  }),
  productCardImageWrapper: (theme) => ({
    width: "100%",
    height: "80%",
  }),
  productCardImage: (theme) => ({
    width: "100%",
    height: "100%",
  }),
  productDetailsWrapper: (theme) => ({
    width: "100%",
    display: "flex",
    margin: "0 3px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }),
  inventory: (theme) => ({}),
  outOfStock: (theme) => ({
    color: theme.palette.error.main,
  }),
  lowStock: (theme) => ({
    color: theme.palette.warning.main,
  }),
  inStock: (theme) => ({
    color: theme.palette.inStock.main,
  }),
  missingPhoto: (theme) => ({
    color: theme.palette.primary.main,

    textAlign: "center",
    marginTop: "20%",
  }),
};

export default styles;
