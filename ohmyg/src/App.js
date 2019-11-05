import React from 'react';
import Calculation from './components/pages/calculation/Calculation';
import Meal from './components/pages/meal/Meal';
import News from './components/pages/news/News';
import NutritionInfo from './components/pages/nutritionInfo/NutritionInfo';
import Homepage from './components/pages/homepage/Homepage';
import {Switch, Route} from "react-router-dom";
import './App.css';


const App = () => {
  return (
    <div>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/calculation" component={Calculation} />
            <Route path="/meal" component={Meal} />
            <Route path="/news" component={News} />
            <Route path="/nutritioninfo" component={NutritionInfo} /> 
        </Switch>
    </div>
  );
}

export default App;
