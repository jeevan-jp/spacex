import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import actions from './actions';
import OptionAndFilters from './components/OptionAndFilters';
import Launches from './components/Launches';

function App() {
  const [launchYear] = useState(new Date().getFullYear());

  useEffect(() => {
    dispatch(actions.actionYear.updateYear(launchYear))
  }, [launchYear]);

  const year = useSelector(state => state.selectedYear);
  const dispatch = useDispatch();

  return (
    <Container>
      <OptionAndFilters />
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