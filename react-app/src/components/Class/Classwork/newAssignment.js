import { editAssignmentThunk, newAssignmentThunk } from "../../../store/classTeacher";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { GetAssignment } from "../ClassStream/assignment";
import "./main.css";
export default function NewAssignment({edit}) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [instructions, setInstructions] = useState('');
    const [points, setPoints] = useState(100);
    const [dueDate, setDueDate] = useState("");
    const [topic, setTopic] = useState('');
    const { classId, assignmentId } = useParams()
    console.log("Here are the classId and assignment Id", classId, assignmentId)
    // const class_ = useSelector(state => state.teacher.classes[state.teacher.singleClassId]);
    const assignment = useSelector(state => state.teacher.classes[classId].assignments[assignmentId]);
    // const assignment = GetAssignment(classId, assignmentId)
    console.log("Im the assignment", assignment)
    const handleSubmit = (e) => {
        e.preventDefault();
        let newDate = new Date(dueDate)
        newDate = newDate.toISOString().split('T')[0];
        let newAssignment = {title, instructions, points, due_date: newDate, topic};
        if (edit) {
         newAssignment = {id: assignment.id, title, instructions, points, due_date: newDate, topic};
            dispatch(editAssignmentThunk(newAssignment, classId));
            history.replace(`/class/${classId}/classwork`)
        } else {
            dispatch(newAssignmentThunk(newAssignment, classId ));
            history.replace(`/class/${classId}/classwork`)
        }
    }

    const handlePreventSubmit = () => {
        if (title === '') return true;
        if (points < 0 || points === "") return true;
        if (dueDate === "") return true;
    }

    useEffect(() => {
        if (edit) {
           setTitle(assignment.title);
           setInstructions(assignment.instructions);
           setPoints(assignment.points);
           setDueDate(assignment.due_date);
           setTopic(assignment.topic);
        }
    }, [edit])

    return (

        <div className="new-assignment-cont">
                <div className="first-assignment-form">
                <form id="first-form">
                    <input
                    id="title"
                    type="text"
                    maxLength="40"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    />
                    <textarea
                    id="instructions"
                    maxLength="2000"
                    type="text"
                    placeholder="Instructions (optional)"
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    />

                </form>
                </div>
            <div className="second-assignment-form">
                <form id="second-form">
                    <label>Points</label>
                    <input
                    id="points-select"
                    type="number"
                    placeholder="Points"
                    value={points}
                    onChange={(e) => setPoints(e.target.value)}
                    required
                    />
                    <label>Due</label>
                    <input
                    id="date-select"
                    type="datetime-local"
                    placeholder="Due date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    required
                    />
                    <label>Topic (optional)</label>
                    <input
                    id="topic-select"
                    type="topic"
                    value={topic}
                    placeholder="No topic"
                    onChange={(e) => setTopic(e.target.value)}
                    />
                    <button disabled={handlePreventSubmit()} style={{ backgroundColor: handlePreventSubmit() ? "gray" : "", cursor: handlePreventSubmit() ? "not-allowed" : ""}}onClick={handleSubmit}id="assign" type="submit">{edit ? "Update" : "Assign"}</button>
                </form>
                </div>
        </div>


    )

}
