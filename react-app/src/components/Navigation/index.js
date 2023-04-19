import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import OpenModalButton from '../OpenModalButton';
import NewClassButton from './NewClassButton';
function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (
		<div className="nav-cont">
			<div className="nav-first">
			<div className="home-icon">
			<img src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"></img>
			<span id="classroom">Classroom</span>
			</div>
			</div>
			{isLoaded && (
				<div className="nav-second">
			<NewClassButton />
			<ProfileButton user={sessionUser} />
				</div>
			)}
		</div>
	);
}

export default Navigation;
