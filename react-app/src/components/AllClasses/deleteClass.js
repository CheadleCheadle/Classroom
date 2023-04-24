import { deleteClassThunk } from "../../store/classTeacher"
import {useHistory} from "react-router-dom";
import { useDispatch } from "react-redux";
export default function DeleteClass({classId}) {
    const history = useHistory();
    const dispatch = useDispatch();
    console.log("DELETES CLASSID SHOULD CHANGE:", classId);
    const handleDelete = (classId) => {
        dispatch(deleteClassThunk(classId));
        history.replace("/classes");
    }

    return (
        <div>
        <h2>Delete Class</h2>
        <div>
            <button onClick={() => handleDelete(classId)}>
                Yes (Delete)
            </button>

            <button>
                No (Keep)
            </button>
        </div>
        </div>
    )
}
