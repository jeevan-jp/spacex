import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import actions from './actions';

function App() {
  const [launchYear, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    dispatch(actions.actionYear.updateYear(launchYear))
  }, [launchYear]);

  const year = useSelector(state => state.selectedYear);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.actionYear.incrementYear());
  }

  const decrement = () => {
    dispatch(actions.actionYear.decrementYear());
  }

  const handleYearChange = (e) => {
    setYear(e.target.value);
  }

  return (
    <div>
      SpaceX : {year}
      <div style={{display: 'grid', gridGap: '1rem', gridAutoFlow: 'column'}}>
        <button onClick={decrement}>Previous</button>
        {year}
        <button onClick={increment}>Next</button>
        <input onChange={handleYearChange} value={launchYear} />
      </div>
    </div>
  );
}

export default App;
