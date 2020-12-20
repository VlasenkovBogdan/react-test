import React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Navigation from './components/navigation';


const App = () => {

  return (
<Router>
  <Navigation/>
</Router>
  )
};

export default App;
