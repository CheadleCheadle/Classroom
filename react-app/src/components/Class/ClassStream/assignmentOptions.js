import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./main.css";
import OpenModalButton from "../../OpenModalButton";
import { deleteAssignmentThunk } from "../../../store/classTeacher";
import { useIsOwner } from "../../AllClasses/classOptions";
import { useModal } from "../../../context/Modal";
export default function AssignmentOptions({classId, assignment}) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();
    const isOwner = useIsOwner(classId);
    const openMenu = (e) => {
    e.stopPropagation();
    if (isVisible) {
    //   dispatch(setClassId(null));
    //   dispatch(setClassIsLoaded(false))
    } else {
    //   dispatch(setClassId(class_.id));
    }
    setIsVisible(!isVisible);

    };

    const handlePropagation = (e) => {
        console.log("CLICKE ME")
    }

    const handleEdit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        history.push(`/class/${classId}/assignments/${assignment.id}/edit`)
    }

    const dropClassName = "assignment-options-cont" + (isVisible ? "" : " hidden");
    const closeMenu = () => setIsVisible(false);
    document.addEventListener("click", closeMenu);

  return ( isOwner &&
    <>
        <div onClick={(e) => openMenu(e)} id="settings-icon">
        <FontAwesomeIcon className="fa-2x"  icon={faEllipsisVertical} />
        </div>
    {isVisible &&
    <div className={dropClassName}>

        <div>
            <button id="create-class"onClick={(e) => handleEdit(e)}>
                Edit
            </button>
            <OpenModalButton
              buttonText="Delete"
              onButtonClick={handlePropagation}
              modalComponent={<DeleteAssignment classId={classId} assignmentId={assignment.id}/>}
            />

        </div>

    </div>
    }
    </>
  )
}


export function DeleteAssignment({classId, assignmentId}) {
    const history = useHistory();
    const {closeModal} = useModal()
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteAssignmentThunk(assignmentId, classId));
        closeModal();
        history.replace(`/class/${classId}`);
    }

    return (
        <div className="delete-assignment">
        <h4>Delete assignment?</h4>
        <p>Grades will also be deleted</p>
        <div id="delete-assignment-buttons">
            <button id="delete-assignment" onClick={() => closeModal()}>
                Cancel
            </button>
            <button id="cancel-delete" onClick={() => handleDelete()}>
                Delete
            </button>

        </div>
        </div>
    )
}
