import React from 'react';
import styled from 'styled-components';

import Filters from './components/Filters';
import Launches from './components/Launches';

function App() {
  return (
    <React.Fragment>
      <h1>SpaceX Launch Programs</h1>
      <Container>
        <Filters />
        <Launches />
      </Container>
    </React.Fragment>
  );
}

export default App;

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