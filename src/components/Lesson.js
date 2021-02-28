import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { Description } from "./Description";
import {projectStyles} from "./Styles";

export const Lesson = ({ lesson }) => {
  const {
    name,
    intro,
    price,
    description,
    learns,
    imgLink,
    base = undefined,
    webpImg,
    alt
  } = lesson;
  const classes = projectStyles();

  const [opened, setOpened] = useState(false);
  return (
    <Grid container justify={"center"}>
      <Paper className={classes.paper}>
        <picture>
          <source
              type="image/webp"
              media="(min-width: 320px)"
              srcSet={webpImg}
          />
          <img
              src={imgLink}
              alt={alt}
              height={280}
              width={280}
              className={classes.img}
          />
        </picture>
        <Typography
          variant="h3"
          display={"block"}
          classes={{ root: classes.lessonName }}
        >
          {name}
        </Typography>
        <Divider />
        <Typography
          variant="h5"
          classes={{ root: classes.lessonIntro }}
        >
          {intro}
        </Typography>
        <Typography
          variant="h5"
          display={"block"}
          classes={{ root: classes.lessonPrice }}
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

        {opened && description && (
          <Description
            heading={"Что мы делаем?"}
            list={description}
            base={base}
          />
        )}
        {opened && learns && (
          <Description heading={"Вы научитесь:"} list={learns} />
        )}
      </Paper>
    </Grid>
  );
};
