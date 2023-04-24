// import normalize from "../components/utils/normalize.js";

// const NEW_ASSIGNMENT = "assignments/new";

// const newAssignment = (assignment) => {
//     return {
//         type: NEW_ASSIGNMENT,
//         assignment
//     }
// }

// export const newAssignmentThunk = (assignment, classId) => async dispatch => {
//     const response = await fetch(`/api/assignments/${classId}/new`, {
//         method: "POST",
//         headers: {"Content-Type": "Application/json"},
//         body: JSON.stringify(assignment)
//     });

//     if (response.ok) {
//         const data = await response.json();
//         if (data.errors) {
//             return
//         }
//         dispatch(newAssignment(data));
//         return data;
//     }
// }
