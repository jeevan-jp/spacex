import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import actions from '../../actions';

const allYears = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

function Filters(props) {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters);

  const turnOnLaunchFilter = () => {
    dispatch(actions.filters.launchSuccess(true));
  }

  const turnOffLaunchFilter = () => {
    dispatch(actions.filters.launchSuccess(false));
  }

  const turnOnLandFilter = () => {
    dispatch(actions.filters.landingSuccess(true));
  }

  const turnOffLandFilter = () => {
    dispatch(actions.filters.landingSuccess(false));
  }

  const handleYearChange = (year) => {
    console.log(year)
    if(!filters.yearFilter) {
      dispatch(actions.filters.yearFilter(true));
    }
    props.history.push(`/${year}`);
  }

  return (
    <Container>
      <FilterContainer>
        <Label>Launch Date</Label>
        <hr />
        <ButtonContainer>
          {
            allYears.map((year, i) => (
              <Button
                className="btn-primary"
                key={'btn' + i}
                onClick={() => handleYearChange(year)}
                active={year === parseInt(props.match.params.year, 10)}
              >{year}</Button>
            ))
          }
        </ButtonContainer>

        <Label>Successful Launch</Label>
        <hr />
        <ButtonContainer>
          <Button
            className="btn-primary"
            onClick={turnOnLaunchFilter}
            active={filters.launchSuccess}
          >true</Button>
          <Button
            className="btn-primary"
            onClick={turnOffLaunchFilter}
            active={filters.launchSuccess !== null && filters.launchSuccess === false}
          >false</Button>
        </ButtonContainer>


        <Label>Successful Land</Label>
        <hr />
        <ButtonContainer>
          <Button
            className="btn-primary"
            onClick={turnOnLandFilter}
            active={filters.landingSuccess}
          >true</Button>
          <Button
            className="btn-primary"
            onClick={turnOffLandFilter}
            active={filters.landingSuccess !== null && filters.landingSuccess === false}
          >false</Button>
        </ButtonContainer>
      </FilterContainer>
    </Container>
  )
}

export default Filters;

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem 1rem;
`;

const FilterContainer = styled.div`
  padding: 1rem;
  padding-top: 0;
  min-width: 150px;
  background: #fff;
  border-radius: 8px;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;
  background: #fff;
`;

const Label = styled.p`
  text-align: center;
  margin-bottom: 0;
`;

const Button = styled.button`
  background: ${({active}) => active ? '#7cb900' : '#c5e09c'};
  user-select: none;
`;