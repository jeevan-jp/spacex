import React from 'react';
import styled from 'styled-components';

import Filters from './components/Filters';
import Launches from './components/Launches';

import "./App.scss";

function App() {
  return (
    <RootContainer>
      <Heading>SpaceX Launch Programs</Heading>
      <Container>
        <Filters />
        <Launches />
      </Container>
    </RootContainer>
  );
}

export default App;

const RootContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  margin-left: 2rem;
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