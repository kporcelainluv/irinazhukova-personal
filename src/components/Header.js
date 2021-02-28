import React from "react";
import logo from "../img/iz.png";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    img: {
        objectFit: "cover",
        height: '40px',
    }
});
export const Header = () => {
    const classes = useStyles();
      return (
        <Box>
          <img
            src={logo}
            alt="логотип визажиста в ярославле ирины жуковой"
            className={classes.img}
            width={84}
            height={40}
          />
        </Box>
      );
};
