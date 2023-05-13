import React, {useContext} from 'react'
import { btsVideoContext } from '../App';

const Bts = () => {
    const btsVideoData = useContext(btsVideoContext)
    let btsVideoSrc = "https://www.youtube.com/embed/" + btsVideoData.btsVideo
    return (
        <div id='Bts'>
            <h1 className='Title-Headers'>BTS</h1>
            <iframe title="btsVideo" allowFullScreen = {true} src= {btsVideoSrc} ></iframe>
        </div>
    )
}

export default Bts