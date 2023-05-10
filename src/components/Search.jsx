import React, {useContext} from 'react'
import { InputContext } from '../App';
import { MusicVideoContext } from '../App';
import { LiveVideoContext } from '../App';
import { btsVideoContext } from '../App';
import { InterviewVideoContext } from '../App';

const Search = () => {
    const API_KEY_YT = ""
    const inputData = useContext(InputContext)
    const musicVideoData = useContext(MusicVideoContext)
    const liveVideoData = useContext(LiveVideoContext)
    const btsVideoData = useContext(btsVideoContext)
    const interviewVideoData = useContext(InterviewVideoContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        musicVideoSearch()
        // liveVideoSearch()
        // btsVideoSearch()
        // interviewVideoSearch()
      }

      const musicVideoSearch = () => {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${inputData.input}%20official&type=video&key=${API_KEY_YT}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
            musicVideoData.setMusicVideo(data.items[0].id.videoId)
        })
      }

      const liveVideoSearch = () => {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${inputData.input}%20live&type=video&key=${API_KEY_YT}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
            liveVideoData.setLiveVideo(data.items[0].id.videoId)
        })
      }

      const btsVideoSearch = () => {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${inputData.input}%20behind%20the%20scenes&type=video&key=${API_KEY_YT}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
            btsVideoData.setBtsVideo(data.items[0].id.videoId)
        })
      }

      const interviewVideoSearch = () => {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${inputData.input}%20interview&type=video&key=${API_KEY_YT}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
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