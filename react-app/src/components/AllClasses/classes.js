import { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getClassesTeacherThunk } from "../../store/classTeacher.js"
import { getClassesStudentThunk } from "../../store/classStudent.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min.js";
import { setClassId } from "../../store/classTeacher.js"
import ClassOptions from "./classOptions.js";
import { setClassIsLoaded } from "../../store/classTeacher.js";
import GetUser from "../utils/getUser.js";
import { useTeacher } from "../Class/ClassStream/assignmentStream.js";
export default function Classes() {
    const history = useHistory()
    const dispatch = useDispatch();
    const user = GetUser()
    const [isLoaded, classes] = useClasses(true)
    const handleClick = (class_) => {
        dispatch(setClassId(class_.id))
        dispatch(setClassIsLoaded(true));
        history.push(`/class/${class_.id}`);
    }


    const HandleOpenGrade = ({classId}) => {
        console.log("THE TEACH", classId);
        const teacher = useTeacher(classId, true);
        if (teacher.id === user.id) {
            return(
                <span id="open-grade-book">
                    <div onClick={(e) => handleRedirect(e, classId)} id="arrow-cont">
                        <FontAwesomeIcon icon={faArrowTrendUp} />
                    </div>
                </span>
            )
        } else {
            return null;
        }
    }

    const handleRedirect = (e, classId) => {
        e.stopPropagation();
        dispatch(setClassIsLoaded(true));
        dispatch(setClassId(classId));
        history.push(`/class/${classId}/grades`)
    }
    return isLoaded && (
        <div className="cls-cont">
            {classes.map((class_) => (
                <div onClick={() => handleClick(class_)} key={class_.id} className="cls-individual">
                    <div style={{backgroundImage: `url("${class_.image}")`}}className="cls-banner-cont">
                        <div className="cls-info">
                            <div className="cls-name-section">
                            <h2>{class_.name}</h2>
                            <h4>{class_.section}</h4>
                            </div>
                            <ClassOptions class_={class_} />
                        </div>
                    </div>
                    <div className="cls-assignment-qk"> </div>
                    <div className="cls-options">
                    <HandleOpenGrade classId={class_.id} />
                    </div>
                </div>
            ))}
        </div>
    )

}



export function useClasses(flag) {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    const teacherClasses = Object.values(useSelector(state => state.teacher.classes));
    const studentClasses = Object.values(useSelector(state => state.student.classes))
    const classes = [...teacherClasses, ...studentClasses];

    useEffect(() => {
        if (flag) {
        dispatch(setClassId(null));
        dispatch(setClassIsLoaded(false))
        dispatch(getClassesTeacherThunk())
        dispatch(getClassesStudentThunk())
        .then(() => {
        setIsLoaded(true);
        })
    }
    }, [dispatch])

    return [isLoaded, classes];
}
