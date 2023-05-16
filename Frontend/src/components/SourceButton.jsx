import React, {useContext} from 'react'
import { InputContext, ArtistInputContext, btsVideoContext, LiveVideoContext, InterviewVideoContext, WikiContext, 
        BtsButtonContext, LiveButtonContext, InterviewButtonContext, WikiButtonContext, PlaylistContext, PlaylistButtonContext } from "../App"

const SourceButton = (props) => {
    const inputData = useContext(InputContext)
    const artistInputData = useContext(ArtistInputContext)

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

      const playlistSearch = () => {
        fetch(`http://localhost:3001/playlist/${artistInputData.artistInput}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            playlistData.setPlaylist(data.items[0].id.videoId)
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
        if (props.label === "BTS" && btsButtonValue.btsButtonBool === false)
        {
            btsVideoSearch()
            btsButtonValue.setBtsButtonBool(true)
        }
        else if (props.label === "LIVE" && liveButtonValue.liveButtonBool === false)
        {
            liveVideoSearch()
            liveButtonValue.setLiveButtonBool(true)
        }
        else if (props.label === "TALKS" && interviewButtonValue.interviewButtonBool === false)
        {
            interviewVideoSearch()
            interviewButtonValue.setInterviewButtonBool(true)
        }
        else if (props.label === "MIX" && playlistButtonValue.playlistButtonBool === false)
        {
            playlistSearch()
            playlistButtonValue.setPlaylistButtonBool(true)
        }
        else if (props.label === "WIKI" && wikiButtonValue.wikiButtonBool === false)
        {
            wikiSearch()
            wikiButtonValue.setWikiButtonBool(true)
        }
    }
    return (
        <button onClick={ShowSrc}> SHOW </button>
    )
}

export default SourceButton