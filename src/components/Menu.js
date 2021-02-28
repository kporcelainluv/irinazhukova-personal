import React from "react";
import { Menu } from "@material-ui/core";
import { MenuList } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";

import logo from "../img/iz.png";

const menuStyles = makeStyles({
  logoItem: {
    display: "flex",
    justifyContent: "center"
  },
  closeButton: {
    position: "absolute",
    top: "6px",
    right: 0
  }
});

export const MenuBlock = ({ anchorEl, handleClose }) => {
  const styles = menuStyles();
  const opened = Boolean(anchorEl);
  return (
    <Menu
      anchorEl={anchorEl}
      open={opened}
      PaperProps={{
        style: {
          width: "320px",
          maxWidth: "100%",
          top: 0,
          left: 0,
          position: "initial",
          transition: "none",
          outline: "none"
        }
      }}
    >
      <MenuList>
        <MenuItem className={styles.logoItem}>
          <img
            src={logo}
            alt="логотип визажиста ирины жуковой"
            height={30}
            width={84}
          />
        </MenuItem>
        <MenuItem className={styles.closeButton}>
          <IconButton
            className={styles.closeButton}
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={() => {
              handleClose();
            }}
          >
            <CloseIcon />
          </IconButton>
        </MenuItem>
        <MenuItem>Макияж</MenuItem>
        <MenuItem>Курсы</MenuItem>
        <MenuItem>Контакты</MenuItem>
      </MenuList>
    </Menu>
  );
};
