import React from 'react';
import styled from 'styled-components';

function Launch(props) {
  const {
    mission_name,
    flight_number,
    mission_id,
    launch_year,
    launch_success,
    links
  } = props.details;
  console.log(props.details.launch_landing)

  return (
    <Card>
      <img src={links.mission_patch_small} width={"100%"} height={"256px"} alt="mission logo" />
      <h4>{mission_name} #{flight_number}</h4>
      <table>
        <tbody>
          <tr>
            <td>Mission Ids</td>
            <td>{ mission_id.length ? mission_id.join(", ") : "-"  }</td>
          </tr>
          <tr>
            <td>Launch Year</td>
            <td>{launch_year}</td>
          </tr>
          <tr>
            <td>Successful Launch</td>
            <td>{launch_success ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <td>Successful Landing</td>
            <td>{launch_year}</td>
          </tr>
        </tbody>
      </table>
    </Card>
  )
}

export default Launch;

const Card = styled.div`
  font-family: sans-serif;
  padding: 1rem;
  margin: 0 1rem 1rem 0;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

  tr {
    font-size: 14px;
  }
  tr td:first-child {
    font-weight: bold;
  }
`;