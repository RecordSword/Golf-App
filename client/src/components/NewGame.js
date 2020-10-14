import React,{useCallback,useEffect,useState} from 'react'
import CourseSelector from './CourseSelector'
import CourseOverview from './CourseOverview'
import PropTypes from 'prop-types'

const NewGame = (props)=>{
    const [selectedCourseId,setSelectedCourseId] = useState()
    const onCreate = useCallback(()=>{
        props.handleCreateGame(selectedCourseId)
    },[selectedCourseId,props.handleCreateGame])
    
    
    return (
    <div>
        <h2>New Game</h2>
        <CourseSelector courses={props.courses} handleSelectCourse={setSelectedCourseId}/>
        {selectedCourseId ? <CourseOverview course={props.courses.find(course=>course.id===selectedCourseId)}/> : undefined}
        <button onClick={onCreate}>Create</button>
   </div>
    
    )
}
NewGame.propTypes = {
    handleCreateGame: PropTypes.func.isRequired,
    courses: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string.isRequired,
        holes: PropTypes.arrayOf(PropTypes.shape({
            number: PropTypes.number.isRequired,
            par: PropTypes.number.isRequired
        })).isRequired
    }))
}

NewGame.defaultProps = {
    courses: [],
    handleCreateGame: ()=>{},
}

export default NewGame