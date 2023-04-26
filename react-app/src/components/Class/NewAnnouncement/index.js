import { useState } from "react"

import "./main.css";

export default function NewAnnouncement({edit}) {
    const [announcement, setAnnouncement] = useState("");

    return (
        <div className="crt-announcement-cont">
            <span id="for-label">For</span>
            <div className="drop-down-cont">
                <select placeholder="Classes">
                </select>
                <select placeholder="All Students">
                </select>
            </div>
            <div className="announcement-form-cont">
                <form>
                    <input type="text"
                    placeholder="Announce something to your class"
                    value={announcement}
                    onChange={(e) => setAnnouncement(e.target.value)}>
                    </input>
                    <button onClick={() => window.alert("feature coming soon...")}>Post</button>
                </form>
            </div>

        </div>
    )
}
