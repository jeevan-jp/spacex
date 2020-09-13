import React from 'react';

import Filters from '../../components/Filters';
import Launches from '../../components/Launches';

function Home(props) {
  return (
    <div className="container-home">
      <header className="header">
        <h1>SpaceX Launch Programs</h1>
      </header>
      <div className="content-container-home">
        <Filters {...props} />
        <Launches {...props} />
      </div>
      <footer className="footer">
        <b>Developed By - Jeevan Praksah</b>
      </footer>
    </div>
  );
}

export default Home;