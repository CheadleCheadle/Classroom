import normalize from "../components/utils/normalize.js"

const TEACHER_CLASSES = "/classes/teach"
const NEW_TEACHER_CLASS = "classes/teacher/new";
const SET_CLASS_ID = "classes/SET_CLASS";
const EDIT_CLASS = "class/edit";
const SET_CLASS_IS_LOADED = "class/isLoaded";


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
        default:
            return state;
    }
}
export default teacherClassReducer
