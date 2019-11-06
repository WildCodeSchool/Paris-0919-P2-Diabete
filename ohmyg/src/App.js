import React from 'react';


import ContentFrame from './components/pages/homepage/ContentFrame';
import Footer from './components/layout/Footer';
import HeaderMobile from './components/layout/HeaderMobile';
import HomeNavButtons from './components/pages/homepage/HomeNavButtons';
import InsulinCalculation from './components/pages/calculation/InsulinCalculation';
import Navbar from './components/layout/Navbar';
import InfoNutCategories from './components/pages/nutritionInfo/InfoNutCategories';


import './App.css';

const App = () => {
  return (
    <div className="App">
      <InfoNutCategories />
    </div>
  );
}

export default App;
