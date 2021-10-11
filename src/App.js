import React from "react";

import BmiCalculator from "./Components/bmi-calculator.component";
import WelcomePage from './Components/welcome-page.component';

import './App.css';

function App() {
  return (
    <div>
      <WelcomePage />
      <BmiCalculator />
    </div>
    
  );
}

export default App;
