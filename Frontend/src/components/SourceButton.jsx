import React, {useContext} from 'react'
import { BtsButtonContext, LiveButtonContext, InterviewButtonContext, WikiButtonContext } from "../App"

const SourceButton = (props) => {
    const btsButtonValue = useContext(BtsButtonContext)
    const liveButtonValue = useContext(LiveButtonContext)
    const interviewButtonValue = useContext(InterviewButtonContext)
    const wikiButtonValue = useContext(WikiButtonContext)
    const CallSrc = () => {
        if (props.label === "BTS")
        {
            btsButtonValue.setBtsButtonBool(true)
        }
        else if (props.label === "LIVE")
        {
            liveButtonValue.setLiveButtonBool(true)
        }
        else if (props.label === "TALKS")
        {
            interviewButtonValue.setInterviewButtonBool(true)
        }
        else if (props.label === "WIKI")
        {
            wikiButtonValue.setWikiButtonBool(true)
        }
    }
    return (
        <button onClick={CallSrc}> {props.label}</button>
    )
}

export default SourceButton