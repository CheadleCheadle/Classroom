import "./main.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons"

export default function AboutMe() {

    return (
        <>
            <Link id="back" to="/">
                <FontAwesomeIcon icon={faArrowLeftLong} />
                Back
            </Link>

            <span id="profile-cont">
                <h1>Profile</h1>
                <h4>Hey there, I'm Grant A. Cheadle, a Full-Stack developer dedicated to creating educational tools.</h4>
            </span>
            <div id="about-me-cont">

                <div className="about-info">
                    <h3>About me</h3>
                    <p>I specialize in front-end technologies, including React.js and Vue.js, and excel in programming languages such as Javascript, Python, and SQL. Currently, I am honing my expertise in React.js while delving into innovative languages like Rust and TypeScript to develop robust, scalable, and secure applications. Driven by a passion for delivering results, I am well-equipped to confront any challenge and make a significant impact within any team!</p>
                </div>

                <div className="about-info">
                    <div className="pfp"></div>
                </div>

                <div className="about-info">
                    <h3>Details</h3>
                    <span>
                        <p>Technologies Used</p>
                        <ul id="technologies">
                            <li>
                                <img src="https://img.icons8.com/color/48/python--v1.png"></img>
                            </li>
                            <li>
                                <img src="https://cheadlecheadle.github.io/javascript-svgrepo-com.svg"></img>
                            </li>
                            <li>
                                <img src="https://cheadlecheadle.github.io/react-svgrepo-com.svg"></img>
                            </li>
                            <li>
                                <img src="https://cheadlecheadle.github.io/redux-svgrepo-com.svg"></img>
                            </li>
                            <li>
                                <img src="https://img.icons8.com/ios/50/flask.png"></img>
                            </li>
                            <li>
                                <img src="https://icon.icepanel.io/Technology/png-shadow-512/SQLAlchemy.png" alt="express-js" />
                            </li>
                            <li>
                                <img src="https://cheadlecheadle.github.io/node-js-svgrepo-com.svg"></img>
                            </li>
                            <li>
                                <img src="https://cheadlecheadle.github.io/css-3-svgrepo-com.svg"></img>
                            </li>
                            <li>
                                <img src="https://img.icons8.com/color/48/amazon-web-services.png"></img>
                            </li>

                        </ul>
                    </span>
                    <span>
                        <div id="externals">

                            <a id="linkedin" href="https://www.linkedin.com/in/grant-a-cheadle-0233771a7/" target="_blank">
                                <i class="fa-brands fa-linkedin"></i>
                            </a>

                            <a id="linkedin" href="https://github.com/CheadleCheadle" target="_blank">
                                <i class="fa-brands fa-github"></i>
                            </a>
                            <a id="portfolio" href="https://cheadlecheadle.github.io/" target="_blank">Portfolio</a>
                        </div>
                    </span>

                </div>

            </div>
        </>
    )
}
