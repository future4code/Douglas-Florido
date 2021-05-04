import { useContext, useEffect } from 'react'
import Context from '../../GlobalState/Context'
import ListImages from '../../Components/ListImages/ListImages'


const MainPage = () => {

       const { states, setters, requests } = useContext(Context)

       useEffect(() => {
        const token = localStorage.getItem('token')
        console.log(token)

       }, [])
       

    return (
        <div>
            <input placeholder="Search by ID"></input>
            
            {/* <ListImages/> */}
            
        </div>
    )
}

export default MainPage