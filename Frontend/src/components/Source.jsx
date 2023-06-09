import React, {useContext} from 'react'
import { MusicVideoContext, LyricVideoContext, btsVideoContext, LiveVideoContext, InterviewVideoContext, WikiContext } from '../App'
import { BtsButtonContext, LiveButtonContext, InterviewButtonContext, WikiButtonContext, PlaylistContext, PlaylistButtonContext } from "../App"

const Source = (props) => {
    const musicVideoData = useContext(MusicVideoContext)
    const lyricVideoData = useContext(LyricVideoContext)

    const btsVideoData = useContext(btsVideoContext)
    const liveVideoData = useContext(LiveVideoContext)
    const interviewVideoData = useContext(InterviewVideoContext)
    const playlistData = useContext(PlaylistContext)
    const wikiData = useContext(WikiContext)

    const btsButtonValue = useContext(BtsButtonContext)
    const liveButtonValue = useContext(LiveButtonContext)
    const interviewButtonValue = useContext(InterviewButtonContext)
    const playlistButtonValue = useContext(PlaylistButtonContext)
    const wikiButtonValue = useContext(WikiButtonContext)
    let videoSrc = "https://www.youtube.com/embed/"

    if (props.label === "OFFICIAL"){
        if (musicVideoData.musicVideo !== ""){
            return (
                <div id='Official'>
                    <iframe id= "music-video" title="musicVideo" allowFullScreen = {true} src= {videoSrc + musicVideoData.musicVideo} ></iframe>
                    <iframe id = "lyric-video" title="lyric" allowFullScreen = {true} src= {videoSrc + lyricVideoData.lyricVideo} ></iframe>
                </div>
            )
        }
        else {
            return (
                <h1 className='Title-Headers'>ENTER AN ARTIST & A SONG FROM THEM IN THE SEARCH BOX ABOVE<br></br>IN ORDER TO RETURN THEIR ...
                                            <br></br><br></br><br></br>OFFICIAL MUSIC VIDEO <br></br> <br></br> LYRICS <br></br><br></br></h1>
            )
        }
    }
    else if (props.label === "BTS"){
        if (btsButtonValue.btsButtonBool === true)
        {
            return (
                <div id='Bts'>
                    <iframe title="btsVideo" allowFullScreen = {true} src= {videoSrc + btsVideoData.btsVideo} ></iframe>
                </div>
            )
        }
        else 
        {
            return
        }
    }
    else if (props.label === "LIVE") {
        if (liveButtonValue.liveButtonBool === true)
        {
            return (
                <div id='Live'>
                    <iframe title="liveVideo" allowFullScreen = {true} src= {videoSrc + liveVideoData.liveVideo} ></iframe>
                </div>
            )
        }
        else 
        {
            return
        }
    }
    else if (props.label === "TALKS") {
        if (interviewButtonValue.interviewButtonBool === true)
        {
            return (
                <div id='Interview'>
                    <iframe title="interviewVideo" allowFullScreen = {true} src= {videoSrc + interviewVideoData.interviewVideo} ></iframe>
                </div>
            )
        }
        else 
        {
            return
        }
    }
    else if (props.label === "MIX") {
        if (playlistButtonValue.playlistButtonBool === true)
        {
            return (
                <div id='Playlist'>
                    <iframe title="playlist" allowFullScreen = {true} src= {videoSrc + playlistData.playlist} ></iframe>
                </div>
            )
        }
        else 
        {
            return
        }
    }
    else if (props.label === "WIKI") {
        if (wikiButtonValue.wikiButtonBool === true)
        {
            return (
                <div id='Wiki'>
                    <iframe id = "wiki" title="wiki" src = {"https://en.wikipedia.org/?curid=" + wikiData.wiki}></iframe>
                </div>
            )
        }
        else 
        {
            return
        }
    }
}

export default Source