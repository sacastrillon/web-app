import React from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import CustomLayout from './containers/CustomLayout';
import BaseRouter from './Routes';

function App(): JSX.Element {
  return (
    <div className="App">
      <Router>
        <CustomLayout>
          <BaseRouter/>
        </CustomLayout>
      </Router>
      
    </div>
  );
}

export default App;
