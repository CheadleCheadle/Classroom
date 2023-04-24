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
        console.log("CLICKE ME")
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
    const dropClassName = "cls-options-cont" + (isVisible ? "" : " hidden");
    const closeMenu = () => setIsVisible(false);
    document.addEventListener("click", closeMenu);

  return (
    <>
        <div onClick={(e) => openMenu(e)} id="settings-icon">
        <FontAwesomeIcon className="fa-2x"  icon={faEllipsisVertical} style={{color: "#fff",}} />
        </div>
    {isVisible &&
    <div className={dropClassName}>

        <div>
            <OpenModalButton
              buttonText="Edit"
              onButtonClick={handlePropagation}
              modalComponent={<NewClassModal edit={true} class_={class_} />}
            />
            <OpenModalButton
              buttonText="Delete"
              onButtonClick={handlePropagation}
              modalComponent={<DeleteClass classId={class_.id} />}

            />

        </div>

    </div>
    }
    </>
  )
}
