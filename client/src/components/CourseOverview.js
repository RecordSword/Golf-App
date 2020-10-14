import React from 'react';
import PropTypes from 'prop-types'

const CourseOverview = (props)=>{
    return(
        <div>
            <table>
                <tr>
                    <th>Hole</th>
                    <th>Par</th>
                </tr>
                {props.holes.map(hole=>{
                    return (
                        <tr key={hole.id}>
                            <td>{hole.number}</td>
                            <td>{hole.par}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

CourseOverview.propTypes = {
    course: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string.isRequired,
        holes: PropTypes.arrayOf(PropTypes.shape({
            number: PropTypes.number.isRequired,
            par: PropTypes.number.isRequired
        })),
})}

CourseOverview.defaultProps = {
    courses: [],
}

export default CourseOverview;
