import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams} from "react-router-dom";
import Banner from "./banner";
import NewAnnouncement from "./NewAnnouncement";
import UpcomingWork from "./ClassCode&Upcoming/upcoming";
import "./main.css"
import GetUser from "../utils/getUser";
import AssignmentStream, { useTeacher } from "./ClassStream/assignmentStream";
import ClassCode from "./ClassCode&Upcoming";
import AnnouncementStream from "./ClassStream/announcementStream";
export default function ClassPage() {
    const user = GetUser();
    const { classId } = useParams()
    const [isLoading, teacher] = useTeacher(classId);
    const class_ = useClassDetails(classId);
    const HandleNothing = () => {
        if (!Object.values(class_.announcements).length && !Object.values(class_.assignments).length) {
            return (
            <div id="landing-class">
                <h3>This is where you can talk to your class</h3>
                <p>Use the stream to share announcements and post assignments.</p>
            </div>
            )
        } else {
            return (
                <>
                <AnnouncementStream announcements={class_.announcements} classId={classId} />
                <AssignmentStream assignments={class_.assignments} announcements={class_.announcements}classId={classId}/>
                </>
            )
        }
    }
    return ( isLoading &&
        <div className="cls-details-cont">
        <div className="cls-detail-pg">
            <Banner class_={class_}/>
        </div>
        <div className="cls-details">
            <div id="code-work">
                {teacher.id === user.id ? <ClassCode class_={class_}/> : null}
                <UpcomingWork classId={classId}/>
            </div>
            <div className="announcements-cont">
            { teacher.id === user.id ? <NewAnnouncement classId={classId} user={user}/>: null}
            <HandleNothing />
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
