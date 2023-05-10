import { MusicVideoContext } from '../App';
import { LiveVideoContext } from '../App';
import { btsVideoContext } from '../App';
import { InterviewVideoContext } from '../App';
import React, {useContext} from 'react'

const Content = () => {
    const musicVideoData = useContext(MusicVideoContext)
    const liveVideoData = useContext(LiveVideoContext)
    const btsVideoData = useContext(btsVideoContext)
    const interviewVideoData = useContext(InterviewVideoContext)
    let musicVideoSrc = "https://www.youtube.com/embed/" + musicVideoData.musicVideo
    let liveVideoSrc = "https://www.youtube.com/embed/" + liveVideoData.liveVideo
    let btsVideoSrc = "https://www.youtube.com/embed/" + btsVideoData.btsVideo
    let interviewVideoSrc = "https://www.youtube.com/embed/" + interviewVideoData.interviewVideo

    if (musicVideoData.musicVideo !== "")
    {
    return(
        <div id="Content">
            <iframe title="iframe" width ="640" height="360" allowFullScreen = {true} src= {musicVideoSrc} ></iframe>
            <iframe title="iframe" width ="640" height="360" allowFullScreen = {true} src= {liveVideoSrc} ></iframe>
            <iframe title="iframe" width ="640" height="360" allowFullScreen = {true} src= {btsVideoSrc} ></iframe>
            <iframe title="iframe" width ="640" height="360" allowFullScreen = {true} src= {interviewVideoSrc} ></iframe>
        </div>
    )
    }
    else
    return
}

export default Content