import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const lessonStyles = makeStyles({
  paper: {
    width: 280,
    boxShadow: "none",
    fontFamily: "Tahoma, sans-serif"
  },
  lessonName: {
    fontSize: "30px",
    lineHeight: "34px",
    marginTop: "8px",
    letterSpacing: "-0.2px",
    marginBottom: "22px"
  },
  lessonIntro: {
    fontSize: "18px",
    lineHeight: "22px",
    letterSpacing: "-0.09px",
    minHeight: "auto",
    marginTop: "10px",
    marginBottom: "25px"
  },
  lessonPrice: {
    fontSize: "16px",
    fontWeight: "400",
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
    width: "100%",
    marginBottom: "65px"
  }
});

export const Lesson = ({ lesson }) => {
  const { name, intro, price } = lesson;
  const classes = lessonStyles();

  const [opened, setOpened] = useState(false);

  return (
    <Grid>
      <Paper className={classes.paper}>
        <img src="http://placekitten.com/g/280/170" alt="" />
        <Typography
          variant="h4"
          display={"block"}
          classes={{ root: classes.lessonName }}
        >
          {name}
        </Typography>
        <Divider />
        <Typography
          variant="h6"
          display={"block"}
          className={classes.lessonIntro}
        >
          {intro}
        </Typography>
        <Typography
          variant="h6"
          display={"block"}
          className={classes.lessonPrice}
        >
          {price}
        </Typography>

        <Button
          variant="contained"
          className={classes.lessonButton}
          onClick={() => {
            console.log("clciked", name);
          }}
        >
          Подробнее
        </Button>
      </Paper>
    </Grid>
  );
};
