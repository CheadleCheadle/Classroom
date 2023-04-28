import { useState} from "react"
import { newAnnouncementThunk } from "../../../store/classTeacher";
import "./main.css";
import { useDispatch } from "react-redux";
export default function NewAnnouncement({edit, classId, user}) {
    const dispatch = useDispatch();
    const [announcement, setAnnouncement] = useState("");
    const [formIsOpen, setFormIsOpen] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        const newAnnouncement = {announcement};
        dispatch(newAnnouncementThunk(newAnnouncement, classId))
        setFormIsOpen(false);
    }
    console.log("here is the user", user);
    return (
        <>
                {formIsOpen ?
                <div className="crt-announcement-cont">
                <form id="announcement-form">
                    <textarea
                    id="announcement-text"
                    type="text"
                    placeholder="Announce something to your class"
                    value={announcement}
                    onChange={(e) => setAnnouncement(e.target.value)}>
                    </textarea>
                    <div id="buttons">
                    <button id="cancel" onClick={() => setFormIsOpen(false)}>Cancel</button>
                    <button id="submit" disabled={!announcement.length} onClick={(e) => handleClick(e)}>Post</button>
                    </div>
                </form> </div>: <div onClick={() => setFormIsOpen(true)} id="announcement-button">
                    <img id="user-pfp" src={user.pfp}></img>
                    <p id="Announce-something">Announce something to your class</p>
                    </div>}
        </>
    )
}
