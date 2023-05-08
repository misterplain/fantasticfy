const styles = {
    image: (theme) => ({
        width: "100%",
    }),
    variantSelector: (theme) => ({
        minWidth: "70%",
        margin: "20px 10px",
    }),
    title: (theme) => ({
        fontSize: "1.7rem",
        textAlign: "center",
        color: theme.palette.primary.main,
        fontFamily: "Roboto Mono, monospace",
        padding: "10px 10px",
    }),
    price: (theme) => ({
        fontSize: "1.5rem",
        fontFamily: "Roboto Mono, monospace",
        padding: "10px 10px",
    }),
    outOfStock: (theme) => ({
        color: theme.palette.error.main,
      }),
      lowStock: (theme) => ({
        color: theme.palette.warning.main,
      }),
      inStock: (theme) => ({
        color: theme.palette.inStock.main,
      }),
}

export default styles;