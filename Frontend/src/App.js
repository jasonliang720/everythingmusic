import './App.css';
import Navbar from './components/Navbar.jsx';
import Body from './components/Body.jsx'
import React, {createContext, useState} from 'react'
export const InputContext = createContext("")
export const MusicVideoContext = createContext("")
export const LiveVideoContext = createContext("")
export const btsVideoContext = createContext("")
export const InterviewVideoContext = createContext("")

function App() {
  const [input, setInput] = useState("");
  const [musicVideo, setMusicVideo] = useState("")
  const [liveVideo, setLiveVideo] = useState("")
  const [btsVideo, setBtsVideo] = useState("")
  const [interviewVideo, setInterviewVideo] = useState("")

  return (
    <div className="App">
      <InputContext.Provider value={{input,setInput}}>
        <MusicVideoContext.Provider value={{musicVideo,setMusicVideo}}>
          <LiveVideoContext.Provider value={{liveVideo,setLiveVideo}}>
            <btsVideoContext.Provider value={{btsVideo,setBtsVideo}}>
              <InterviewVideoContext.Provider value={{interviewVideo,setInterviewVideo}}>
                <Navbar/>
                  <h1 style={{color:"aliceblue"}}>{input.toUpperCase()}</h1>
                  <Body/>
              </InterviewVideoContext.Provider>
            </btsVideoContext.Provider>
          </LiveVideoContext.Provider>
        </MusicVideoContext.Provider>
      </InputContext.Provider>
    </div>
  );
}

export default App;