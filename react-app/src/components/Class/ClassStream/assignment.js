import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { useTeacher } from "./assignmentStream";
import "./main.css";
export default function AssignmentPage() {
    const { classId, assignmentId } = useParams();
    const assignment = GetAssignment(classId, assignmentId)
    const class_ = GetClass(classId);
    const [isLoading, teacher] = useTeacher(classId);
    console.log("here is the assignment:", assignment );
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
                <p>{assignment.instructions}</p>
                </div>
            </div>
            <div className="work-cont">
                <div className="user-work">
                    <div className="assigned-work">
                        <h2>Your work</h2>
                        <p> Assigned</p>
                    </div>
                    <div className="upload-work">
                        <div id="add-work">
                        <FontAwesomeIcon icon={faPlus} />
                        Add Work
                        </div>
                        <div id="mark-done">Mark as done</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function GetAssignment(classId, assignmentId) {
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
