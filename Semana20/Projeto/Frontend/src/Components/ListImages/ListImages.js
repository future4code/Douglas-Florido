import { useContext, useEffect } from 'react'
import Context from '../../GlobalState/Context'



const ListImages = () => {

       const { states, setters, requests } = useContext(Context)

       useEffect(() => {
       }, [])
       

    return (
        <>
            ListImages
        </>
    )
}

export default ListImages