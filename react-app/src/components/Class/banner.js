import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from "@fortawesome/free-solid-svg-icons"
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons"
export default function Banner({ class_ }) {

    return (

        <div className="banner-cont" style={{backgroundImage: `url("${class_.image}")`}}>
            <div className="banner-sect-1">
                <div className="edit-cls">
                    <FontAwesomeIcon icon={faPencil} />
                    <h4>Customize</h4>
                </div>
            </div>
            <div className="class-details-cont">
                <div className="class-details">
                    <h2>{class_.name}</h2>
                    <h4>{class_.section}</h4>
                </div>
                <span id="info-cont"><FontAwesomeIcon icon={faCircleInfo} /> </span>
            </div>
        </div>
    )
}
