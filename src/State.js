import { reducer } from "./Reducer";

let store = {
    // _State : {
    //     value: '',
    //     arrValue: [],
    // },

    _callSubscriber() {
        console.log("123124");
    },
    
    getState() {
        return this._State;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch( action ){

        this._State.arr = reducer(this._State.arr, action);

        this._callSubscriber(this._State);

    },
};




export default store