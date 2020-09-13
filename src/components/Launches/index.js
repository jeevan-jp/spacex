import React, { useState, useEffect, Suspense } from 'react';
import { useSelector } from 'react-redux';
import Axios from 'axios';

import baseUrl from '../../utils/baseUrl';
import Loader from '../Loading';

const Launch = React.lazy(() => import('./Launch'));

function Launches(props) {
  const filters = useSelector(state => state.filters);

  const [launchData, setLaunchData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let url = `${baseUrl}?limit=100`;
    const yearInRoute = props.match.params.year;

    if(yearInRoute) url += `&launch_year=${yearInRoute}`;
    if(filters.launchSuccess) url += `&launch_success=${true}`;
    if(filters.landingSuccess) url += `&land_success=${true}`;

    Axios
      .get(url)
      .then(({ data }) => {
        setLaunchData(data);
        setLoading(false);
      });
  }, [props.match.params, filters]);

  if(loading) return <Loader />

  return (
    <div className="card-container">
      { launchData.map((missionDetails, i) => (
        <Suspense  key={i + 'card'} fallback={<div className="material-card"></div>}>
          <Launch details={missionDetails} />
        </Suspense>
      )) }
      { launchData.length === 0 && <h3>No Data</h3> }
    </div>
  );
}

export default Launches;