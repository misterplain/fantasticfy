const styles = {
    image: (theme) => ({
        width: "100%",
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