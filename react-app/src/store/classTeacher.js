import normalize from "../components/utils/normalize.js"

const TEACHER_CLASSES = "/classes/teach"


const getClassesActionTeacher = (classes) => {
    return {
        type: TEACHER_CLASSES,
        classes
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



const initialState = {classesTaught: {}, singleClassId: null};


const teacherClassReducer = (state = initialState, action)  => {

    let newState = {};
    console.log("TYPE", action.type)
    switch (action.type) {
        case TEACHER_CLASSES: {
            newState = {...state, classesTaught: {...action.classes}}
            return newState;
        }
        default:
            return state;
    }
}
export default teacherClassReducer
