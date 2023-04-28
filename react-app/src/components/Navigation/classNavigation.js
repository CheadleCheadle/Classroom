import { NavLink } from "react-router-dom"
import "./Navigation.css";
import { useSelector } from "react-redux";
import ClassOptions from "../AllClasses/classOptions";
import { useTeacher } from "../Class/ClassStream/assignmentStream";
import GetUser from "../utils/getUser";
// import { useSelector } from "react-redux";
export default function ClassNavigation() {
  const classId = useSelector(state => state.teacher.singleClassId);
  const [isLoading, teacher] = useTeacher(classId);
  const user = GetUser();
  const isOwner = user.id === teacher.id;
    return (
        <>
        <NavLink
          to={`/class/${classId}`}
          className={({ isActive}) =>
             isActive ? "active" : "pending"
          }
        >
        Stream
        </NavLink>

        <NavLink
          to={`/class/${classId}/classwork`}
          className={({ isActive, isPending}) =>
            isPending ? "pending" : "isActive" ? "active" : ""
          }
        >
        Classwork
        </NavLink>

        <NavLink
          to="/classes"
          className={({ isActive, isPending}) =>
            isPending ? "pending" : "isActive" ? "active" : ""
          }
        >
        People
        </NavLink>

        { isOwner ? <NavLink
          to={`/class/${classId}/grades`}
          className={({ isActive, isPending}) =>
            isPending ? "pending" : "isActive" ? "active" : ""
          }
        >
        Grades
        </NavLink> : null}
        </>
    )
}
