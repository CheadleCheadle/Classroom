import NoClasses from "./noClasses.js";
import Classes, { useClasses } from "./classes";
import GetUser from "../utils/getUser.js"
export default function AllClasses() {
    const user = GetUser();
    const [isLoaded, classes] = useClasses(true);
    console.log("classes", classes);

    return ( isLoaded &&

       <>
       {classes.length >= 1 ?
        <Classes></Classes>
        : <NoClasses/>}
        </>

    )


}
