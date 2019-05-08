import React from 'react';
import AppNavbar from './components/AppNavbar';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppSearchbar from './components/AppSearchbar';
import AppSearchList from './components/AppSearchList';
import AppSavedList from './components/AppSavedList';

const App = () => {
    return (
        <div className="App">
            <AppNavbar />
            <Route exact path="/" component={AppSearchbar}></Route>
            <Route exact path="/" component={AppSearchList}></Route>
            <Route exact path="/saved" component={AppSavedList}></Route>
        </div>
    );
}

export default App;
