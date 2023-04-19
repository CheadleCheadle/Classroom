import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getClassesTeacherThunk } from "../../store/classTeacher.js"
import { getClassesStudentThunk } from "../../store/classStudent.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
export default function Classes() {
    const [isLoaded, classes] = useClasses()
    return isLoaded && (
        <div className="cls-cont">
            {classes.map((class_) => (
                <div className="cls-individual">
                    <div style={{backgroundImage: `url("${class_.image}")`}}className="cls-banner-cont">
                        <div className="cls-info">
                            <div className="cls-name-section">
                            <h2>{class_.name}</h2>
                            <h4>{class_.section}</h4>
                            </div>

                            <div id="settings-icon">
                                <FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#a30000",}} />
                            </div>
                        </div>
                    </div>
                    <div className="cls-assignment-qk"> </div>
                    <div className="cls-options"> </div>
                </div>
            ))}
        </div>
    )

}



export function useClasses() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    const teacherClasses = Object.values(useSelector(state => state.teacherClasses.classesTaught));
    const studentClasses = Object.values(useSelector(state => state.studentClasses.classesStudent))
    const classes = [...teacherClasses, ...studentClasses];

    useEffect(() => {
        dispatch(getClassesTeacherThunk())
        dispatch(getClassesStudentThunk())
        .then(() => {
        setIsLoaded(true);
        })
    }, [dispatch])

    return [isLoaded, classes];
}
