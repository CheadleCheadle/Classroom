import NoClasses from "./noClasses.js";
import Classes from "./classes";
import GetUser from "../utils/getUser.js"

export default function AllClasses() {
    const user = GetUser();


    return (

        <>
        <Classes></Classes>
        {/* <NoClasses/> */}
        </>

    )


}
