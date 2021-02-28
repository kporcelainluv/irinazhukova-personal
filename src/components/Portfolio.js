import React from "react";
import withInstagramFeed from "origen-react-instagram-feed";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

const portfolioStyles = makeStyles({
  wrapper: {
    padding: 0
  },
  image: {
    width: "100%",
    height: "100%"
  },
  wrap: {
    ["@media (min-width:960px)"]: {
      flexGrow: 0,
      maxWidth: "50%",
      flexBasis: "50%"
    }
  },
  heading: {
    fontSize: "17px",
    lineHeight: "24px",
    letterSpacing: "-0.13px",
    textTransform: "uppercase",
    color: "#474745",
    display: "flex",
    justifyContent: "center",
    marginBottom: '12px'
  },
  subheading: {
    color: "#474745",
    display: "flex",
    justifyContent: "center",
    fontSize: "38px",
    lineHeight: "60px",
    letterSpacing: "-0.3px",
    textAlign: "center"
  }
});

export const InstaGrid = withInstagramFeed(({ media, account }) => {
  const styles = portfolioStyles();
  return (
    <div>
      <Typography className={styles.heading}>INSTAGRAM</Typography>
      <Grid container className={styles.wrapper}>
        {media &&
          media.map(({ displayImage, id, postLink, accessibilityCaption }) => (
            <Grid
              item
              xs={6}
              md={2}
              key={id || displayImage}
              className={styles.wrap}
            >
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
    </div>
  );
});
