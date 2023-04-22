import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { editTeacherClassThunk, newTeacherClassThunk } from "../../store/classTeacher";

export default function NewClassModal({edit, class_}) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState("");
    const [section, setSection] = useState("");
    const [subject, setSubject] = useState("");
    const [room, setRoom] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
		e.preventDefault();
            let newClass = {name, section, subject, room};

        if (edit) {
            newClass.id = class_.id
            console.log("Im being updated", newClass);
            const data = dispatch(editTeacherClassThunk(newClass));
            if (data) {
            setErrors(data)
        }
        } else {
        console.log("the new class", newClass);
        const data = dispatch(newTeacherClassThunk(newClass));

        if (data) {
            setErrors(data)
        }
        }
        history.replace(`/classes`)
    }

    useEffect(() => {
        if (edit) {
            setName(class_.name);
            setSection(class_.section);
            setSubject(class_.subject);
            setRoom(class_.room);
        }
    }, [])
    return (
        <>
        {edit ? <h2>Update class</h2> : <h2>Create class</h2>}
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
