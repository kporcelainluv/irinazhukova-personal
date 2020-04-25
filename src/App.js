import React, { useState } from "react";
import { Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Header } from "./components/Header";
import { Courses } from "./components/Courses";
import { Makeup } from "./components/Makeup";

const appStyles = makeStyles({
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
    <Container maxWidth="xl">
      <Box display="flex" justifyContent="center" className={styles.block}>
        <Header
          handleClick={handleClick}
          handleClose={handleClose}
          anchorEl={anchorEl}
        />
      </Box>
      <Makeup />
      <Courses />
    </Container>
  );
};
