import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import BookList from './components/BookList';

function App() {
  return (
    <div>
        <NavBar />
      <div className="container">
        <BookList />
      </div>
    </div>
  );
}

export default App;
