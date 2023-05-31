import { useIsOwner } from "./classOptions";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
export default function UpcomingAssignments({assignments, classId, useDate, numAssignments}) {
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

    const handleDate = (date) => {
        const dateObj = new Date(date);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = dateObj.toLocaleDateString(undefined, options);

        return formattedDate;

    }
    const HandleAssignmentRedirect = (assignment) => {
    if (isOwner) {
        history.push(`/classes/${classId}/assignments/${assignment.id}/teacher`)
    } else {
        history.push(`/classes/${classId}/assignments/${assignment.id}`)
    }
    }
    return (
        <div id="assignment-class-cont">
        {sortedAssignments.map((assignment) => (
            <div id="assignment-details-all-classes-cont" onClick={() => HandleAssignmentRedirect(assignment)}>
            { useDate && <p id="due-date">Due {handleDate(assignment.due_date)}</p>}
            <p id="assignment-details-all-classes">{assignment.title}</p>
            </div>
        ))}
        </div>
    )


}
