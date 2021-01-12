import './App.css';

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Static Content</Link>
            </li>
            <li>
              <Link to="/server-content">With Server Content</Link>
            </li>
            <li>
              <Link to="/server-content-with-db">With Server Content with DB</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/server-content-with-db">
            <ServerContentWithDb />
          </Route>
          <Route path="/server-content">
            <ServerContent />
          </Route>
          <Route path="/">
            <StaticContent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function StaticContent() {
  return (
    <>
      <div className="jumbotron text-center">
        <h1 className="display-3">Hello World!</h1>
      </div>
    </>
  );
}

function ServerContent() {
  const url = 'http://rodo-sdm-api.xxx.sdm.network';
  const [message, setMessage] = useState('');

  fetch(`${url}/hello`)
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(e => setMessage(`Server not available, url: ${url}`))

  return (
    <>
      <div className="jumbotron text-center">
        <h1 className="display-3">{message}</h1>
      </div>
    </>
  );
}

function ServerContentWithDb() {
  const url = 'http://rodo-sdm-full-api.xxx.sdm.network';
  const [message, setMessage] = useState('');

  fetch(`${url}/hello`)
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(e => setMessage(`Server not available, url: ${url}`))

  return (
    <>
      <div className="jumbotron text-center">
        <h1 className="display-3">{message}</h1>
      </div>
    </>
  );
}


