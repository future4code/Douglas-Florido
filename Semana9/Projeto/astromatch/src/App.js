import React, { useState, useEffect } from 'react'
import MainBody from './Components/MainBody/MainBody.js'
import Matches from './Components/Matches/Matches.js'

export function App() {
  const [page, setPage] = useState(true)

  let changePage = () => {
    let destiny = !page
    setPage(destiny)
  }



  if (page) {
    return (
      <>
        <MainBody changePage={changePage} page={page} />
      </>
    )
  }

  else {
    return (
      <>
        <Matches changePage={changePage} page={page} />
      </>
    )
  }


}











export default App;
