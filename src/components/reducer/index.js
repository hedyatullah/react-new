export default function rootReducer(state,action){
    let newState = '';
    if(action.type === 'USER_CHANGE'){
        newState = Object.assign({}, state, {'username': action.newname})
        return newState;
    }
    if(action.type === 'APPEND_USER'){        
        var showData = action.user_list.slice(0, state.perPageRecord)
        newState = Object.assign({},state,{'user_list': showData, backupData: action.user_list})        
        //console.log(newState)
        return newState
    }
    if(action.type === 'OPTION_CHANGE_PERPAGE'){        
        var showData = state.backupData.slice(0, action.value)
        newState = Object.assign({},state,{'perPageRecord': action.value, 'user_list': showData})
        console.log(newState)
        return newState;
    }
    //console.log(state);
    return state;
}