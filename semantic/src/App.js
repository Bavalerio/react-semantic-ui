import React from 'react';
import './App.css';
import NavigationBar from './navigation';
import Posts from './posts'

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Posts />
    </div>
  );
}

export default App;
