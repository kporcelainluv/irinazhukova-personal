import React from "react";
import logo from "../img/iz.png";
import Box from "@material-ui/core/Box";
import {projectStyles} from "./Styles";

export const Header = () => {
    const classes = projectStyles();
      return (
        <Box>
          <img
            src={logo}
            alt="логотип визажиста в ярославле ирины жуковой"
            className={classes.logo}
            width={84}
            height={40}
          />
        </Box>
      );
};
