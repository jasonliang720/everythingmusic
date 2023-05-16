import '../Styles.css'
import React from 'react'
import Source from './Source.jsx'
import SourceButton from './SourceButton';
import { useContext } from 'react';
import { ArtistInputContext } from '../App';

const Content = () => {
    const artistInputData = useContext(ArtistInputContext)
    return(
        <div id="Content">
            <Source label="OFFICIAL"/>

            <h1 className='Title-Headers'>BEHIND THE SCENES</h1>
            <SourceButton label='BTS'/> <br></br>
            <Source label='BTS'/>

            <h1 className='Title-Headers'>LIVE PERFORMANCES</h1>
            <SourceButton label='LIVE'/> <br></br>
            <Source label='LIVE'/>

            <h1 className='Title-Headers'>INTERVIEWS</h1>
            <SourceButton label='TALKS'/> <br></br>
            <Source label='TALKS'/>

            <h1 className='Title-Headers'>MORE FROM {artistInputData.artistInput.toUpperCase()}</h1>
            <SourceButton label='MIX'/> <br></br>
            <Source label='MIX'/>

            <h1 className='Title-Headers'>WIKI PAGE</h1>
            <SourceButton label='WIKI'/> <br></br>
            <Source label='WIKI'/>
        </div>
    )
}

export default Content