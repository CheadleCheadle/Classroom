import normalize from "../components/utils/normalize.js"



const NEW_SUBMISSION= "submission/new";

const newSubmission = (payload) => {
    return {
        type: NEW_SUBMISSION,
        payload
    }
}


export const newSubmissionThunk = (files, isDone, assignmentId) => async dispatch => {
    const obj = {done: isDone, files: files[0]};
    console.log("File", files[0]);
    const formData = new FormData();
    // formData.append("name", files[0].name);
    // formData.append("type", files[0].type)
    formData.append('files', files[0]);
    console.log("fwasd", files);
    const option = {
        method: "POST",
        body: formData,
    };
    const response = await fetch(`/api/grades/${assignmentId}/new`, option);

    if (response.ok) {
        const data = await response.json();
        console.log("Here is the response daat", data);
        dispatch(newSubmission(data));
        return data;
    }

}


const initialState = { submissions: {} }

const submissionsReducer = (state = initialState, action) => {
    let newState = {};

    switch(action.type) {
        case NEW_SUBMISSION: {
            return {
                ...state, submissions: {...state.submissions, [action.payload.id]: action.payload}
            }
        }
        default:
            return state

    }
}

export default submissionsReducer
