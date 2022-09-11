import { combineReducers, legacy_createStore as createStore } from "redux";
import { reducer } from "./Reducer";

let reducers = combineReducers({
    allInformation: reducer,
});


let store = createStore(reducers);


export default store; 