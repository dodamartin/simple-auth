import React from 'react';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import UserAuthentication from './components/UserAuthentification';
import UserInformation from './components/UserInfomartion';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path = '/' element = {<UserAuthentication/>}/>
            <Route path = '/user-info' element = {<UserInformation /> }/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
