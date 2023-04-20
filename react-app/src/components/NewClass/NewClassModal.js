import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { newTeacherClassThunk } from "../../store/classTeacher";

export default function NewClassModal() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState("");
    const [section, setSection] = useState("");
    const [subject, setSubject] = useState("");
    const [room, setRoom] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
		e.preventDefault();
        const newClass = {name, section, subject, room};
        console.log("the new class", newClass);
        const data = await dispatch(newTeacherClassThunk(newClass));
        console.log("DATA", data);
        if (data) {
            setErrors(data)
        }
        history.replace(`/classes`)
    }
    return (
        <>
        <h2>Create class</h2>
        <form>
            <input
             type="text"
             value={name}
             onChange={(e) => setName(e.target.value)}
             placeholder="Class name" />

            <input
             type="text"
             value={section}
             onChange={(e) => setSection(e.target.value)}
             placeholder="Section" />

            <input
             type="text"
             value={subject}
             onChange={(e) => setSubject(e.target.value)}
             placeholder="Subject" />

            <input
             type="text"
             value={room}
             onChange={(e) => setRoom(e.target.value)}
             placeholder="Room" />
        </form>
        <div>
            <button onClick={handleSubmit}>Create</button>
            <button>Cancel</button>
        </div>
        </>
    )
}
