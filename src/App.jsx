import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';
import ToDoList from './Pages/ToDoList';

function App() {
  
  return (
    <Router>
      <div className='main-div'>
        <Header />
        <div className='body '>
          <Switch>
            <Route path='/' exact component={ToDoList}/>
            
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
