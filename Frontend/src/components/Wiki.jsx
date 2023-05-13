import React, {useContext} from 'react'
import { WikiContext } from '../App';

const Wiki = () => {
    const wikiData = useContext(WikiContext)
    let wikiSrc = "https://en.wikipedia.org/?curid=" + wikiData.wiki
    return (
        <div id='Wiki'>
            <h1 className='Title-Headers'>WIKI</h1>
            <iframe id = "wiki" title="wiki" src = {wikiSrc}></iframe>
        </div>
    )
}

export default Wiki