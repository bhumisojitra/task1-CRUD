const initial = {
    students: JSON.parse(localStorage.getItem("students")) || [],
    student: null,
    isLodig: false,
    isError: false,
    errorMsg: "soming error",
    deleteData: JSON.parse(localStorage.getItem("deletedStudents")) || [],
    serachData: JSON.parse(localStorage.getItem("data")) || [],
    searchTerm: '',
}

const studentsReducer = (state = initial, action) => {

    switch (action.type) {
        case "addData":

            const allData = action.payload;

            localStorage.setItem("students", JSON.stringify(allData));

            return {
                ...state,
                students: allData,
                student: null,
                isError: false,
                isLodig: false,
            }

        case "error":
            return {
                ...state,
                isError: true,
                errorMsg: "Network error"
            }

        case 'loding':
            return {
                ...state,
                isLodig: true
            }

        case "singleRec":
            return {
                ...state,
                student: action.payload
            }

        case "deleteRec":
            const updatedStudents = state.students.filter(student => student.id !== action.payload);
            const deletedStudent = state.students.find(student => student.id === action.payload);

            const updatedDeletedStudents = [...state.deleteData, deletedStudent];

            localStorage.setItem("students", JSON.stringify(updatedStudents));
            localStorage.setItem("deletedStudents", JSON.stringify(updatedDeletedStudents));

            return {
                ...state,
                students: updatedStudents,
                deleteData: updatedDeletedStudents,
            };

        case "serach":
            const filtered = state.students.filter((student) =>
                student.name.toLowerCase().includes(action.payload.toLowerCase()) ||
                student.email.toLowerCase().includes(action.payload.toLowerCase())
            );
            return {
                ...state,
                serachData: filtered,
                searchTerm: action.payload,
            };

        // case "resetRec":
        //     const recordToReset = state.deleteData.find((rec) => rec.id === action.payload);
        //     const updatedDeleteData = state.deleteData.filter((rec) => rec.id !== action.payload);
        //     const updatedStudentsList = [...state.students, recordToReset];

        //     localStorage.setItem("students", JSON.stringify(updatedStudentsList));
        //     localStorage.setItem("deletedStudents", JSON.stringify(updatedDeleteData));

        //     return {
        //         ...state,
        //         students: updatedStudentsList,
        //         deleteData: updatedDeleteData,
        //     };

        default:
            return state;
    }

}

export default studentsReducer