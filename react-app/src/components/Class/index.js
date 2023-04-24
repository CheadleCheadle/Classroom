import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams} from "react-router-dom";
import Banner from "./banner";
import NewAnnouncement from "./NewAnnouncement";
import UpcomingWork from "./ClassCode&Upcoming/upcoming";
import "./main.css"
import AssignmentStream from "./ClassStream/assignmentStream";
export default function ClassPage() {

    const { classId } = useParams()
    const class_ = useClassDetails(classId);

    return (
        <div className="cls-details-cont">
        <div className="cls-detail-pg">
            <Banner class_={class_}/>
        </div>
        <div className="cls-details">
                <UpcomingWork/>
            <div className="announcements-cont">
            <NewAnnouncement/>
            <AssignmentStream assignments={class_.assignments} classId={classId}/>
            </div>
        </div>
        </div>
    )


}



export function useClassDetails(id) {
    id = parseInt(id);
    const class_ = useSelector(state => state.student.classes[id]);
    const class__ = useSelector(state => state.teacher.classes[id]);
    if (class_ && Object.keys(class_).length >= 1) return class_
    else return class__

}
