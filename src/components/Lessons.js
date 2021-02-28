import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { lessons } from "../consts";
import { Lesson } from "./Lesson";

const lessonListStyles = makeStyles({
  list: {
    flexGrow: 1,
    marginTop: "24px"
  },
  heading: {
    fontSize: "32px",
    lineHeight: "40px",
    marginTop: "8px",
    letterSpacing: "-0.2px",
    width: "280px",
    margin: "0 auto 24px"
  }
});

export const Lessons = () => {
  const classes = lessonListStyles();
  return (
    <Grid container className={classes.list} justify={"center"}>
      <Typography variant="h2" classes={{ root: classes.heading }}>
        Уроки
      </Typography>
      {lessons.map(lesson => (
        <Lesson key={lesson.name} lesson={lesson} />
      ))}
    </Grid>
  );
};
