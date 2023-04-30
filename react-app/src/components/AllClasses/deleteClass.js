import { deleteClassThunk } from "../../store/classTeacher"
import {useHistory} from "react-router-dom";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
export default function DeleteClass({classId}) {
    const history = useHistory();
    const { closeModal } = useModal();
    const dispatch = useDispatch();
    console.log("DELETES CLASSID SHOULD CHANGE:", classId);
    const handleDelete = (e) => {
        history.replace("/classes");
        closeModal();
        dispatch(deleteClassThunk(classId))
    }

    return (
        <div className="delete-assignment">
        <h4>Delete class?</h4>
        <p>Assignments will also be deleted</p>
        <div id="delete-assignment-buttons">
            <button  onClick={() => closeModal()}id="delete-assignment">
                Cancel
            </button>
            <button id="cancel-delete" onClick={(e) => handleDelete(e)}>
                Delete
            </button>
        </div>
        </div>
    )
}
