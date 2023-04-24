import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import OpenModalButton from '../OpenModalButton';
import NewClassButton from './NewClassButton';
import ClassNavigation from "./classNavigation.js";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
function Navigation({isLoaded}){
	const sessionUser = useSelector(state => state.session.user);
	const singleClassId = useSelector(state => state.teacher.singleClassId);
	const classIsLoaded = useSelector(state => state.teacher.classIsLoaded);
	console.log("isloaded", isLoaded);
	return (
		<div className="nav-cont">
			<div className="nav-first">
			<div className="home-icon">
			<img src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"></img>
			<span id="classroom">Classroom</span>
			</div>
			</div>
            <div className="cls-nav">
            {singleClassId && classIsLoaded? <ClassNavigation/> : null}
            </div>
			{isLoaded && (
				<div className="nav-second">
			<Link to="/classes/join">Join a Class</Link>
			<NewClassButton />
			<ProfileButton user={sessionUser} />
				</div>
			)  }
		</div>
	);
}

export default Navigation;
