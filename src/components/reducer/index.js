export default function rootReducer(state,action){
    let newState = '';
    if(action.type === 'USER_CHANGE'){
        newState = Object.assign({}, state, {'username': action.newname})
        return newState;
    }
    if(action.type === 'APPEND_USER'){
        //debugger;
        newState = Object.assign({},state,{'user_list': action.user_list})        
        //console.log(newState)
        return newState
    }
    //console.log(state);
    return state;
}