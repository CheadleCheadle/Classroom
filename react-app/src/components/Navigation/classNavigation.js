import { NavLink } from "react-router-dom"
import "./Navigation.css";
export default function ClassNavigation() {

    return (
        <>
        <NavLink
          id="navlnk"
          to="/"
          className={({ isActive, isPending}) =>
            isPending ? "pending" : "isActive" ? "active" : ""
          }
        >
        Stream
        </NavLink>

        <NavLink
          to="/"
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
