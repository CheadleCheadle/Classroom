import { NavLink } from "react-router-dom"
import "./Navigation.css";
import { useSelector } from "react-redux";
import ClassOptions from "../AllClasses/classOptions";
// import { useSelector } from "react-redux";
export default function ClassNavigation() {
  const classId = useSelector(state => state.teacher.singleClassId);
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
          to="/"
          className={({ isActive, isPending}) =>
            isPending ? "pending" : "isActive" ? "active" : ""
          }
        >
        People
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive, isPending}) =>
            isPending ? "pending" : "isActive" ? "active" : ""
          }
        >
        Grades
        </NavLink>
        </>
    )
}
