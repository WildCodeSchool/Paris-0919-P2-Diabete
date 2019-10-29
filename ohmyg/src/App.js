import React from 'react';
// import ContentFrame from './components/pages/homepage/ContentFrame';
// import Footer from './components/layout/Footer';
// import HeaderMobile from './components/layout/HeaderMobile';
// import HomeNavButtons from './components/pages/homepage/HomeNavButtons';
// import InsulinCalculation from './components/pages/calculation/InsulinCalculation';
// import Navbar from './components/layout/Navbar';
import Calculation from './components/pages/calculation/Calculation';
import Homepage from './components/pages/homepage/Homepage';
import {Switch, Route} from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <div>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/calculation" component={Calculation} />
        </Switch>
    </div>
  );
}

export default App;
