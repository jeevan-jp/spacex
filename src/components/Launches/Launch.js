import React from 'react';

function Launch(props) {
  const {
    mission_name,
    flight_number,
    mission_id,
    launch_year,
    launch_success,
    links
  } = props.details;

  return (
    <div className="material-card">
      <img
        src={links.mission_patch_small}
        width={"100%"}
        height={"256px"}
        alt="mission logo"
        draggable="false"
      />
      <p className={"mission-name"}>{mission_name} #{flight_number}</p>
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
            <td>{"No Data"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Launch;