import React, {useContext} from 'react'
import { InputContext } from '../App';
import { MusicVideoContext } from '../App';
import { LiveVideoContext } from '../App';
import { btsVideoContext } from '../App';
import { InterviewVideoContext } from '../App';

const Search = () => {
    const inputData = useContext(InputContext)
    const musicVideoData = useContext(MusicVideoContext)
    const liveVideoData = useContext(LiveVideoContext)
    const btsVideoData = useContext(btsVideoContext)
    const interviewVideoData = useContext(InterviewVideoContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        musicVideoSearch()
        liveVideoSearch()
        btsVideoSearch()
        interviewVideoSearch()
      }

      const musicVideoSearch = () => {
        fetch(`http://localhost:3001/music-video/${inputData.input}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            musicVideoData.setMusicVideo(data.items[0].id.videoId)
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

      const btsVideoSearch = () => {
        fetch(`http://localhost:3001/bts-video/${inputData.input}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            btsVideoData.setBtsVideo(data.items[0].id.videoId)
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

    return (
        <div id='navbar'>
            <form onSubmit={handleSubmit}>
                <label>SEARCH: 
                    <input 
                        type='text'
                        value={inputData.input}
                        onChange={(e) => inputData.setInput(e.target.value)}
                    />
                </label>
                <input type='submit' />
            </form>


        </div>
    )
}

export default Search