import React from 'react'
import Header from '../Header/Header.js'
import SmallCard from '../SmallCard/SmallCard.js'


export function Matches(props) {
    return (
        <div>
            <Header changePage={props.changePage} page={props.page} />            
            <SmallCard/>
        </div>
    )
}

export default Matches;