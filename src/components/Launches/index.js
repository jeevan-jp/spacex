import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Axios from 'axios';

import baseUrl from '../../utils/baseUrl';
import Launch from './Launch';
import Loader from '../Loading';

function Launches(props) {
  const launchYear = useSelector(state => state.selectedYear);
  const filters = useSelector(state => state.filters);

  const [launchData, setLaunchData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(launchYear)
    if(!loading) setLoading(true);

    let url = `${baseUrl}?limit=100`;
    if(launchYear && filters.yearFilter) url += `&launch_year=${launchYear}`;
    if(filters.launchSuccess) url += `&launch_success=${true}`;
    if(filters.landingSuccess) url += `&land_success=${true}`;

    Axios
      .get(url)
      .then(({ data }) => {
        setLaunchData(data);
        setLoading(false);
      });
  }, [launchYear, filters]);

  if(loading) return <Loader />

  return (
    <div>
      <h1>Launches</h1>
      <CardContainer>
        { launchData.map((missionDetails, i) => <Launch details={missionDetails} key={i} />) }
      </CardContainer>
    </div>
  )
}

export default Launches;

const CardContainer = styled.div`
  display: grid;

  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 1044px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;