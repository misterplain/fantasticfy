const styles = {
  wrapper: (theme) => ({
    width: "100%",
    height: "50vh",
    display: "flex",
    marginBottom: "50px",
    borderBottom: `1px solid ${theme.palette.primary.main}`,
  }),
  image: (theme) => ({
    width: "100%",
  }),
  businessName: (theme) => ({
    position: "absolute",
    top: "25%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 2,
    width: "70%",
  }),
  title: theme => ({
    textAlign: "center",
    color: "#ffffff",
    fontSize: "60px",
    [theme.breakpoints.up("md")]: {
        fontSize: "80px",
    }
  }),
};

export default styles;
