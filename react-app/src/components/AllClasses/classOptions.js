import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./class.css";
import OpenModalButton from "../OpenModalButton";
import DeleteClass from "./deleteClass";
import NewClassModal from "../NewClass/NewClassModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { setClassId, setClassIsLoaded } from "../../store/classTeacher";
export default function ClassOptions({class_}) {
    const dispatch = useDispatch();
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    const isOwner = useIsOwner(class_.id)
    console.log("HERE is the avl", isOwner);

    const openMenu = (e) => {
    e.stopPropagation();
    if (isVisible) {
      dispatch(setClassId(null));
      dispatch(setClassIsLoaded(false))
    } else {
      dispatch(setClassId(class_.id));
    }
    setIsVisible(!isVisible);

    };

    const handlePropagation = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    const dropClassName = "cls-options-cont" + (isVisible ? "" : " hidden");
    const closeMenu = () => setIsVisible(false);
    document.addEventListener("click", closeMenu);

  return ( isOwner &&
    <>
        <div onClick={(e) => openMenu(e)} id="settings-icon">
        <FontAwesomeIcon className="fa-2x"  icon={faEllipsisVertical} style={{color: "#fff",}} />
        </div>
    {isVisible &&
    <div className={dropClassName}>
        {/* Used a stopProp here so when a user clicks on a classes
            options it doesn't load all the information for that class.
        */}
        <div onClick={(e) => e.stopPropagation()}>
            <OpenModalButton
              buttonText="Edit"
              modalComponent={<NewClassModal edit={true} class_={class_} />}
            />
            <OpenModalButton
              buttonText="Delete"
              modalComponent={<DeleteClass classId={class_.id} />}
            />

        </div>

    </div>
    }
    </>
  )
}

export function useIsOwner(classId) {
  const [isOwner, setIsOwner] = useState(false)
  useEffect(() => {
    async function CheckClassOwner(classId) {
      const response = await fetch('/api/classes/check-owner', {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify({ class_id: classId })
      });
      if (response.ok) {
        const data = await response.json();
        console.log("this is the check", data, classId);
        if (data.check) {
          setIsOwner(true)
        } else {
          setIsOwner(false)
        }
      }
    }
    CheckClassOwner(classId);
    return () => {
      setIsOwner(false);
    }
  }, [classId])
  return isOwner;
}
