import { combineReducers } from "redux";

import authReducer from "./authReducer";
import FoldersReducer from "./FoldersReducer";

const rootReducer =  combineReducers({auth:authReducer, folders: FoldersReducer,

});

export default rootReducer;