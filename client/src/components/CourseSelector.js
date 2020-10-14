import React,{useCallback,useState} from 'react'
import PropTypes from 'prop-types'

const CourseSelector = (props)=>{
    const [value,setValue] = useState()
    const handleOnChange = useCallback((event)=>{
        const value  = event.target.value
        setValue(value)
        props.handleSelectCourse(value)
    },[value,props.handleSelectCourse])
    return(
        <div>
            <select onChange={handleOnChange} value={value}>
                {props.courses.map(course=>{
                    return(
                    <option key={course.id} value={course.id}>{course.name}</option>
                    )
                })}
            </select>

        </div>
    )
}

CourseSelector.propTypes = {
    courses: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string.isRequired,
        holes: PropTypes.arrayOf(PropTypes.shape({
            number: PropTypes.number.isRequired,
            par: PropTypes.number.isRequired
        })).isRequired
    })),
    handleSelectCourse: PropTypes.func
}

CourseSelector.defaultProps = {
    courses: [],
    handleSelectCourse: ()=>{}
}

export default CourseSelector

