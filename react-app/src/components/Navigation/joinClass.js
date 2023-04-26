import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./main.css";
import { newStudentClassThunk } from "../../store/classStudent";
import GetUser from "../utils/getUser";
export default function JoinClass() {
    const dispatch = useDispatch();
    const user = GetUser();
    const history = useHistory();
    const [code, setCode] = useState("");
    const [errors, setErrors] = useState("");
    const handleJoin = async  () => {
        const data = await dispatch(newStudentClassThunk(code));
        if (data?.errors) {
            setErrors(data.errors);
        } else {
        console.log("should be the class", data);
        history.push(`/class/${data.id}`)
        }
    }
    return (
        <div className="join-class-cont">
        <div className="join-class-account">
            <p>You're currently signed in as</p>
            <div>{user.first_name} {user.last_name}</div>
        </div>
            <div className="class-code-cont">
            <h2>Class code</h2>
            <p>Ask your teacher for the class code, then enter it here.</p>
            <div className="code-input-cont">
            <input value={code}
            placeholder="Class code"
            id="cls-code-input"
            type="text"
            required
            maxLength="6"
            onChange={(e) => setCode(e.target.value)}
            ></input>
            <button disabled={code.length < 6 ? true : false} onClick={() => handleJoin()}>Join</button>
            </div>
            <p>{errors}</p>
            </div>
            <div>
                <h2>To sign in with a class code</h2>
                <ul>
                    <li>Use an authorized account</li>
                    <li>Use a class code with 6 digits only</li>
                </ul>
            </div>
        </div>
    )
}
