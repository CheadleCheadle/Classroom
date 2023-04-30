import { useSelector, useDispatch} from "react-redux";
import { useEffect, useState } from "react";
import { GetClass } from "../ClassStream/assignment";
import GetUser from "../../utils/getUser";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useTeacher } from "../ClassStream/assignmentStream";
import "./main.css";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { newGradeThunk } from "../../../store/classTeacher";
import GradeOptions from "./gradeOptions";

export default function Grades() {
    const { classId } = useParams();
    const class_ = GetClass(classId);
    const users = class_.users;
    const user = GetUser();
    const [grade, setGrade] = useState(0);
    const [isLoading, teacher] = useTeacher(classId);
    const assignments = Object.values(class_.assignments);
    if (isLoading && teacher.id === user.id && assignments.length) {
        //remove user with id of teacher from users
        const filteredUsers = users.filter(user => user.id !== teacher.id);

    console.log("Here are the assignments", assignments);
    return (
        <div className="grid-cont">
            <>
            <table className="grade-table">
            <tr className="assignment-row">
                <td id="name-cont">
                </td>
                {assignments.map((assignment) => (
                    <td id="grade-assignment-cont" key={assignment.id}>
                        <div id="assignment-grade-details">
                            <p>Due {assignment.due_date.slice(0,12)}</p>
                            <div id="assignment-title-cont"><h5>{assignment.title}</h5></div>
                            <p id="outof-points">out of {assignment.points}</p>
                        </div>
                    </td>

                ))}

            </tr>
            {filteredUsers.map((user) => (
                <tr className={user.id % 2 === 0 ? "grade-row" : "grade-row-diff"} key={user.id} id="user">
                     <td id="user-cont">
                        <div className="user-cont-grade">
                            <img id="user-pfp" src={user.pfp}></img>
                            <h4>{user.first_name} {user.last_name}</h4>
                        </div>
                     </td>
                    {assignments.map((secondAssignment) => (
                        <td id="grade-cont" key={secondAssignment.id}>
                            <div className="edit-grade">
                            <EditGrade class_={class_} user={user} assignment={secondAssignment} />
                            </div>
                        </td>
                    ))}

                </tr>
                ))}




            </table>

            </>
        </div>

    )

} else {
    return (
        <div id="no-assignments">
            <span>This is where you will view and grade assignment submissions</span>
        <img src="https://img.icons8.com/?size=512&id=vRprj2QN0E5Y&format=png">
        </img>
        </div>
    )
}

}

function EditGrade({class_, assignment, user}) {
    const [grade, setGrade] = useState(0);
    const dispatch = useDispatch();
    // console.log("User:", user.id, "assignment:", assignment);
    const sub = FindSubmission(assignment, user.id);
    console.log("subm", sub)
    const handleChange = (e) => {
        e.preventDefault();
        dispatch(newGradeThunk(class_.id, assignment.id, sub.id, grade))
    }
    return (
        <>
        { Object.values(sub).length ?
        <div id="edit-grade-cont">
        <div id="display-grade">
        <input
        type="number"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        max={assignment.points}
        min="0"
        >
        </input>
        <span>{Math.trunc(sub.grade)}/{assignment.points}</span>
        </div>
        <div id="button-cont-grade">
        <button onClick={(e) => handleChange(e)}>Grade</button>
        {/* <FontAwesomeIcon icon={faEllipsisVertical} /> */}
        <GradeOptions submission={sub} />
        </div>
        </div>
        :
        <div id="no-submission">
            <p>No Submission</p>
        </div>
        }
    </>
    )
}


export function FindSubmission(assignment, userId) {
    if (Object.values(assignment.submissions).length) {
        const vals = Object.values(assignment.submissions)
        const found = vals.find(sub => sub.user_id === userId);
        console.log('found', found);
        return found || {};
    }
    return {};
}
