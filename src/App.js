import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/home/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import ClientDashboard from './components/ClientDashboard/ClientDashboard/ClientDashboard';
import ServiceList from './components/ClientDashboard/ServiceList/ServiceList';
import UserReview from './components/ClientDashboard/UserReview/UserReview';

import AllButton from './fakeData/AllButton';
import Admin from './components/Admin/Admin/Admin';
import AddService from './components/Admin/AddService/AddService';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';


// import ClientDashboard from './components/ClientDashboard/ClientDashboard/ClientDashboard';


export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/order/:service">
            <ClientDashboard></ClientDashboard>
          </PrivateRoute>
          <Route path="/serviceList">
            <ServiceList></ServiceList>
          </Route>
          <Route path="/review">
            <UserReview></UserReview>
          </Route>
          <Route path="/buttons">
            <AllButton></AllButton>
          </Route>
          <Route path="/admin" >
            <Admin></Admin>
          </Route>
          <Route path="/addService" >
            <AddService></AddService>
          </Route>

          <Route path="/makeAdmin" >
            <MakeAdmin></MakeAdmin>
          </Route>
        </Switch>

      </Router>
    </UserContext.Provider>
  );
}

export default App;
