import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const lessonStyles = makeStyles({
  paper: {
    width: 280,
    boxShadow: "none",
    fontFamily: "Tahoma, sans-serif",
    marginBottom: "65px"
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
    width: "100%"
  },
  additionalInfo: {}
});

export const Lesson = ({ lesson }) => {
  const { name, intro, price, description } = lesson;
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
        {description && (
          <Button
            variant="contained"
            className={classes.lessonButton}
            onClick={() => {
              setOpened(!opened);
            }}
          >
            Подробнее
          </Button>
        )}

        {opened &&
          description &&
          description.map(element => {
            return (
              <List
                key={element}
                variant="h6"
                display={"block"}
                className={classes.additionalInfo}
              >
                <ListItem>{element}</ListItem>
              </List>
            );
          })}
      </Paper>
    </Grid>
  );
};
