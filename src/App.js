import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import "./App.scss";

import rootReducer from './reducers';
import Home from './pages/Home';

const store = createStore(rootReducer);

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:year" component={Home} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;