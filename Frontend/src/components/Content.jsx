import { MusicVideoContext } from '../App';
import { LyricVideoContext } from '../App';
import { LiveVideoContext } from '../App';
import { btsVideoContext } from '../App';
import { InterviewVideoContext } from '../App';
import { WikiContext } from '../App';
import React, {useContext} from 'react'
import '../Styles.css'

const Content = () => {
    const musicVideoData = useContext(MusicVideoContext)
    const lyricVideoData = useContext(LyricVideoContext)
    const liveVideoData = useContext(LiveVideoContext)
    const btsVideoData = useContext(btsVideoContext)
    const interviewVideoData = useContext(InterviewVideoContext)
    const wikiData = useContext(WikiContext)
    let musicVideoSrc = "https://www.youtube.com/embed/" + musicVideoData.musicVideo
    let lyricVideoSrc = "https://www.youtube.com/embed/" + lyricVideoData.lyricVideo
    let btsVideoSrc = "https://www.youtube.com/embed/" + btsVideoData.btsVideo
    let liveVideoSrc = "https://www.youtube.com/embed/" + liveVideoData.liveVideo
    let interviewVideoSrc = "https://www.youtube.com/embed/" + interviewVideoData.interviewVideo
    let wikiSrc = "https://en.wikipedia.org/?curid=" + wikiData.wiki

    if (wikiData.wiki !== "")
    {
    return(
        <div id="Content">
            <iframe id= "music-video" title="musicVideo" allowFullScreen = {true} src= {musicVideoSrc} ></iframe>
            <iframe id = "lyric-video" title="lyric" allowFullScreen = {true} src= {lyricVideoSrc} ></iframe>
            <iframe title="btsVideo" allowFullScreen = {true} src= {btsVideoSrc} ></iframe>
            <iframe title="liveVideo" allowFullScreen = {true} src= {liveVideoSrc} ></iframe>
            <iframe title="interviewVideo" allowFullScreen = {true} src= {interviewVideoSrc} ></iframe>
            <h1 className='Title-Headers'>WIKI</h1>
            <iframe id = "wiki" title="wiki" src = {wikiSrc}></iframe>
        </div>
    )
    }
    else
    return
}

export default Content