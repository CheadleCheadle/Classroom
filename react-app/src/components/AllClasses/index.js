import NoClasses from "./noClasses.js";
import Classes, { useClasses } from "./classes";
import GetUser from "../utils/getUser.js"

export default function AllClasses() {
    const user = GetUser();
    const [isLoaded, classes] = useClasses(false);
    console.log("classes", classes);

    return (

       <>
       {classes.length >= 1 ?
        <Classes></Classes>
        : <NoClasses/>}
        </>

    )


}
