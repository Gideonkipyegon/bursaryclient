const Reducer = (state, action) => {
    switch (action.type) {

        case "ADD":
            return {
                ui: action.payload
            }
        case "VIEW":
            return {
                ui: action.payload
            }
        case "SIGNUP":
            return {
                ui: action.payload
            }
        case "ADMIN":
            return {
                ui: action.payload
            }
        case "PAYMENT":
            return {
                ui: action.payload
            }
        case "ABOUT":
            return {
                ui: action.payload
            }

        default:
            return state;
    }
}

export default Reducer;





// const Reducer = (state, action) => {
//     switch (action.type) {

//         case "ADD":
//             return {
//                 ui: action.payload
//             }
//         case "VIEW":
//             return {
//                 ui: action.payload
//             }
//         case "LOGIN":
//             return {
//                 ui: action.payload
//             }
//         default:
//             return state;
//     }
// }

// export default Reducer;