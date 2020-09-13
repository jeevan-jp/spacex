import React from 'react';

function Loader(props) {
  return (
    <div className={"loader-container"}>
      <img src={"/puffLoader.svg"} alt="loading..." />
    </div>
  )
}

export default Loader;