import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { useTeacher } from "./assignmentStream";
import { useEffect, useState } from "react";
import { newSubmissionThunk } from "../../../store/submissions";
import "./main.css";
import { FindSubmission } from "../Grades";
import GetUser from "../../utils/getUser";
export default function AssignmentPage() {
    const dispatch = useDispatch();
    const { classId, assignmentId } = useParams();
    const assignment = GetAssignment(classId, assignmentId)
    const user = GetUser();
    const class_ = GetClass(classId);
    const [grade, setGrade] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, teacher] = useTeacher(classId);
    const [theFiles, setTheFiles] = useState([]);
    const [submission, setTheSubmission] = useState({});
    const handleClick = (e) => {
        e.preventDefault();
        window.alert("Feature coming soon...");
    }
    // if (Object.values(assignment.submissions).length) {
    //  const tempSub= FindSubmission(assignment, user.id);
    //  setTheSubmission(tempSub);
    // }
    useEffect(() => {
        console.log(assignment, submission);
        if (Object.values(assignment.submissions).length && Object.values(submission.files).length) {
        setTheFiles([...theFiles, ...Object.values(submission.files)]);
        }
    }, [])

    const handleFileChange = (e) => {
        const files = [...e.target.files];
        const submissionFiles = submission.files;
        const newFiles =  files.map(file => {
            return {"name": file.name, "type": file.type, "size": file.size};
        });

        setTheFiles( [...theFiles, ...files])
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(newSubmissionThunk(theFiles, true, assignmentId))
        .then((d) => {
            console.log("The submission", d);
            setTheSubmission(d);
            setIsSubmitted(true)
        } );
    }

    const HandleDisplaySubmit = () => {
        console.log("is submitted", isSubmitted, submission);
        if (theFiles.length && !submission.done) {
            return (
                 <div onClick={(e) => handleSubmit(e)}id="mark-done">Turn in</div>
            )
            }else if(!submission.done) {
            return (
                 <div onClick={(e) => handleClick(e)} id="mark-done">Mark as done</div>
            )
            } else {
                return null;
            }

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
                        { !submission.grade ? <p>Assigned</p> : <p>{Math.trunc(submission.grade)} / {assignment.points}</p>}
                    </div>
                    <div className="upload-work">
                        {theFiles.map(file => (
                            <span id="files" key={file.size}>{file.name}</span>
                        ))}
                        {!theFiles.length ? <form encType="multipart/form-data">
                        <label style={{backgroundColor: theFiles.length > 3 ? "rgba(171, 173, 174, .4)": "", cursor: theFiles.length > 3? "not-allowed" : ""}}className="custom-upload">
                        <FontAwesomeIcon icon={faPlus} />
                        Add Work
                        <input disabled={theFiles.length > 3} onChange={(e) => handleFileChange(e)} type="file"></input>
                        </label>
                        </form> : null}
                        </div>
                        <HandleDisplaySubmit />
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

export function GetClass(classId) {
    const class_ = useSelector(state => state.teacher?.classes[classId]);
    const classCheck = useSelector(state => state.student?.classes[classId]);
    if (!class_) {
        return classCheck;
    } else {
        return class_
    }
}
