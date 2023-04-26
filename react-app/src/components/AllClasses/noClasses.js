import NewClassModal from "../NewClass/NewClassModal";
import OpenModalButton from "../OpenModalButton";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./class.css";
export default function NoClasses() {




    return(


        <div className="cls-none">
            <img src="https://www.gstatic.com/classroom/empty_states_home.svg"></img>
            <span id= "landing-txt">All of your classes have been archived</span>
            <div className="cls-none-buttons">
                {/* <button id="create-class">Create class</button> */}
                <OpenModalButton
                buttonText="Create class"
                modalComponent={<NewClassModal />}
                />
                {/* <button id="join-class">Join class</button> */}
                <Link id="join-class" to="/classes/join">Join class</Link>
            </div>
        </div>

    )


}
