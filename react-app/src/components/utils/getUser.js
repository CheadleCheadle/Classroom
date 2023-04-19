import { useSelector } from "react-redux"

export default function GetUser() {
    const user = useSelector(state => state.session.user);
    return user;
}
