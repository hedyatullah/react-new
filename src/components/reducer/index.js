export default function rootReducer(state,action){
    let newState = '';
    if(action.type == 'USER_CHANGE'){
        newState = Object.assign({}, state, {'username': action.username})
        return newState;
    }
    console.log(state);
    return state;
}