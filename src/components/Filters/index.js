import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import actions from '../../actions';

const allYears = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

function Filters(props) {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters);

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
    console.log('year', year);
    props.history.push(`/${year}`);
    // dispatch(actions.actionYear.updateYear(year));
  }

  console.log('filters.yearFilter', filters.yearFilter);

  return (
    <Container>
      <ButtonContainer>
        {
          allYears.map((year, i) => (
            <Button
              className="btn-primary"
              key={'btn' + i}
              onClick={() => handleYearChange(year)}
              active={year == props.match.params.year}
            >{year}</Button>
          ))
        }
      </ButtonContainer>
      <CheckBox>
        <label htmlFor="launchSuccess">Successful Launch</label>
        <input type={"checkbox"} id="launchSuccess" onChange={toggleLaunchFilter} checked={filters.launchSuccess} />
      </CheckBox>
      <CheckBox>
        <label htmlFor="landSuccess">Successful Landing</label>
        <input type={"checkbox"} id="landSuccess" onChange={toggleLandFilter} checked={filters.landingSuccess} />
      </CheckBox>
    </Container>
  )
}

export default Filters;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem 1rem;
`;

const FilterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  max-width: 80%;
  background: #fff;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  max-width: 80%;
  background: #fff;
`;

const CheckBox = styled.div`
  margin-top: 8px;
`;

const Button = styled.button`
  background: ${({active}) => active ? '#7cb900' : '#c5e09c'};
`;