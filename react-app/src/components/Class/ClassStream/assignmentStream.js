import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./main.css";
export default function AssignmentStream({ assignments }) {
        assignments = Object.values(assignments);
        const dtFormat = new Intl.DateTimeFormat('en-US');

    return (

        assignments.map((assignment) => (
        <div key={assignment.id}  className="assignment-cont">
            <div className="assignment-info">
                <div id="assignment-font-icon">
                <FontAwesomeIcon icon={faClipboardList} />
                </div>
                <div className="assignment-details">
                    <span>
                    Grant Cheadle posted a new assignment: Testing!
                    </span>
                    <span id="assignment-post-time">{dtFormat.format((new Date(assignment.created_at)))}</span>
                </div>
            </div>
             <div className="assignment-options">
                <FontAwesomeIcon icon={faEllipsisVertical} className="fa-2x"style={{color: "#a30000",}} />
             </div>
        </div>
        ))


    )


}
