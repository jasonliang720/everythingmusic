import './App.css';
import Searchbar from './components/Searchbar.jsx';
import Content from './components/Content.jsx'
import React, {createContext, useState} from 'react'
export const InputContext = createContext("")
export const ArtistInputContext = createContext("")
export const SongInputContext = createContext("")
export const MusicVideoContext = createContext("")
export const LyricVideoContext = createContext("")
export const LiveVideoContext = createContext("")
export const btsVideoContext = createContext("")
export const InterviewVideoContext = createContext("")
export const WikiContext = createContext("")

function App() {
  const [input, setInput] = useState("");
  const [artistInput, setArtistInput] = useState("");
  const [songInput, setSongInput] = useState("");
  const [musicVideo, setMusicVideo] = useState("")
  const [lyricVideo, setLyricVideo] = useState("")
  const [liveVideo, setLiveVideo] = useState("")
  const [btsVideo, setBtsVideo] = useState("")
  const [interviewVideo, setInterviewVideo] = useState("")
  const [wiki,setWiki] = useState("")

  return (
    <div className="App">
      <InputContext.Provider value={{input,setInput}}>
        <ArtistInputContext.Provider value={{artistInput,setArtistInput}}> 
          <SongInputContext.Provider value={{songInput,setSongInput}}> 
           <MusicVideoContext.Provider value={{musicVideo,setMusicVideo}}>
              <LyricVideoContext.Provider value={{lyricVideo,setLyricVideo}}> 
                <LiveVideoContext.Provider value={{liveVideo,setLiveVideo}}>
                  <btsVideoContext.Provider value={{btsVideo,setBtsVideo}}>
                    <InterviewVideoContext.Provider value={{interviewVideo,setInterviewVideo}}>
                      <WikiContext.Provider value={{wiki,setWiki}}>
                        <Searchbar/>
                        <h1 style={{color:"aliceblue"}}>{input.toUpperCase()}</h1>
                        <Content/>
                      </WikiContext.Provider>
                    </InterviewVideoContext.Provider>
                  </btsVideoContext.Provider>
                </LiveVideoContext.Provider>
              </LyricVideoContext.Provider>
            </MusicVideoContext.Provider>
          </SongInputContext.Provider> 
        </ArtistInputContext.Provider>
      </InputContext.Provider>
    </div>
  );
}

export default App;
