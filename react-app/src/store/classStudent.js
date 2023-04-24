import normalize from "../components/utils/normalize.js";


const STUDENT_CLASSES = "classes/student";
const NEW_CLASS = "/classes/student/new";


const getClassesActionStudent = (classes) => {
    return {
        type: STUDENT_CLASSES,
        classes
    }
}

const newClass = (class_) => {
    return {
        type: NEW_CLASS,
        class_
    }
}


export const getClassesStudentThunk = () =>  async dispatch => {
    const response = await fetch(`/api/classes/student`);

    if (response.ok) {
        const data = await response.json();
        const normalized = normalize(data);
        dispatch(getClassesActionStudent(normalized));
        return normalized;
    }

    // return response.errors

}

export const newStudentClassThunk = (classCode) => async dispatch => {
    const response = await fetch(`/api/classes/join`, {
        method: "POST",
        headers: {"Content-Type": "Application/json"},
        body: JSON.stringify(classCode)
    })

    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            console.log("HERE ARE ERRORS", data.errors);
            return {errors: data.errors};
        }
        dispatch(newClass(data));
        return data;
    }
}




const initialState = {classes: {}};

function studentClassReducer(state = initialState, action) {

    let newState = {};

    switch(action.type) {
        case STUDENT_CLASSES: {
            return {...state, classes: {...action.classes}
            }
        }
        case NEW_CLASS: {
            return {
                ...state,
                classes: {...state.classes, [action.class_.id]: action.class_}
            }
        }
        default: {
            return state
        }
    }
}
export default studentClassReducer
