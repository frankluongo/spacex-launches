import React from "react";

import Layout from "./Layout/DefaultLayout";

import "../scss/styles.css";
import Heading from "./Components/PageHeading";
import Container from "./Components/Container";
import LaunchesInterface from "./Components/LaunchesInterface";

const App = () => {
  return (
    <Layout>
      <Container>
        <Heading />
        <LaunchesInterface />
      </Container>
    </Layout>
  );
};

export default App;
