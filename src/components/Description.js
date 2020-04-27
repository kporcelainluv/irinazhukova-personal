import React from "react";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";

const lessonListStyles = makeStyles({
  heading: {
    fontSize: "24px",
    lineHeight: "34px",
    letterSpacing: "-0.2px",
    width: " 280px",
    margin: "20px auto 10px"
  },
  listItem: {
    padding: "6px 16px 6px 0"
  }
});
export const Description = ({ list, heading, base = undefined }) => {
  const classes = lessonListStyles();
  return (
    <div>
      <Typography variant="h2" display={"block"} className={classes.heading}>
        {heading}
      </Typography>
      <List variant="h3" display={"block"}>
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
