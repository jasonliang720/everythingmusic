import React, {useContext} from 'react'
import { InterviewVideoContext } from '../App';

const Interview = () => {
    const interviewVideoData = useContext(InterviewVideoContext)
    let interviewVideoSrc = "https://www.youtube.com/embed/" + interviewVideoData.interviewVideo
    return (
        <div id='Interview'>
            <h1 className='Title-Headers'>INTERVIEWS</h1>
            <iframe title="interviewVideo" allowFullScreen = {true} src= {interviewVideoSrc} ></iframe>
        </div>
    )
}

export default Interview