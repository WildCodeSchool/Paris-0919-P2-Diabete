import React from 'react';

// import {Switch, Route} from "react-router-dom"

import Footer from './components/layout/Footer';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Footer />
      {/* <Switch>
        <Route exact path="/" components={Homepage}/>
        <Route path="/characters" components={ContactUs}/>
      </Switch> */}
    </div>
  )
}

export default App;
