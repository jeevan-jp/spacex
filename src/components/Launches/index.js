import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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
    <div className="card-container">
      { launchData.map((missionDetails, i) => <Launch details={missionDetails} key={i} />) }
      { launchData.length === 0 && <h3>No Data</h3> }
    </div>
  );
}

export default Launches;