import React from 'react';
import styled from 'styled-components';

function Loader(props) {
  return (
    <Container>
      <img src={"/puffLoader.svg"} alt="loading..." />
    </Container>
  )
}

export default Loader;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;