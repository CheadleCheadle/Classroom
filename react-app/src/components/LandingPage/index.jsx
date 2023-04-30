import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min"
import "./main.css"
export default function LandingPage() {
    const history = useHistory();

    return (
        <>
        <LandingNavBar />
        <div className="landing-cont">
            <div className="landing-sect-1">
                <span id="class-icon-cont">
                    <img src="https://edu.google.com/assets/icons/google-brands/classroom.svg"></img>
                </span>
                <div id="landing-message-cont">
                <h1>Where teaching and learning come together</h1>
                <span id="landing-msg"><p>Classroom is your all-in-one place for teaching and learning. Our easy-to-use and secure tool helps educators manage, measure, and enrich learning experiences</p></span>
                </div>
                <div>
                    <div onClick={() => history.push('/login')} id="landing-sign-in">
                        <p>Sign in to Classroom</p>
                    </div>
                </div>
            </div>

            <div className="landing-sect-2">

                <div className="all-in-one-cont">
                    <img src="https://edu.google.com/assets/icons/pages/main/classroom/all-in-one-place.svg"></img>
                    <div id="feature">
                        All-in-one place
                    </div>
                    <div id="feature-msg-cont">
                        <p id="feature-msg">
                            Bring all your learning tools together and manage multiple classes in one central destination.
                        </p>
                    </div>
                </div>
                <div  className="easy-to-use-cont">
                    <img src="https://edu.google.com/assets/icons/pages/main/classroom/easy-to-use.svg"></img>
                    <div id="feature">
                        Easy to use
                    </div>
                    <div id="feature-msg-cont">
                        <p id="feature-msg">Anyone in your school community can get up and running with Classroom in minutes.</p>
                    </div>
                </div>
                <div className="built-for-collaboration-cont">
                    <img src="https://edu.google.com/assets/icons/pages/main/classroom/built-for-collaboration.svg"></img>
                    <div id="feature">
                        Built for collaboration
                    </div>
                    <div id="feature-msg-cont">
                        <p id="feature-msg">
                            Empower teaching and learning for all and give your class more flexibility and mobility.
                        </p>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}


function LandingNavBar() {
    const history = useHistory();
    return (
        <div className="nav-cont-land">
            <div className="land-first">
            <div className="home-icon">
			<img src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"></img>
            <span id="classroom">for Education</span>
            </div>
            </div>

            <div className="land-second">
                <div onClick={() => history.push('/login')}id="signin-land-cont">
                <span id="user-icon"><FontAwesomeIcon icon={faUser} /></span>
                <span><Link id="signin-land">Sign in</Link></span>
                </div>
            </div>
        </div>

    )
}
