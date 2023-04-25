
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./main.css";
export default function UpcomingWork({classId}) {

    return (
        <div className="upcoming-work">
            <h2>Upcoming</h2>
            <p>No work due soon</p>
            <span id="nav-to-all">
            <Link id="nav-to-all" to={`/class/${classId}/classwork`}>View All</Link>
            </span>
        </div>
    )
}
