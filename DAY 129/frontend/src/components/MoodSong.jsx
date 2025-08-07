import React, { useState } from 'react'
import "../components/MoodSongs.css"

const MoodSongs = () => {
    const [Songs, setSongs] =   useState([
        {
            title: "test_title",
            artise: "test_artist",
            url: "test_url"
        },
        {
            title: "test_title",
            artise: "test_artist",
            url: "test_url"
        },
        {
            title: "test_title",
            artise: "test_artist",
            url: "test_url"
        },
    ])
  return (
    <div className='mood-song'>
        <h2>Recommended Songs</h2>
        {Songs.map((song, index) => (
            <div key={index} className='song '>
                <div className='title'>
                    <h3>{song.title}</h3>
                    <h3>{song.artise}</h3>
                </div>
                <div className="play-pause-button">
                    <i class="ri-pause-large-line"></i>
                    <i class="ri-play-circle-fill"></i>
                </div>
                
            </div>
        ))}
    </div>
  )
}

export default MoodSongs