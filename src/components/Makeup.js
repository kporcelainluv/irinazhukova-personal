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
              <img
                src={makeupDesc.imgLink}
                alt=""
                height={280}
                width={280}
                className={classes.img}
              />
              <Typography
                variant="h2"
                display="block"
                classes={{ root: classes.lessonName }}
              >
                {makeupDesc.name}
              </Typography>
              <Divider />

              <Typography
                variant="h3"
                display="block"
                className={classes.lessonPrice}
              >
                {makeupDesc.price}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
    </>
  )};