import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useIsOwner } from "../../AllClasses/classOptions";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./main.css";
import UpcomingAssignments from "../../AllClasses/upcoming-assignments";
export default function UpcomingWork({classId, assignments}) {
    const assignmentsArray = Object.values(assignments);
    const history = useHistory();
    const isOwner = useIsOwner(classId);
    console.log(assignmentsArray, "Im the assignments123");
    const today = new Date();

    const upcomingAssignments = assignmentsArray.filter((assignment) => {
        const date = new Date(assignment.due_date);
        console.log("the date", date, today);
        return date >= today;
    });

    //Get the first 2 latest assignments
    const sortedAssignments = upcomingAssignments.sort((a, b) => {
        return b.due_date - a.due_date;
    }).slice(0, 2)

    const HandleAssignmentRedirect = (assignment) => {
    if (isOwner) {
        history.push(`/classes/${classId}/assignments/${assignment.id}/teacher`)
    } else {
        history.push(`/classes/${classId}/assignments/${assignment.id}`)
    }
    }


    return (
        <div className="upcoming-work">
            <h2>Upcoming</h2>
            {sortedAssignments?.length ?  sortedAssignments.map((assignment) => (
                <p onClick={() => HandleAssignmentRedirect(assignment)} id="assignment-title">{assignment.title}</p>
            ))
             :
            <p>No work due soon</p>
            }
            <span id="nav-to-all">
            <Link id="nav-to-all" to={`/class/${classId}/classwork`}>View All</Link>
            </span>
        </div>
    )
}
