import { useState} from "react"
import { newAnnouncementThunk } from "../../../store/classTeacher";
import "./main.css";
import { useDispatch } from "react-redux";
export default function NewAnnouncement({edit, classId}) {
    const dispatch = useDispatch();
    const [announcement, setAnnouncement] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        const newAnnouncement = {announcement};
        dispatch(newAnnouncementThunk(newAnnouncement, classId))
    }
    return (
        <div className="crt-announcement-cont">
            <div className="announcement-form-cont">
                <form>
                    <textarea type="text"
                    placeholder="Announce something to your class"
                    value={announcement}
                    onChange={(e) => setAnnouncement(e.target.value)}>
                    </textarea>
                    <button onClick={(e) => handleClick(e)}>Post</button>
                </form>
            </div>

        </div>
    )
}
