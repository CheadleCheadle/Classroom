import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getClassesTeacherThunk } from "../../store/classTeacher.js"
import { getClassesStudentThunk } from "../../store/classStudent.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min.js";
import { setClassId } from "../../store/classTeacher.js"
import ClassOptions from "./classOptions.js";
import { setClassIsLoaded } from "../../store/classTeacher.js";
export default function Classes() {
    const history = useHistory()
    const dispatch = useDispatch();
    const [isLoaded, classes] = useClasses(true)
    const handleClick = (class_) => {
        dispatch(setClassId(class_.id))
        dispatch(setClassIsLoaded(true));
        history.push(`/class/${class_.id}`);
    }
    // const openOptions = (e, class_) => {
    //     e.cancelBubble = true;
    //     console.log("IM THE CLASS!", class_)
    //     setIsVisible(!isVisible);
    //     e.stopPropagation();
    //     dispatch(setClassId(class_.id))
    // }

    // document.addEventListener("click", openOptions);

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
                    <div className="cls-options"> </div>
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
        dispatch(getClassesTeacherThunk())
        dispatch(setClassId(null));
        dispatch(setClassIsLoaded(false))
        dispatch(getClassesStudentThunk())
        .then(() => {
        setIsLoaded(true);
        })
    }
    }, [dispatch])

    return [isLoaded, classes];
}
