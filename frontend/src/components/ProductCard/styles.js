const styles = {
    productCard: theme => ({
        width: "100%",
        border: `1px solid ${theme.palette.primary.main}`,
    }),
    productCardImageWrapper: theme => ({
        maxWidth: "100%",
        display: "flex",
    }),
    productCardImage: theme => ({
        width: "100%",
        height: "auto",
    })
}

export default styles;