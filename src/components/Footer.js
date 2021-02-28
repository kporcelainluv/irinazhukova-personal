import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import { contacts } from "../consts";

const footerStyles = makeStyles({
  container: {
    marginTop: "50px"
  },
  root: {
    flexGrow: 1,
    margin: "20px 0",
    height: "50px"
  },
  tel: {
    marginTop: "20px",
    textDecoration: "none",
    fontSize: "25px",
    lineHeight: "30px",
    fontWeight: "800",
    color: "#393c2b",
    display: "block"
  },
  link: {
    fontWeight: "400",
    textTransform: "uppercase",
    listStyleType: "none",
    cursor: "pointer",
    fontSize: "13px",
    lineHeight: "17px",
    alignSelf: "flex-start",
    flex: "1 1 50%",
    marginBottom: 0
  },
  copyright: {
    opacity: "0.3",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "21px",
    margin: "18px 0"
  }
});

export const Footer = () => {
  const styles = footerStyles();
  return (
    <Container
      classes={{
        root: styles.container
      }}
    >
      <Link
        href="tel:+79036911638"
        classes={{
          root: styles.tel
        }}
        underline="none"
      >
        +7 (903) 691-16-38
      </Link>
      <Box display="flex" justifyContent="center">
        <Grid
          container
          className={styles.root}
          spacing={2}
          justify={"center"}
          direction={"column"}
        >
          {contacts.map(contact => {
            return (
              <Grid key={contact.name} className={styles.link}>
                <Link href={contact.link}>{contact.name}</Link>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      <Typography variant="h5" display={"block"}>
        © 2021 Ирина Жукова
      </Typography>
    </Container>
  );
};
