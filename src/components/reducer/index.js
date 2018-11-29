export default function rootReducer(state,action){
    let newState = '';
    if(action.type === 'USER_CHANGE'){
        newState = Object.assign({}, state, {'username': action.newname})
        return newState;
    }
    if(action.type === 'APPEND_USER'){ 
        var totalRecord = action.user_list.length;
        var numberofPages = totalRecord / state.perPageRecord       
        var showData = action.user_list.slice(0, state.perPageRecord)
        newState = Object.assign({},state,{'user_list': showData, backupData: action.user_list, numberofPages: numberofPages})        
        //console.log(newState)
        return newState
    }
    if(action.type === 'OPTION_CHANGE_PERPAGE'){       
        var totalRecord = state.backupData.length;
        var numberofPages = totalRecord / action.value
        var showData = state.backupData.slice(0, action.value)
        newState = Object.assign({},state,{'perPageRecord': action.value, 'user_list': showData, numberofPages:numberofPages})
        console.log(newState)
        return newState;
    }
    if(action.type === 'CURRENT_PAGE_CHANGE'){
        var perPageRecord = state.perPageRecord;
        var currentPage = action.currentPage;
        var innitialPoint = (perPageRecord * ((currentPage +1) -1));
        var endPoint = ((perPageRecord * (currentPage +1) -1))
        var showData = state.backupData.slice(innitialPoint, endPoint+1)
        newState = Object.assign({},state,{'user_list': showData, currentPage:currentPage})
        return newState
    }
    //console.log(state);
    return state;
}