import React from 'react';
import './App.css';
import NavigationBar from './navigation';
import Posts from './posts'
import ContactForm from './contact';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <ContactForm />
      <Posts />
    </div>
  );
}

export default App;
