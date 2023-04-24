import normalize from "../components/utils/normalize.js"
const NEW_ASSIGNMENT = "assignments/new";



const TEACHER_CLASSES = "/classes/teach"
const NEW_TEACHER_CLASS = "classes/teacher/new";
const SET_CLASS_ID = "classes/SET_CLASS";
const EDIT_CLASS = "class/edit";
const SET_CLASS_IS_LOADED = "class/isLoaded";
const DELETE_CLASS = "class/delete";

const getClassesActionTeacher = (classes) => {
    return {
        type: TEACHER_CLASSES,
        classes
    }
}

const newTeacherClass = (class_) => {
    return {
        type: NEW_TEACHER_CLASS,
        class_
    }
}

export const setClassId = (classId) => {
    return {
        type: SET_CLASS_ID,
        classId
    }
}

export const editClass = (class_) => {
    return {
        type: EDIT_CLASS,
        class_
    }
}

export const setClassIsLoaded = (bool) => {
    return {
        type: SET_CLASS_IS_LOADED,
        bool
    }
}

const deleteClass = (classId) => {
    return {
        type: DELETE_CLASS,
        classId
    }
}

const newAssignment = (assignment, classId) => {
    return {
        type: NEW_ASSIGNMENT,
        assignment,
        classId
    }
}

export const getClassesTeacherThunk = () =>  async dispatch => {
    const response = await fetch(`/api/classes/taught`);

    if (response.ok) {
        const data = await response.json();
        const normalized = normalize(data);
        console.log("DATA", normalized);
        dispatch(getClassesActionTeacher(normalized));
        return normalized;
    }

    return response.errors

}

export const newTeacherClassThunk = (class_) => async dispatch => {
    const response = await fetch(`/api/classes/new`, {
        method: "POST",
        headers: {"Content-Type": "Application/json"},
        body: JSON.stringify(class_)
    });


    if (response.ok) {
        const data = await response.json();
        console.log("DATA123", data);
        if (data.errors) {
            return
        }
        dispatch(newTeacherClass(data));
        return data;
    }

}

export const editTeacherClassThunk = (class_) => async dispatch => {
    const response = await fetch(`/api/classes/${class_.id}/edit`, {
        method: "PUT",
        headers: {"Content-Type": "Application/json"},
        body: JSON.stringify(class_)
    });

    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return
        }
        dispatch(editClass(data));
        return data;
    }
}

export const deleteClassThunk = (classId) => async dispatch => {
    const response = await fetch(`/api/classes/${classId}/delete`, {
        method: "DELETE",
        headers: {"Content-Type": "Application/json"},
        body: null
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(deleteClass(classId));
        return data;
    }
}

export const newAssignmentThunk = (assignment, classId) => async dispatch => {
    const response = await fetch(`/api/assignments/${classId}/new`, {
        method: "POST",
        headers: {"Content-Type": "Application/json"},
        body: JSON.stringify(assignment)
    });

    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return
        }
        dispatch(newAssignment(data, classId));
        return data;
    }
}


const initialState = { classes: {}, singleClassId: null, classIsLoaded: false };


const teacherClassReducer = (state = initialState, action)  => {

    let newState = {};
    console.log("TYPE", action)
    switch (action.type) {
        case TEACHER_CLASSES: {
            newState = {...state, classes: {...action.classes}}
            return newState;
        }
        case NEW_TEACHER_CLASS: {
            return {
                ...state,
                classes: {...state.classes, [action.class_.id]: action.class_}
            }
        }
        case SET_CLASS_ID: {
            return {
                ...state,
                classes: {...state.classes},
                singleClassId: action.classId
            }
        }
        case EDIT_CLASS: {
            newState = {...state};
            newState.classes = {...state.classes};
            newState.classes[action.class_.id] = action.class_
            return newState;
        }
        case SET_CLASS_IS_LOADED: {
            return {
                ...state,
                classIsLoaded: action.bool
            }
        }
        case DELETE_CLASS: {
            newState = {...state, classes: {...state.classes},
             singleClassId: null, classIsLoaded: false
            };
            delete newState.classes[action.classId];
            return newState;
        }
        case NEW_ASSIGNMENT: {
            newState = {...state, classes: {...state.classes}};
            newState.classes[action.classId].assignments =
            {...newState.classes[action.classId].assignments,
                 [action.assignment.id]: {...action.assignment}}
            return newState;
        }
        default:
            return state;
    }
}
export default teacherClassReducer
