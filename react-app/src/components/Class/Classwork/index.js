import AssignmentStream from "../ClassStream/assignmentStream";
import { useClassDetails } from "..";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./main.css";
export default function ClassWork() {
    const history = useHistory();
    const { classId } = useParams();
    const class_ = useClassDetails(classId);
    const handleClick = () => {
        history.push(`/class/${classId}/assignments/new`)
    }
    return (
        <div className="assignments-cont">
        <div className="new-class-work-cont">
        <div className="new-classwork">
            <span>+</span>
            <span onClick={() => handleClick()}>Create</span>
        </div>
        </div>
        <AssignmentStream assignments={class_.assignments} classId={classId}/>
        </div>
    )
}
