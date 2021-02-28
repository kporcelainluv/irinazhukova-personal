import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

import { makeupDesc } from "../consts";
import {projectStyles} from "./Styles";

export const Makeup = () => {
  const classes = projectStyles();
  
  return (
    <>
        <Grid container justify={"center"}>
          <Grid>
            <Paper className={classes.paper}>
              <picture>
                <source
                    type="image/webp"
                    media="(min-width: 320px)"
                    srcSet={makeupDesc.webpImg}
                />
                <img
                    src={makeupDesc.imgLink}
                    alt={makeupDesc.alt}
                    height={280}
                    width={280}
                    className={classes.img}
                />
              </picture>
             
              <Typography
                variant="h4"
                display="block"
                classes={{ root: classes.lessonName }}
              >
                {makeupDesc.name}
              </Typography>
              <Divider />

              <Typography
                variant="h5"
                className={classes.lessonPrice}
              >
                {makeupDesc.price}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
    </>
  )};