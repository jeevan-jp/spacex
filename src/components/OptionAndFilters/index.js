import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import actions from '../../actions';

const allYears = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

function OptionAndFilters(props) {
  const dispatch = useDispatch();

  const handleYear = (year) => {
    console.log(year)
    dispatch(actions.actionYear.updateYear(year));
  }

  return (
    <div>
      <div>OptionAndFilters</div>
      <FilterContainer>
        {
          allYears.map((year, i) => (
            <Button key={'button' + i} onClick={() => handleYear(year)}>{year}</Button>
          ))
        }
      </FilterContainer>
    </div>
  )
}

export default OptionAndFilters;

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