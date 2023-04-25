
import "./main.css";
export default function ClassCode({class_}) {

    return (
        <div className="class-code">
            <h2>Class code</h2>
            <div id="cls-code">
                <h1>{class_.code}</h1>
            </div>
        </div>
    )
}
