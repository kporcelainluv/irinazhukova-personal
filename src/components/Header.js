import React from "react";
import logo from "../img/iz.png";
import webplogo from '../img/webp/iz.webp';
import Box from "@material-ui/core/Box";
import {projectStyles} from "./Styles";

export const Header = () => {
    const classes = projectStyles();
      return (
        <Box>
            <picture>
                <source
                    type="image/webp"
                    media="(min-width: 320px)"
                    srcSet={webplogo}
                />
                <img
                    src={logo}
                    alt="логотип визажиста в ярославле ирины жуковой"
                    className={classes.logo}
                    width={84}
                    height={50}
                />
            </picture>
        </Box>
      );
};
