import { combineReducers } from "redux";
import studentsReducer from "./studentsReducer";

const mainReducer = combineReducers({
    studentsReducer
})

export default mainReducer