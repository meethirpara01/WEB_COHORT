import React, { useState } from 'react'
import "../components/MoodSongs.css"

const MoodSongs = ({Songs}) => {

    const [isPlaying, setisPlaying] = useState(null);

    const handelPlayPause = (index) => 
    {
        if (isPlaying === index) 
        {
            setisPlaying(null);
        }
        else
        {
            setisPlaying(index);
        }
    }
    
  return (
    <div className='mood-song'>
        <h2>Recommended Songs</h2>
        {Songs.map((song, index) => (
            <div key={index} className='song '>
                <div className='title'>
                    <h3>{song.title}</h3>
                    <h3>{song.artist}</h3>
                </div>
                <div className="play-pause-button">
                    {
                        isPlaying === index &&
                        <audio src={song.audio} style={{display: 'none'}} autoPlay={isPlaying === index}></audio>
                    }
                    <button onClick={() => handelPlayPause(index)}>
                        {isPlaying === index ? <i class="ri-pause-mini-line"></i> : <i class="ri-play-circle-fill"></i>}
                    </button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default MoodSongs