import normalize from "../components/utils/normalize.js";


const STUDENT_CLASSES = "classes/student";



const getClassesActionStudent = (classes) => {
    return {
        type: STUDENT_CLASSES,
        classes
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




const initialState = {classes: {}};

function studentClassReducer(state = initialState, action) {

    let newState = {};

    switch(action.type) {
        case STUDENT_CLASSES: {
            return {...state, classes: {...action.classes}
            }
        }
        default: {
            return state
        }
    }
}
export default studentClassReducer
