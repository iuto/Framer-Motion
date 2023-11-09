// src/App.js
import React from 'react';
import ProfileCard from './components/ProfileCard'; 
import './App.css'; 

function App() {
  return (
    <div className="App">
      <ProfileCard /> {/* ProfileCard コンポーネントをレンダリング */}
    </div>
  );
}

export default App;