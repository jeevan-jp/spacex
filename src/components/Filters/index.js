import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import actions from '../../actions';

const allYears = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

function Filters(props) {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters);
  console.log(filters)

  const handleYear = (year) => {
    console.log(year)
    if(!filters.yearFilter) {
      dispatch(actions.filters.yearFilter(true));
    }
    dispatch(actions.actionYear.updateYear(year));
  }

  const toggleLaunchFilter = (e) => {
    dispatch(actions.filters.launchSuccess(!filters.launchSuccess));
  }

  const toggleLandFilter = (e) => {
    dispatch(actions.filters.landingSuccess(!filters.landingSuccess));
  }

  return (
    <div>
      <div>Filters</div>
      <FilterContainer>
        {
          allYears.map((year, i) => (
            <Button
              key={'btn' + i}
              onClick={() => handleYear(year)}
            >{year}</Button>
          ))
        }
        <div>
          <input type={"checkbox"} onChange={toggleLaunchFilter} checked={filters.launchSuccess} />
          <input type={"checkbox"} onChange={toggleLandFilter} checked={filters.landingSuccess} />
        </div>
      </FilterContainer>
    </div>
  )
}

export default Filters;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Button = styled.button`
  display: flex;
  background: #40216f;
  margin: 4px;
  border: none;
  padding: 4px 6px;
  color: #fff;
  cursor: pointer;
`;