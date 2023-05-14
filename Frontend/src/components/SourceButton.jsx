import React, {useContext} from 'react'
import { InputContext, btsVideoContext, LiveVideoContext, InterviewVideoContext, WikiContext, 
        BtsButtonContext, LiveButtonContext, InterviewButtonContext, WikiButtonContext } from "../App"

const SourceButton = (props) => {
    const inputData = useContext(InputContext)
    const btsVideoData = useContext(btsVideoContext)
    const liveVideoData = useContext(LiveVideoContext)
    const interviewVideoData = useContext(InterviewVideoContext)
    const wikiData = useContext(WikiContext)

    const btsButtonValue = useContext(BtsButtonContext)
    const liveButtonValue = useContext(LiveButtonContext)
    const interviewButtonValue = useContext(InterviewButtonContext)
    const wikiButtonValue = useContext(WikiButtonContext)
    
    const btsVideoSearch = () => {
        fetch(`http://localhost:3001/bts-video/${inputData.input}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            btsVideoData.setBtsVideo(data.items[0].id.videoId)
        })
      }

    const liveVideoSearch = () => {
        fetch(`http://localhost:3001/live-video/${inputData.input}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            liveVideoData.setLiveVideo(data.items[0].id.videoId)
        })
      }

      const interviewVideoSearch = () => {
        fetch(`http://localhost:3001/interview-video/${inputData.input}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            interviewVideoData.setInterviewVideo(data.items[0].id.videoId)
        })
      }

      const wikiSearch = () => {
        fetch(`http://localhost:3001/wiki/${inputData.input}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            wikiData.setWiki(data.query.search[0].pageid)
        })
      }

    const ShowSrc = () => {
        if (props.label === "BTS")
        {
            btsVideoSearch()
            btsButtonValue.setBtsButtonBool(true)
        }
        else if (props.label === "LIVE")
        {
            liveVideoSearch()
            liveButtonValue.setLiveButtonBool(true)
        }
        else if (props.label === "TALKS")
        {
            interviewVideoSearch()
            interviewButtonValue.setInterviewButtonBool(true)
        }
        else if (props.label === "WIKI")
        {
            wikiSearch()
            wikiButtonValue.setWikiButtonBool(true)
        }
    }
    return (
        <button onClick={ShowSrc}> {props.label}</button>
    )
}

export default SourceButton