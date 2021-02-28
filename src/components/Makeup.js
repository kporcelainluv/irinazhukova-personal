import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

import { makeupDesc } from "../consts";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: "40px",
  },
  paper: {
    width: 280,
    boxShadow: "none",
  },
  lessonName: {
    fontSize: "28px",
    lineHeight: "35px",
    letterSpacing: "-0.2px",
    margin: "12px 0 6px"
  },
  lessonPrice: {
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "20px",
    textTransform: "uppercase",
    margin: "6px 0 24px"
  },
  
  listItem: {
    padding: "6px 12px 6px 0"
  },
  img: {
    objectFit: "cover"
  }
});

export const Makeup = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
        <Grid container spacing={2} justify={"center"}>
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
                display={"block"}
                classes={{ root: classes.lessonName }}
              >
                {makeupDesc.name}
              </Typography>
              <Divider />

              <Typography
                variant="h4"
                display={"block"}
                className={classes.lessonPrice}
              >
                {makeupDesc.price}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
    </div>
  )};