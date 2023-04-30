import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./main.css";
import { useEffect } from "react";
import AssignmentOptions from "./assignmentOptions";
import GetUser from "../../utils/getUser";
export default function AssignmentStream({ assignments, classId, announcements}) {
    const history = useHistory();
    const user = GetUser();
        if (Object.values(assignments).length) {
        assignments = Object.values(assignments);
        } else {
            assignments = [];
        }
        const dtFormat = new Intl.DateTimeFormat('en-US');
        const [isLoading, teacher] = useTeacher(classId);
        const handleClick = (assignmentId) => {
            console.log("here is the assignment Id", assignmentId);
            if (user.id === teacher.id) {
                console.log("hey m123");
                history.push(`/classes/${classId}/assignments/${assignmentId}/teacher`);
            } else {

                history.push(`/classes/${classId}/assignments/${assignmentId}`);
            }
        }

    return (
        <>
        {assignments.map((assignment) => (
        <div onClick={() => handleClick(assignment.id)} key={assignment.id}  className="assignment-cont">
            <div className="assignment-info">
                <div id="assignment-font-icon">
                <FontAwesomeIcon icon={faClipboardList} />
                </div>
                <div className="assignment-details">
                    <span>
                     {teacher.first_name} {teacher.last_name} posted a new assignment: {assignment.title}
                    </span>
                    <span id="assignment-post-time">{dtFormat.format((new Date(assignment.created_at)))}</span>
                </div>
            </div>
             <div className="assignment-options">
                {/* <FontAwesomeIcon icon={faEllipsisVertical} className="fa-2x"style={{color: "#a30000",}} /> */}
                <AssignmentOptions assignment={assignment} classId={classId}/>
             </div>
        </div>
        ))}

    </>
    )


}

export function useTeacher(classId) {
    const [isLoading, setIsLoading] = useState(false);
    const [teacher, setTeacher] = useState({});
    useEffect(() => {

        const fetchTeacher =  async () => {
            const data = await fetch(`/api/classes/${classId}/teacher`);
            if (data.ok) {
            const teacher = await data.json();
            setTeacher(teacher);
            setIsLoading(true);
            }
        }
        fetchTeacher();
    }, [])
    return [isLoading, teacher];
}
