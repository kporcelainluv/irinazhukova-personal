import React from "react";
import { Container, Box } from "@material-ui/core";
import logo from "./img/iz.png";

export const App = () => {
  return (
    <Container maxWidth="xl">
      <Box>
        <img
          src={logo}
          alt="логотип визажиста ирины жуковой"
          height={30}
          width={84}
        />
      </Box>
    </Container>
  );
};
