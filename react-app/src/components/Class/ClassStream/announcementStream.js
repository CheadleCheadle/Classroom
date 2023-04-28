import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { useTeacher } from './assignmentStream';
export default function AnnouncementStream({announcements, classId}) {
    console.log("Before", announcements)
    if (Object.values(announcements).length) {
        announcements = Object.values(announcements);
    } else {
        announcements = [];
    }
    const [isLoading, teacher] = useTeacher(classId);
    const dtFormat = new Intl.DateTimeFormat('en-US');
    console.log("After", announcements)
    return (
        announcements.map((announcement) => (
            <div className="ann-cont" key={announcement.id}>
                <div className="assignment-info">
                <div id="assignment-font-icon">
                    <FontAwesomeIcon icon={faBullhorn} style={{color: "#fff"}} />
                </div>
                    <div className="assignment-details">
                        <div id="announcement-cont">
                        <span>
                            {teacher.first_name} { teacher.last_name}:
                        </span>
                        <span id="the-announcement">{announcement.announcement}</span>
                        </div>
                        <span id="assignment-post-time">{dtFormat.format((new Date(announcement.created_at)))}</span>
                    </div>
                </div>

            </div>
        ))
    )
}
