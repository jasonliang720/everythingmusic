import './App.css';
import AppTitle from './components/AppTitle.jsx'
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
export const PlaylistContext = createContext("")
export const WikiContext = createContext("")

export const BtsButtonContext = createContext("")
export const LiveButtonContext = createContext("")
export const InterviewButtonContext = createContext("")
export const PlaylistButtonContext = createContext("")
export const WikiButtonContext = createContext("")

function App() {
  const [input, setInput] = useState("");
  const [artistInput, setArtistInput] = useState("");
  const [songInput, setSongInput] = useState("");

  const [musicVideo, setMusicVideo] = useState("")
  const [lyricVideo, setLyricVideo] = useState("")

  const [liveVideo, setLiveVideo] = useState("")
  const [btsVideo, setBtsVideo] = useState("")
  const [interviewVideo, setInterviewVideo] = useState("")
  const [playlist, setPlaylist] = useState("")
  const [wiki,setWiki] = useState("")

  const [btsButtonBool,setBtsButtonBool] = useState(false)
  const [liveButtonBool, setLiveButtonBool] = useState(false)
  const [interviewButtonBool, setInterviewButtonBool] = useState(false)
  const [playlistButtonBool, setPlaylistButtonBool] = useState(false)
  const [wikiButtonBool, setWikiButtonBool] = useState(false)

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
                        <BtsButtonContext.Provider value={{btsButtonBool,setBtsButtonBool}}>
                          <LiveButtonContext.Provider value={{liveButtonBool,setLiveButtonBool}}>
                            <InterviewButtonContext.Provider value={{interviewButtonBool,setInterviewButtonBool}}>
                              <WikiButtonContext.Provider value={{wikiButtonBool,setWikiButtonBool}}>
                                <PlaylistContext.Provider value={{playlist, setPlaylist}}>
                                  <PlaylistButtonContext.Provider value={{playlistButtonBool,setPlaylistButtonBool}}>
                                    <AppTitle/>
                                    <Searchbar/>
                                    <h1 className='Title-Headers'>{input.toUpperCase()}</h1>
                                    <Content/>
                                    <AppTitle/>
                                  </PlaylistButtonContext.Provider>
                                </PlaylistContext.Provider>
                              </WikiButtonContext.Provider>
                            </InterviewButtonContext.Provider>
                          </LiveButtonContext.Provider>
                        </BtsButtonContext.Provider>
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
