import '../Styles.css';
import React, {useContext} from 'react'
import { InputContext, ArtistInputContext, SongInputContext, MusicVideoContext, LyricVideoContext} from '../App'
import { BtsButtonContext, LiveButtonContext, InterviewButtonContext, WikiButtonContext } from "../App"


const Searchbar = () => {
    const inputData = useContext(InputContext)
    const artistInputData = useContext(ArtistInputContext)
    const songInputData = useContext(SongInputContext)

    const musicVideoData = useContext(MusicVideoContext)
    const lyricVideoData = useContext(LyricVideoContext)

    const btsButtonValue = useContext(BtsButtonContext)
    const liveButtonValue = useContext(LiveButtonContext)
    const interviewButtonValue = useContext(InterviewButtonContext)
    const wikiButtonValue = useContext(WikiButtonContext)

    let tempInput = ""

    const handleSubmit = (event) => {
        event.preventDefault();
        tempInput = artistInputData.artistInput + " " + songInputData.songInput
        inputData.setInput(artistInputData.artistInput + " ~ " + songInputData.songInput)
        btsButtonValue.setBtsButtonBool(false)
        liveButtonValue.setLiveButtonBool(false)
        interviewButtonValue.setInterviewButtonBool(false)
        wikiButtonValue.setWikiButtonBool(false)
        musicVideoSearch()
        lyricVideoSearch()
      }

      const musicVideoSearch = () => {
        fetch(`http://localhost:3001/music-video/${tempInput}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            musicVideoData.setMusicVideo(data.items[0].id.videoId)
        })
      }

      const lyricVideoSearch = () => {
        fetch(`http://localhost:3001/lyric-video/${tempInput}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            lyricVideoData.setLyricVideo(data.items[0].id.videoId)
        })
      }

    return (
        <div id='navbar'>
            <form onSubmit={handleSubmit}>
                <label>ARTIST: 
                    <input 
                        type='text'
                        value={artistInputData.artistInput}
                        onChange={(e) => artistInputData.setArtistInput(e.target.value)}
                    />
                </label>
                <br></br>
                <label>SONG:&nbsp;
                    <input 
                        type='text'
                        value={songInputData.songInput}
                        onChange={(e) => songInputData.setSongInput(e.target.value)}
                    />
                </label>
                <br></br>
                <input id="submit-button" type='submit' value={"Enter"}/>
            </form>
        </div>
    )
}

export default Searchbar;