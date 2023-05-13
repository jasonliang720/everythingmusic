import '../Styles.css'
import React from 'react'
import Official from './Official.jsx';
import Bts from './Bts.jsx'
import Live from './Live.jsx'
import Interview from './Interview.jsx'
import Wiki from './Wiki.jsx'

const Content = () => {
    return(
        <div id="Content">
            <Official/>
            <Bts/>
            <Live/>
            <Interview/>
            <Wiki/>
        </div>
    )
}

export default Content