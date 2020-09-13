import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import actions from '../../actions';

const allYears = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

function Filters(props) {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters);
  const launchYear = useSelector(state => state.selectedYear);
  // console.log(filters)

  const toggleLaunchFilter = (e) => {
    dispatch(actions.filters.launchSuccess(!filters.launchSuccess));
  }

  const toggleLandFilter = (e) => {
    dispatch(actions.filters.landingSuccess(!filters.landingSuccess));
  }

  const handleYearChange = (year) => {
    console.log(year)
    if(!filters.yearFilter) {
      dispatch(actions.filters.yearFilter(true));
    }
    dispatch(actions.actionYear.updateYear(year));
  }

  console.log('filters.yearFilter', filters.yearFilter);

  return (
    <Container>
      <FilterContainer>
        {
          allYears.map((year, i) => (
            <Button
              key={'btn' + i}
              onClick={() => handleYearChange(year)}
              active={year === launchYear}
            >{year}</Button>
          ))
        }
        <div>
          <input type={"checkbox"} onChange={toggleLaunchFilter} checked={filters.launchSuccess} />
          <input type={"checkbox"} onChange={toggleLandFilter} checked={filters.landingSuccess} />
        </div>
      </FilterContainer>
    </Container>
  )
}

export default Filters;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FilterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  max-width: 80%;
  background: #fff;
`;

const Button = styled.button`
  display: flex;
  background: ${({active}) => active ? '#7cb900' : '#c5e09c'};
  margin: 4px;
  border: none;
  padding: 4px 6px;
  cursor: pointer;
`;