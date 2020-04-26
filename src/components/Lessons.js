import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { lessons } from "../consts";
import { Lesson } from "./Lesson";

const lessonListStyles = makeStyles({
  list: {
    flexGrow: 1,
    marginTop: "20px"
  },
  heading: {
    fontFamily: "Tahoma, sans-serif",
    fontSize: "34px",
    lineHeight: "34px",
    marginTop: "8px",
    letterSpacing: "-0.2px",
    width: " 280px",
    margin: "0 auto 30px"
  }
});

export const Lessons = () => {
  const classes = lessonListStyles();
  return (
    <Grid container className={classes.list} spacing={2} justify={"center"}>
      <Typography variant="h2" className={classes.heading}>
        Уроки
      </Typography>
      {lessons.map(lesson => (
        <Lesson key={lesson.name} lesson={lesson} />
      ))}
    </Grid>
  );
};
