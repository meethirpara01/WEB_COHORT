import { useState } from 'react';
import FaceExpressionDetector from './components/FaceExpressionDetector'
import Nav from './nav';
import './app.css'
import MoodSongs from './components/MoodSong';

function App() {

  const [Songs, setSongs] =   useState([]);

  return (
    <div className='app'>
      <Nav />
      <FaceExpressionDetector SetSongs = {setSongs} />
      <MoodSongs Songs = {Songs} />
    </div>
  )
}

export default App;
