import React from 'react';
import styled from 'styled-components';

function Launch(props) {
  const { details } = props;

  return (
    <Card>
      <h3>{details.mission_name}</h3>
      <div>{details.details}</div>
    </Card>
  )
}

export default Launch;

const Card = styled.div`
  padding: 1rem;
  margin: 0 1rem 1rem 0;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;