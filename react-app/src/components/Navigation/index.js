import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { useState } from 'react';
import OpenModalButton from '../OpenModalButton';
import NewClassButton from './NewClassButton';
import ClassNavigation from "./classNavigation.js";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
function Navigation({isLoaded}){
	const sessionUser = useSelector(state => state.session.user);
	const singleClassId = useSelector(state => state.teacher.singleClassId);
	const classIsLoaded = useSelector(state => state.teacher.classIsLoaded);
	const history = useHistory();
	const goHome = () => {
		history.push('/classes')
	}
	return (
		<div className="nav-cont">
			<div className="nav-first">
			<div onClick={() => goHome()} className="home-icon">
			<img src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"></img>
			<span id="classroom">Classroom</span>
			</div>
			</div>
            <div className="cls-nav">
            {singleClassId && classIsLoaded? <ClassNavigation/> : null}
            </div>
			{isLoaded && (
				<div className="nav-second">
			<CreateJoinClass />
			<ProfileButton user={sessionUser} />
				</div>
			)  }
		</div>
	);
}

export default Navigation;


function CreateJoinClass() {
	const [showMenu, setShowMenu] = useState(false);

	const openMenu = (e) => {
		e.stopPropagation();
		console.log("Im being opened", showMenu)
		setShowMenu(!showMenu);
	};



	const joinClassName = "join-create" + (showMenu ? "" : "hidden");
	const closeMenu = () => {
		setShowMenu(false);
		console.log("Im being closed")
	}
    document.addEventListener("click", closeMenu);
	return (
		<>
			<div id="add-icon">
				<FontAwesomeIcon onClick={(e) => openMenu(e)}icon={faPlus} style={{ color: "#212121", }} />
			</div>

			{showMenu &&
				<div className={joinClassName}>
					<Link onClick={() => closeMenu()} id="join-class-link" to="/classes/join">Join a Class</Link>
					<NewClassButton/>
				</div>
			}
		</>
	)

}
