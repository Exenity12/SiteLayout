let initialState = {
    value: "",
    arrValue: "",
}

export const reducer = (state = initialState, action) => {
switch(action.type) {
    case "UPDATE":
        state.value = action.body;
        return state;
    case "SAND":
        state.arrValue += state.value + " ";
        state.value = '';
        return state;
    default: return state;
};
};

