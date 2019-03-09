// const reducer = (state=5) =>
//     {
//         return state;
//     }

// const store = Redux.createStore(reducer);

const store = Redux.createStore((state = 5) => state);

let currentState = store.getState();

const action = {
    type: "LOGIN"
};
// Define an action creator here:

function actionCreator() {
    return action;
}


