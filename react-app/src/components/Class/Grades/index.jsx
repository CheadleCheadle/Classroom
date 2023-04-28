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


export default function Grades() {
    const { classId } = useParams();
    const class_ = GetClass(classId);
    const users = class_.users;
    const user = GetUser();
    const [grade, setGrade] = useState(0);
    const [isLoading, teacher] = useTeacher(classId);
    if (isLoading && teacher.id === user.id) {
        //remove user with id of teacher from users
        const filteredUsers = users.filter(user => user.id !== teacher.id);

    const assignments = Object.values(class_.assignments);
    console.log("Here are the assignments", assignments);
    return (
        <div className="grid-cont">
            <>
            <table className="grade-table">
            <tr>
                <td>
                    name
                </td>
                {assignments.map((assignment) => (
                    <td key={assignment.id}>{assignment.title}</td>

                ))}

            </tr>
            {filteredUsers.map((user) => (
                <tr key={user.id} id="user">
                     <td>{user.first_name}</td>
                    {assignments.map((secondAssignment) => (
                        <td key={secondAssignment.id}>
                            <div>
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
    return null;
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
        <div>
        <input
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        placeholder={assignment.title}
        >
        </input>
        <button onClick={(e) => handleChange(e)}>Grade</button>
        <span>{Math.trunc(sub.grade)}/{assignment.points}</span>
        <FontAwesomeIcon icon={faEllipsisVertical} />
        </div>
        :
        <div>
            <p>No sub</p>
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
