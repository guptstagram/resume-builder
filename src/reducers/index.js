import {combineReducers} from "redux";
import {resumeDetailsReducer} from "./resumeDetailsReducer";

const rootReducer=combineReducers({
    resumeDetailsReducer,
});

export default rootReducer;