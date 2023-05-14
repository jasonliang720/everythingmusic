import '../Styles.css'
import React from 'react'
import Source from './Source.jsx'
import SourceButton from './SourceButton';

const Content = () => {
    return(
        <div id="Content">
            <Source label="OFFICIAL"/>

            <h1 className='Title-Headers'>BTS</h1>
            <SourceButton label='BTS'/> <br></br>
            <Source label='BTS'/>

            <h1 className='Title-Headers'>LIVE</h1>
            <SourceButton label='LIVE'/> <br></br>
            <Source label='LIVE'/>

            <h1 className='Title-Headers'>INTERVIEWS</h1>
            <SourceButton label='TALKS'/> <br></br>
            <Source label='TALKS'/>

            <h1 className='Title-Headers'>WIKI</h1>
            <SourceButton label='WIKI'/> <br></br>
            <Source label='WIKI'/>
        </div>
    )
}

export default Content