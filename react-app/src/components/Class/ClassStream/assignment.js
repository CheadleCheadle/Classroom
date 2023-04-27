import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { useTeacher } from "./assignmentStream";
import { useState } from "react";
import { newSubmissionThunk } from "../../../store/submissions";
import "./main.css";
export default function AssignmentPage() {
    const dispatch = useDispatch();
    const { classId, assignmentId } = useParams();
    const assignment = GetAssignment(classId, assignmentId)
    const class_ = GetClass(classId);
    const [isLoading, teacher] = useTeacher(classId);
    const [theFiles, setTheFiles] = useState([]);
    const handleClick = (e) => {
        e.preventDefault();
        window.alert("Feature coming soon...");
    }

    const handleFileChange = (e) => {
        const files = [...e.target.files];
        const newFiles =  files.map(file => {
            return {"name": file.name, "type": file.type, "size": file.size};
        });
        console.log('The files without modifying',files);

        setTheFiles( [...theFiles, ...files])
    }
    console.log("the files", theFiles);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(newSubmissionThunk(theFiles, true, assignmentId));
    }

    return (
        <div className="assignment-page-cont">
            <div className="assignment-work-info-cont">
                <div className="icon-container">
                <FontAwesomeIcon icon={faClipboardList} className="fa-2x" />
                </div>
                <div className="assignment-work-info">
                    <h1>{assignment.title}</h1>
                    <p id="creator-time"> {teacher.first_name} {teacher.last_name} | {assignment.created_at.slice(0, 17)} </p>
                    <p id="points">{assignment.points} points</p>
                <div id="instructions-cont">
                <p>{assignment.instructions}</p>
                </div>
                </div>
            </div>
            <div className="work-cont">
                <div className="user-work">
                    <div className="assigned-work">
                        <h2>Your work</h2>
                        <p> Assigned</p>
                    </div>
                    <div className="upload-work">
                        {theFiles.map(file => (
                            <span id="files" key={file.size}>{file.name}</span>
                        ))}
                        <form encType="multipart/form-data">
                        <label style={{backgroundColor: theFiles.length > 3 ? "rgba(171, 173, 174, .4)": "", cursor: theFiles.length > 3? "not-allowed" : ""}}className="custom-upload">
                        <FontAwesomeIcon icon={faPlus} />
                        Add Work
                        <input disabled={theFiles.length > 3} multiple onChange={(e) => handleFileChange(e)} type="file"></input>
                        </label>
                        </form>
                        </div>
                        {theFiles.length ? <div onClick={(e) => handleSubmit(e)}id="mark-done">Turn in</div>: <div onClick={(e) => handleClick(e)} id="mark-done">Mark as done</div> }
                    </div>
                </div>
            </div>
    )
}


export function GetAssignment(classId, assignmentId) {
    const assignment = useSelector(state => state.teacher?.classes[classId]?.assignments[assignmentId]);
    const assignmentCheck = useSelector(state => state.student?.classes[classId]?.assignments[assignmentId]);
    if (!assignment) {
        return assignmentCheck;
    } else {
        return assignment;
    }
}

function GetClass(classId) {
    const class_ = useSelector(state => state.teacher?.classes[classId]);
    const classCheck = useSelector(state => state.student?.classes[classId]);
    if (!class_) {
        return classCheck;
    } else {
        return class_
    }
}
