import React from "react";
import logo from "../img/iz.png";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { MenuBlock } from "./Menu";
import { makeStyles } from "@material-ui/core/styles";

const headerStyles = makeStyles({
  buttonOpen: { position: "absolute", right: 0, top: 20 },
  block: { paddingTop: "18px" }
});

export const Header = ({ handleClick, handleClose, anchorEl }) => {
  const styles = headerStyles();
  return (
    <Box>
      <img
        src={logo}
        alt="логотип визажиста ирины жуковой"
        height={30}
        width={84}
      />

      {/*<IconButton*/}
      {/*  aria-label="more"*/}
      {/*  aria-controls="long-menu"*/}
      {/*  aria-haspopup="true"*/}
      {/*  classes={{*/}
      {/*    root: styles.buttonOpen*/}
      {/*  }}*/}
      {/*  onClick={e => {*/}
      {/*    handleClick(e);*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <MoreVertIcon />*/}
      {/*</IconButton>*/}
      {/*<MenuBlock handleClose={handleClose} anchorEl={anchorEl} />*/}
    </Box>
  );
};
