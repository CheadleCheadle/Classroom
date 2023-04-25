import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./main.css";
import OpenModalButton from "../../OpenModalButton";
import { deleteAssignmentThunk } from "../../../store/classTeacher";
export default function AssignmentOptions({classId, assignment}) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

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
    // useEffect(() => {
    //   if (!isVisible) return;

    //   // const closeMenu = (e) => {
    //   //   if (!ref.current.contains(e.target)) {
    //   //     setIsVisible(false);
    //   //   }
    //   // };

    //   // document.addEventListener("click", closeMenu);

    //   // return () => document.removeEventListener("click", closeMenu);
    // }, [isVisible]);
    const dropClassName = "assignment-options-cont" + (isVisible ? "" : " hidden");
    const closeMenu = () => setIsVisible(false);
    document.addEventListener("click", closeMenu);

  return (
    <>
        <div onClick={(e) => openMenu(e)} id="settings-icon">
        <FontAwesomeIcon className="fa-2x"  icon={faEllipsisVertical} style={{color: "red",}} />
        </div>
    {isVisible &&
    <div className={dropClassName}>

        <div>
            <button onClick={(e) => handleEdit(e)}>
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
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteAssignmentThunk(assignmentId, classId));
        history.replace(`/class/${classId}`);
    }

    return (
        <div>
        <h2>Delete Assignment</h2>
        <div>
            <button onClick={() => handleDelete()}>
                Yes (Delete)
            </button>

            <button>
                No (Keep)
            </button>
        </div>
        </div>
    )
}
