import React from 'react';
import styled from 'styled-components';

import Filters from './components/Filters';
import Launches from './components/Launches';

function App() {
  return (
    <Container>
      <Filters />
      <Launches />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 4fr;
  background: #f1f6f9;
`;