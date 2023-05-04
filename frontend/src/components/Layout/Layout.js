import Grid from "@mui/material/Grid";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Grid container>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Layout;
