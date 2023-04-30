import AssignmentStream from "../ClassStream/assignmentStream";
import { useClassDetails } from "..";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./main.css";
import { useIsOwner } from "../../AllClasses/classOptions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export default function ClassWork() {
    const history = useHistory();
    const { classId } = useParams();
    const isOwner = useIsOwner(classId);
    const class_ = useClassDetails(classId);
    const handleClick = () => {
        history.push(`/class/${classId}/assignments/new`)
    }
    return (
        <div className="assignments-cont">
        { isOwner && <div className="new-class-work-cont">
        <div onClick={() => handleClick()}className="new-classwork">
            <FontAwesomeIcon icon={faPlus} />
            <span>Create</span>
        </div>
        </div>}
        {Object.values(class_.assignments).length ? <AssignmentStream assignments={class_.assignments} classId={classId}/> :
        <div id="no-assignments-display">
            <span id="no-assignments-msg">This is where work will be assigned</span>
            <img src="https://img.icons8.com/?size=512&id=113861&format=png"></img>
        </div>
        }
        </div>
    )
}
