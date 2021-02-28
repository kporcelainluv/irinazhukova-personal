import React from "react";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import {projectStyles} from "./Styles";

export const Description = ({ list, heading, base = undefined }) => {
  const classes = projectStyles();
  return (
    <div>
      <Typography variant="h2" display={"block"}  classes={{ root: classes.lessonsHeading }}>
        {heading}
      </Typography>
      <List display={"block"} disablePadding={true}>
        {list.map((element, index) => {
          return (
            <ListItem className={classes.listItem} key={element}>
              {index + 1}. {element}
            </ListItem>
          );
        })}
        {base && <ListItem className={classes.listItem}>{base}</ListItem>}
      </List>
    </div>
  );
};
