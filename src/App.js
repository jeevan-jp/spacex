import React from 'react';
import styled from 'styled-components';

import Filters from './components/Filters';
import Launches from './components/Launches';

import "./App.scss"

function App() {
  return (
    <React.Fragment>
      <Heading>SpaceX Launch Programs</Heading>
      <Container>
        <Filters />
        <Launches />
      </Container>
    </React.Fragment>
  );
}

export default App;

const Heading = styled.h2`
  margin-left: 1rem;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 4fr;
  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    & > div:last-child > div {
      margin-left: 1rem;
    }
  }
`;