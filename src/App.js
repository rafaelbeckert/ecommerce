import React from 'react';
import {Route , link} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = (props) => (
  <div><h1>Hats Page</h1></div>
);

function App() {
  return (
    <div>
      <Route exact={true} path={'/'} component={HomePage}/>
      <Route path={'/hats'} component={HatsPage}/>
    </div>
  );
}

export default App;
