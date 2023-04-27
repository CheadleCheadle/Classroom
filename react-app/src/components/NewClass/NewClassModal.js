import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { editTeacherClassThunk, newTeacherClassThunk } from "../../store/classTeacher";
import "./main.css"
export default function NewClassModal({edit, class_}) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState("");
    const [section, setSection] = useState("");
    const [subject, setSubject] = useState("");
    const [room, setRoom] = useState("");
    const [errors, setErrors] = useState([]);
	const { closeModal } = useModal();
    const handleSubmit = (e) => {
		e.preventDefault();
            let newClass = {name, section, subject, room};

        if (edit) {
            newClass.id = class_.id
            console.log("Im being updated", newClass);
            const data = dispatch(editTeacherClassThunk(newClass));
            closeModal();
            if (data) {
            setErrors(data)
        }
        } else {
        console.log("the new class", newClass);
        const data = dispatch(newTeacherClassThunk(newClass));
        closeModal();
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
        {edit ? <h2 id="create-class-header">Update class</h2> : <h2 id="create-class-header">Create class</h2>}
        <form id="create-class-form">
            <input
             type="text"
             value={name}
             onChange={(e) => setName(e.target.value)}
             placeholder="Class name (required)" />

            <input
             type="text"
             value={section}
             onChange={(e) => setSection(e.target.value)}
             placeholder="Section (optional)" />

            <input
             type="text"
             value={subject}
             onChange={(e) => setSubject(e.target.value)}
             placeholder="Subject (optional)" />

            <input
             type="text"
             value={room}
             onChange={(e) => setRoom(e.target.value)}
             placeholder="Room (optional)" />
        </form>
        <div className="create-class-buttons">
            <button onClick={() => closeModal()} id="cancel">Cancel</button>
            <button id="submit-button"onClick={handleSubmit}>{edit ? "Update" : "Create"}</button>
        </div>
        </>
    )
}
