import { useSelector } from "react-redux"

export default function GetUser() {
    const user = useSelector(state => state.session.user);
    return user;
}

// export async function CheckClassOwner(classId) {
//     const response = await fetch('/api/classes/check-owner', {
//         method: "POST",
//         headers: {"Content-Type": "Application/json"},
//         body: JSON.stringify({class_id: classId})
//     });
//     if (response.ok) {
//         const data = await response.json();
//         console.log("this is the check", data, classId);
//         if (data.check) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }
