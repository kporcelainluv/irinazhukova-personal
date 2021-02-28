import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

import { makeupDesc } from "../consts";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: "40px",
    marginBottom: "65px"
  },
  paper: {
    width: 280,
    boxShadow: "none",
    marginBottom: "65px"
  },
  lessonName: {
    fontSize: "28px",
    lineHeight: "34px",
    letterSpacing: "-0.2px",
    margin: "10px 0"
  },
  lessonIntro: {
    fontSize: "15px",
    lineHeight: "22px",
    letterSpacing: "-0.09px",
    minHeight: "auto",
    margin: "10px 0"
  },
  lessonPrice: {
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "28px",
    textTransform: "uppercase",
    marginBottom: " 27px"
  },
  lessonButton: {
    margin: "auto",
    lineHeight: "29px",
    border: "none",
    display: "flex",
    textTransform: "uppercase",
    textAlign: "center",
    cursor: "pointer",
    width: "100%"
  },

  listItem: {
    padding: "6px 16px 6px 0"
  },
  img: {
    objectFit: "cover"
  }
});

export const Makeup = () => {
  const classes = useStyles();

  const [opened, setOpened] = useState(false);

  return (
    <div className={classes.root}>
      {makeupDesc.map(m => {
        return (
          <Grid container spacing={2} justify={"center"}>
            <Grid>
              <Paper className={classes.paper}>
                <img
                  src={m.imgLink}
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
                  {m.name}
                </Typography>
                <Divider />

                <Typography
                  variant="h4"
                  display={"block"}
                  className={classes.lessonPrice}
                >
                  {m.price}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        );
      })}
    </div>
  )};