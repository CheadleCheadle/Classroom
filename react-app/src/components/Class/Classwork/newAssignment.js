import { editAssignmentThunk, newAssignmentThunk } from "../../../store/classTeacher";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { GetAssignment } from "../ClassStream/assignment";
export default function NewAssignment({edit}) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [instructions, setInstructions] = useState('');
    const [points, setPoints] = useState(100);
    const [dueDate, setDueDate] = useState('');
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

        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    placeholder="Title (required)"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    />
                    <input
                    type="text"
                    placeholder="Instructions (optional)"
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    />
                    <input
                    type="number"
                    placeholder="Points"
                    value={points}
                    onChange={(e) => setPoints(e.target.value)}
                    required
                    />
                    <input
                    type="datetime-local"
                    placeholder="Due date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    required
                    />
                    <input
                    type="topic"
                    value={topic}
                    placeholder="Topic (optional)"
                    onChange={(e) => setTopic(e.target.value)}
                    />
                    <button type="submit">{edit ? "Update Assignment" : "Create Assignment"}</button>
                </form>
            </div>
        </div>


    )

}
