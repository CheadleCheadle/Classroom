import { newAssignmentThunk } from "../../../store/classTeacher";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
export default function NewAssignment() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [instructions, setInstructions] = useState('');
    const [points, setPoints] = useState(100);
    const [dueDate, setDueDate] = useState('');
    const [topic, setTopic] = useState('');
    const { classId } = useParams()
    const handleSubmit = (e) => {
        e.preventDefault();
        let newDate = new Date(dueDate)
        newDate = newDate.toISOString().split('T')[0];
        let newAssignment = {title, instructions, points, due_date: newDate, topic};
        console.log("HERE IS THE NEW ASSIGNMENT", newAssignment);
        dispatch(newAssignmentThunk(newAssignment, classId ));
    }

    return (

        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    />
                    <input
                    type="text"
                    placeholder="Instructions"
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    />
                    <input
                    type="number"
                    placeholder="Points"
                    value={points}
                    onChange={(e) => setPoints(e.target.value)}
                    />
                    <input
                    type="datetime-local"
                    placeholder="Due date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    />
                    <input
                    type="topic"
                    value={topic}
                    placeholder="Topic"
                    onChange={(e) => setTopic(e.target.value)}
                    />
                    <button type="submit">Create Assignment</button>
                </form>
            </div>
        </div>


    )

}
