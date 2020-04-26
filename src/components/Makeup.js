import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

import { makeup } from "../consts";
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
    boxShadow: "none"
  },
  lessonName: {
    fontSize: "30px",
    lineHeight: "34px",
    marginTop: "8px",
    letterSpacing: "-0.2px",
    marginBottom: "10px"
  },
  lessonIntro: {
    fontSize: "18px",
    lineHeight: "22px",
    letterSpacing: "-0.09px",
    minHeight: "auto",
    margin: "10px 0"
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
  heading: {
    fontFamily: "Tahoma, sans-serif",
    fontSize: "34px",
    lineHeight: "34px",
    marginTop: "8px",
    letterSpacing: "-0.2px",
    width: " 280px",
    margin: "0 auto 22px"
  }
});

export const Makeup = () => {
  const classes = useStyles();

  const [opened, setOpened] = useState(false);
  return (
    <div className={classes.root}>
      {/*<Typography*/}
      {/*  variant="h2"*/}
      {/*  align={"left"}*/}
      {/*  display={"block"}*/}
      {/*  classes={{ root: classes.heading }}*/}
      {/*>*/}
      {/*  Макияж*/}
      {/*</Typography>*/}
      <Grid container spacing={2} justify={"center"}>
        <Grid>
          <Paper className={classes.paper}>
            <img src={makeup.imgLink} alt="" height={170} width={280} />
            <Typography
              variant="h4"
              display={"block"}
              classes={{ root: classes.lessonName }}
            >
              {makeup.name}
            </Typography>
            <Divider />
            <Typography
              variant="h6"
              display={"block"}
              className={classes.lessonIntro}
            >
              {makeup.intro}
            </Typography>
            <Typography
              variant="h6"
              display={"block"}
              className={classes.lessonPrice}
            >
              {makeup.price}
            </Typography>

            <Button
              variant="contained"
              className={classes.lessonButton}
              onClick={() => {
                setOpened(!opened);
              }}
            >
              Подробнее
            </Button>

            {opened && (
              <List
                variant="h6"
                display={"block"}
                className={classes.additionalInfo}
              >
                {makeup.description.map(element => {
                  return <ListItem key={element}>{element}</ListItem>;
                })}
              </List>
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
