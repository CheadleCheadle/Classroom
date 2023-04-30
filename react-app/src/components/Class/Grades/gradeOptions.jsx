import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react";
export default function GradeOptions({submission}) {
    const [isVisible, setIsVisible] = useState(false);

    const openMenu = (e) => {
        e.stopPropagation();
        setIsVisible(!isVisible);
        console.log(isVisible);
    }
    const downloadWork = () => {
        console.log("WORK BEING DOWNLOADED");
        const files = Object.values(submission.files)
        const url = files[0].url;
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', '');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    const dropClassName = "grade-options-cont" + (isVisible ? "": "hidden");
    const closeMenu = () => setIsVisible(false);
    document.addEventListener("click", closeMenu);

    return (
        <>
        <div onClick={(e) => openMenu(e)} id="setting-grade">
        <FontAwesomeIcon icon={faEllipsisVertical} />
        </div>
    {isVisible &&
    <div className={dropClassName}>
        <button id="download-button" onClick={downloadWork}>Download Work</button>
    </div>
    }
    </>
    )
}
