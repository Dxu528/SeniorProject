import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Games from './components/Games';
import Products from './components/pages/Products';
import Login from './components/pages/LoginPage';
import SignUp from './components/pages/SignUp';
import PostPage from './components/pages/PostPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/games' className='games' component={Games} />
          <Route path='/login' component={Login}/>
          <Route path='/postPage' component={PostPage}/>
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
