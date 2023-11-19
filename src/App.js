// src/App.js
import React from 'react';
import ProfileCard from './components/ProfileCard'; 
import Article from './components/Article';

function App() {
  return (
    <div className="App bg-gray-100 pt-20 min-h-screen overflow-hidden">
      <ProfileCard />
      <Article />
    </div>
  );
}

export default App;