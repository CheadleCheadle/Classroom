import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams} from "react-router-dom";
export default function ClassPage() {

    const { classId } = useParams()
    const class_ = useClassDetails(+classId);

    console.log("HERES THE CLASS", class_);
    return (
        <h1>Hi</h1>
    )


}



function useClassDetails(id=1) {
    const class_ = useSelector(state => state.studentClasses.classesStudent[id]);
    const class__ = useSelector(state => state.teacherClasses.classesTaught[id]);
    if (class_ && class_.length > 1) return class_
    else return class__

}
