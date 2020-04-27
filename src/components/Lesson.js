import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { Description } from "./Description";

const lessonStyles = makeStyles({
  paper: {
    width: 280,
    boxShadow: "none",
    fontFamily: "Tahoma, sans-serif",
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
  additionalInfo: {},
  img: {
    objectFit: "cover"
  }
});

export const Lesson = ({ lesson }) => {
  const {
    name,
    intro,
    price,
    description,
    learns,
    imgLink,
    base = undefined
  } = lesson;
  const classes = lessonStyles();

  const [opened, setOpened] = useState(false);
  return (
    <Grid container justify={"center"}>
      <Paper className={classes.paper}>
        <img
          src={imgLink}
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
          {name}
        </Typography>
        <Divider />
        <Typography
          variant="h3"
          display={"block"}
          className={classes.lessonIntro}
        >
          {intro}
        </Typography>
        <Typography
          variant="h4"
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

        {opened && description && (
          <Description
            heading={" Что мы делаем? "}
            list={description}
            base={base}
          />
        )}
        {opened && learns && (
          <Description heading={"Вы научитесь:"} list={learns} base={base} />
        )}
      </Paper>
    </Grid>
  );
};
