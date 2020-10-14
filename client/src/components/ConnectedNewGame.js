import React,{useEffect,useState} from 'react'
import NewGame from './NewGame'
import API from '../utils/API'
const {loadCourses,createGame} = API
const ConnectedNewGame = ()=>{
    const [courses,setCourses]  = useState([])
    useEffect(()=>{
        const fetchCourses = async ()=>{
            //load the courses
            const {courses} = await loadCourses()
            console.log('Courses',courses)
            setCourses(courses)
        }
        fetchCourses()
    },[setCourses])
    return(
        <NewGame handleCreateGame={createGame} courses={courses} />
    )
}
export default ConnectedNewGame