import React, {useContext} from 'react'
import { LiveVideoContext } from '../App';

const Live = () => {
    const liveVideoData = useContext(LiveVideoContext)
    let liveVideoSrc = "https://www.youtube.com/embed/" + liveVideoData.liveVideo
    return (
        <div id='Live'>
            <h1 className='Title-Headers'>LIVE</h1>
            <iframe title="liveVideo" allowFullScreen = {true} src= {liveVideoSrc} ></iframe>
        </div>
    )
}

export default Live