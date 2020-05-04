import React, {Component} from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
// import HamburgerNav from './src/HamburgerNav';
import store from './store';
import Login from './src/Login';
import Des from './src/Des';
import FirstPage from './src/FirstPage';
import SignUp from './src/SignUp'


const App = () => {
   return (
    <Provider store={store}>
      {/* <SvgDesign /> */}
      {/* <Des /> */}
      {/* <FirstPage /> */}
      {/* <Login /> */}
      <SignUp />
     {/* <HamburgerNav/> */}
     </Provider>
   );
 }
 export default App
