import React, {useContext} from 'react'
import { InputContext } from '../App';
import { ArtistInputContext } from '../App';
import { SongInputContext } from '../App';
import { MusicVideoContext } from '../App';
import { LyricVideoContext } from '../App';
import { LiveVideoContext } from '../App';
import { btsVideoContext } from '../App';
import { InterviewVideoContext } from '../App';
import { WikiContext } from '../App';
import '../Styles.css';

const Search = () => {
    const inputData = useContext(InputContext)
    const artistInputData = useContext(ArtistInputContext)
    const songInputData = useContext(SongInputContext)
    const musicVideoData = useContext(MusicVideoContext)
    const lyricVideoData = useContext(LyricVideoContext)
    const liveVideoData = useContext(LiveVideoContext)
    const btsVideoData = useContext(btsVideoContext)
    const interviewVideoData = useContext(InterviewVideoContext)
    const wikiData = useContext(WikiContext)
    let tempInput = ""

    const handleSubmit = (event) => {
        event.preventDefault();
        tempInput = artistInputData.artistInput + " " + songInputData.songInput
        inputData.setInput(artistInputData.artistInput + " ~ " + songInputData.songInput)
        musicVideoSearch()
        lyricVideoSearch()
        liveVideoSearch()
        btsVideoSearch()
        interviewVideoSearch()
        wikiSearch()
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

      const liveVideoSearch = () => {
        fetch(`http://localhost:3001/live-video/${tempInput}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            liveVideoData.setLiveVideo(data.items[0].id.videoId)
        })
      }

      const btsVideoSearch = () => {
        fetch(`http://localhost:3001/bts-video/${tempInput}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            btsVideoData.setBtsVideo(data.items[0].id.videoId)
        })
      }

      const interviewVideoSearch = () => {
        fetch(`http://localhost:3001/interview-video/${tempInput}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            interviewVideoData.setInterviewVideo(data.items[0].id.videoId)
        })
      }

      const wikiSearch = () => {
        fetch(`http://localhost:3001/wiki/${tempInput}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            wikiData.setWiki(data.query.search[0].pageid)
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
                <label>SONG: 
                    <input 
                        type='text'
                        value={songInputData.songInput}
                        onChange={(e) => songInputData.setSongInput(e.target.value)}
                    />
                </label>
                <br></br>
                <input type='submit' />
            </form>
        </div>
    )
}

export default Search