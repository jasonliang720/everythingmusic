import React, {useContext} from 'react'
import { MusicVideoContext } from '../App';
import { LyricVideoContext } from '../App';

const Official = () => {
    const musicVideoData = useContext(MusicVideoContext)
    const lyricVideoData = useContext(LyricVideoContext)
    let musicVideoSrc = "https://www.youtube.com/embed/" + musicVideoData.musicVideo
    let lyricVideoSrc = "https://www.youtube.com/embed/" + lyricVideoData.lyricVideo
    return (
        <div id="Official">
            <iframe id= "music-video" title="musicVideo" allowFullScreen = {true} src= {musicVideoSrc} ></iframe>
            <iframe id = "lyric-video" title="lyric" allowFullScreen = {true} src= {lyricVideoSrc} ></iframe>
        </div>
    )
}

export default Official