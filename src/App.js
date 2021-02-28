import React, { useState, Fragment } from "react";
import { Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Header } from "./components/Header";
import { Lessons } from "./components/Lessons";
import { Makeup } from "./components/Makeup";
import { Footer } from "./components/Footer";
import { InstaGrid } from "./components/Portfolio";
import {theme} from "./components/Styles";
import {ThemeProvider} from "@material-ui/styles";

const appStyles = makeStyles({
  container: {
    padding: 0,
    fontFamily: "Tahoma, sans-serif",
    backgroundColor: "white",
    maxWidth: "320px"
  },
  buttonOpen: { position: "absolute", right: 0, top: 20 },
  block: { padding: "24px 0" }
});

export const App = () => {
  const styles = appStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
      <Container maxWidth="xl" classes={{ root: styles.container }}>
        <Box display="flex" className={styles.block} justifyContent="center">
          <Header
            handleClick={handleClick}
            handleClose={handleClose}
            anchorEl={anchorEl}
          />
        </Box>
        <Makeup />
        <Lessons />
        <InstaGrid account="zhukovairinal" numberOfMediaElements={6} />
        <Footer />
      </Container>
      </ThemeProvider>
    </Fragment>
  );
};
