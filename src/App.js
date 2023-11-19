// src/App.js
import React from 'react';
import ProfileCard from './components/ProfileCard'; 
import RSSFeedComponent from './components/RSSFeedComponent'; 

function App() {
  return (
    <div className="App">
      <ProfileCard />
      <RSSFeedComponent />
    </div>
  );
}

export default App;