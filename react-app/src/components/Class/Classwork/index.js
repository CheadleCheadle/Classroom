import AssignmentStream from "../ClassStream/assignmentStream";
import { useClassDetails } from "..";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./main.css";
import { useIsOwner } from "../../AllClasses/classOptions";
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
        <div className="new-classwork">
            <span>+</span>
            <span onClick={() => handleClick()}>Create</span>
        </div>
        </div>}
        <AssignmentStream assignments={class_.assignments} classId={classId}/>
        </div>
    )
}
