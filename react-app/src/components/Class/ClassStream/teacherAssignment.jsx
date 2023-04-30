import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { GetAssignment } from "./assignment";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTeacher } from "./assignmentStream";
import { useSelector } from "react-redux";

export default function TeacherAssignment() {
    const { classId, assignmentId} = useParams();
    const assignment = GetAssignment(classId, assignmentId)
    console.log("This is the assignment nums", assignment)
    const class_ = useSelector(state => state.teacher.classes[classId]);
    const [isLoading, teacher] = useTeacher(classId);
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

            <div className="assign-stats-cont">
                <div className="assign-stats">
                    <div id="turnedin">
                    <div>{Object.values(assignment.submissions).length > 0 ? Object.values(assignment.submissions).length : 0}</div>
                    <p>Turned in</p>
                    </div>
                    <div id="assigned">
                        <div>{(class_.users.length - 1) - Object.values(assignment.submissions).length}</div>
                        <p>Assigned</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
