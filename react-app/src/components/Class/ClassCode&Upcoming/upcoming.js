
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./main.css";
export default function UpcomingWork() {

    return (
        <div className="upcoming-work">
            <h2>Upcoming</h2>
            <p>No work due soon</p>
            <span id="nav-to-all">
            <NavLink to="/">View All</NavLink>
            </span>
        </div>
    )
}
