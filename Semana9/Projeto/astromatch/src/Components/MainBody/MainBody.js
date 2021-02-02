import React from 'react'
import Header from '../Header/Header.js'
import CardGrande from '../CardGrande/CardGrande.js'
import ResetButton from '../ResetButton/ResetButton.js'

export function MainBody(props) {
    return (
        <div>
            <Header changePage={props.changePage} page={props.page} />
            <CardGrande/>
            <ResetButton/>
        </div>
    )
}

export default MainBody;
