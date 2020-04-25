import React, { useState, Fragment } from "react";
import { Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Header } from "./components/Header";
import { Courses } from "./components/Courses";
import { Makeup } from "./components/Makeup";
import { Footer } from "./components/Footer";
import { InstaGrid } from "./components/Portfolio";

const appStyles = makeStyles({
  container: {
    padding: 0
  },
  buttonOpen: { position: "absolute", right: 0, top: 20 },
  block: { paddingTop: "18px" }
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

      <Container maxWidth="xl" classes={{ root: styles.container }}>
        <Box display="flex" justifyContent="center" className={styles.block}>
          <Header
            handleClick={handleClick}
            handleClose={handleClose}
            anchorEl={anchorEl}
          />
        </Box>
        <Makeup />
        <Courses />
        <InstaGrid account="zhukovairinal" numberOfMediaElements={6} />
        <Footer />
      </Container>
    </Fragment>
  );
};
