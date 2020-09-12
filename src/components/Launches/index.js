import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Axios from 'axios';

import baseUrl from '../../utils/baseUrl';

function Launches(props) {
  const launchYear = useSelector(state => state.selectedYear);
  const filters = useSelector(state => state.filters);
  const dispatch = useDispatch();

  const [launchData, setLaunchData] = useState([]);

  useEffect(() => {
    console.log(launchYear)

    let url = `${baseUrl}?limit=100`;
    if(launchYear && filters.yearFilter) {
      url += `&launch_year=${launchYear}`
    }

    Axios.get(url).then(({ data }) => {
      setLaunchData(data);
    });
  }, [launchYear]);

  return (
    <div>
      <h1>Launches</h1>
      <CardContainer>
        {
          launchData.map((missionDetails, i) => (
            <Launch
              details={missionDetails}
              key={i}
            />
          ))
        }
      </CardContainer>
    </div>
  )
}

function Launch(props) {
  const { details } = props;

  return (
    <Card>
      <h3>{details.mission_name}</h3>
      <div>{details.details}</div>
    </Card>
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

const Card = styled.div`
  padding: 1rem;
  margin: 0 1rem 1rem 0;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;