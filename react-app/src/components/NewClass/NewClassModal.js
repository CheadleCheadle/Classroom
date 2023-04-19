import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";

export default function NewClassModal() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [section, setSection] = useState("");
    const [subject, setSubject] = useState("");
    const [room, setRoom] = useState("");
    const [errors, setErrors] = useState([]);
    return (
        <>
        <h2>Create class</h2>
        <form>
            <ul>
                {errors.map((error, idx) => {
                    <li key={idx}>{error}</li>
                })}
            </ul>
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
            <button>Create</button>
            <button>Cancel</button>
        </div>
        </>
    )
}
