import React from "react";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";

export const Description = ({ list, heading }) => {
  return (
    <div>
      <Typography variant="h6" display={"block"}>
        {heading}
      </Typography>
      <List variant="h6" display={"block"}>
        {list.map(element => {
          return (
            <div>
              <ListItem key={element}>{element}</ListItem>
            </div>
          );
        })}
      </List>
    </div>
  );
};
