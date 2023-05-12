import React, {useContext} from 'react'
import { InputContext } from '../App';
import { ArtistInputContext } from '../App';
import { SongInputContext } from '../App';
import { MusicVideoContext } from '../App';
import { LiveVideoContext } from '../App';
import { btsVideoContext } from '../App';
import { InterviewVideoContext } from '../App';

const Search = () => {
    const inputData = useContext(InputContext)
    const artistInputData = useContext(ArtistInputContext)
    const songInputData = useContext(SongInputContext)
    const musicVideoData = useContext(MusicVideoContext)
    const liveVideoData = useContext(LiveVideoContext)
    const btsVideoData = useContext(btsVideoContext)
    const interviewVideoData = useContext(InterviewVideoContext)
    let tempInput = ""

    const handleSubmit = (event) => {
        event.preventDefault();
        tempInput = artistInputData.artistInput + " " + songInputData.songInput
        inputData.setInput(artistInputData.artistInput + " ~ " + songInputData.songInput)
        // musicVideoSearch()
        // liveVideoSearch()
        // btsVideoSearch()
        // interviewVideoSearch()
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
                <label>SONG: 
                    <input 
                        type='text'
                        value={songInputData.songInput}
                        onChange={(e) => songInputData.setSongInput(e.target.value)}
                    />
                </label>
                <input type='submit' />
            </form>
        </div>
    )
}

export default Search