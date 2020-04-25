import React from "react";
import withInstagramFeed from "origen-react-instagram-feed";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";

const portfolioStyles = makeStyles({
  wrapper: {
    padding: 0
  },
  image: {
    width: "100%",
    height: "100%"
  }
});

export const InstaGrid = withInstagramFeed(({ media, account }) => {
  const styles = portfolioStyles();
  return (
    <Grid container className={styles.wrapper}>
      {media &&
        media.map(({ displayImage, id, postLink, accessibilityCaption }) => (
          <Grid item xs={6} md={2} key={id || displayImage}>
            <ButtonBase
              href={postLink || `https://www.instagram.com/${account}/`}
            >
              <img
                src={displayImage}
                alt={accessibilityCaption || "Instagram picture"}
                className={styles.image}
              />
            </ButtonBase>
          </Grid>
        ))}
    </Grid>
  );
});
