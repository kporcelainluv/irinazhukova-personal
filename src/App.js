import React, { useState } from "react";
import { Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { MenuBlock } from "./components/Menu";
import logo from "./img/iz.png";

const blockStyles = makeStyles({
  buttonOpen: { position: "absolute", right: 0, top: 20 },
  block: { paddingTop: "18px" }
});

export const App = () => {
  const styles = blockStyles();

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
        <img
          src={logo}
          alt="логотип визажиста ирины жуковой"
          height={30}
          width={84}
        />

        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          classes={{
            root: styles.buttonOpen
          }}
          onClick={e => {
            handleClick(e);
          }}
        >
          <MoreVertIcon />
        </IconButton>
        <MenuBlock handleClose={handleClose} anchorEl={anchorEl} />
      </Box>
    </Container>
  );
};
