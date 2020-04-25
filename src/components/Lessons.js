import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { lessons } from "../consts";
import { Lesson } from "./Lesson";

const lessonListStyles = makeStyles({
  list: {
    flexGrow: 1,
    marginTop: "20px"
  }
});

export const Lessons = () => {
  const classes = lessonListStyles();
  return (
    <Grid container className={classes.list} spacing={2} justify={"center"}>
      <Typography variant="h3">Уроки</Typography>
      {lessons.map(lesson => (
        <Lesson key={lesson.name} lesson={lesson} />
      ))}
    </Grid>
  );
};
