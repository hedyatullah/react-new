export default function rootReducer(state,action){
    let newState = '';
    if(action.type === 'USER_CHANGE'){
        newState = Object.assign({}, state, {'username': action.newname})
        return newState;
    }
    if(action.type === 'APPEND_DATA'){ 
        //debugger;
        return operationalData(action.dataFromBkend,action.default,state);
        
    }
        
    // if(action.type === 'POST_DATA'){
    //     let totalRecord = action.post_list.length;
    //     debugger;
    //     if(action.default){
    //         state = Object.assign({},state,action.default);
    //     }
    //     let numberofPages = totalRecord / state.perPageRecord;
    //     let showData = action.post_list.slice(0, state.perPageRecord)
    //     newState = Object.assign({},state,{'commonData': showData , backupData: action.post_list, numberofPages: numberofPages})
    //     console.log(newState);
    //     return newState;
    // }
    if(action.type === 'OPTION_CHANGE_PERPAGE'){       
        var totalRecord = state.backupData.length;
        var numberofPages = totalRecord / action.value
        var showData = state.backupData.slice(0, action.value)
        newState = Object.assign({},state,{'perPageRecord': action.value, 'commonData': showData, numberofPages:numberofPages})
        //console.log(newState)
        return newState;
    }
    if(action.type === 'SORT_DATA'){
        let backupData = state.backupData;
        let sortCol = action.sortbyKey
        let sortedData = backupData.sort(function(a,b){
            return a[sortCol] == b[sortCol] ? 0 : +(a[sortCol] < b[sortCol]) || -1;
        })
        var perPageRecord = state.perPageRecord;
        var currentPage = state.currentPage;
        var innitialPoint = (perPageRecord * ((currentPage +1) -1));
        var endPoint = ((perPageRecord * (currentPage +1) -1))
        var showData = sortedData.slice(innitialPoint, endPoint+1)
        newState = Object.assign({},state,{'commonData': showData,})
        return newState
    }

    if(action.type === 'CURRENT_PAGE_CHANGE'){
        //debugger;
        var perPageRecord = state.perPageRecord;
        var currentPage = action.currentPage;
        var innitialPoint = (perPageRecord * ((currentPage +1) -1));
        var endPoint = ((perPageRecord * (currentPage +1) -1))
        

        if(state.searchval){
            let showData = Object.assign([],state.backupData);
            let searchData = [];
            let searchval = state.searchval.toString();
            let count = 0;
            showData.map((item) => {
                //console.log(typeof item[colval]) console.log(item[searchval])            
                if((item[state.colval].toString().indexOf(state.searchval)) > -1){
                    searchData.push(item)
                    count++;
                }
                return searchData;           
                } )
                state.backupData = searchData;
                let totalcount = count / state.perPageRecord
        }
        var showData = state.backupData.slice(innitialPoint, endPoint+1)
        newState = Object.assign({},state,{'commonData': showData, currentPage:currentPage})
        return newState
    }
    if(action.type === 'SEARCH'){
        let showData = Object.assign([],state.backupData);
        let colval = action.colval;
        let searchval = action.searchval.toString();
        let count = 0;
        let searchData = [];
        showData.map((item) => {
            //console.log(typeof item[colval]) console.log(item[searchval])            
            if((item[colval].toString().indexOf(searchval)) > -1){
                searchData.push(item)
                count++;
            }
            return searchData;           
            } )
            let totalcount = count / state.perPageRecord  //console.log(Math.round(totalcount));         
            var perPageRecord = state.perPageRecord;
            var currentPage = state.currentPage;
            var innitialPoint = (perPageRecord * ((currentPage +1) -1));
            var endPoint = ((perPageRecord * (currentPage +1) -1))
            var showData = searchData.slice(innitialPoint, endPoint+1)

            newState = Object.assign({},state, {commonData:showData, numberofPages: totalcount, colval:colval, searchval:searchval})
            return newState;
        //console.log(colval)
    }

    if(action.type === 'PARENT_CHECKED'){
        let showData = Object.assign([], state.dataFromBkend);
        let checkedData = showData.map(item => {
            item.checked = action.checked
            return item;
        })
        newState = Object.assign({},state, {'commonData': checkedData, parentChkStatus: action.checked})
        console.log(newState)
        return newState;
    }
    if(action.type === 'CHILD_CHECKED'){
        let showData = Object.assign([], state.commonData);
        showData[action.position].checked = action.chkStatus;

        var totalChecked = 0;
        showData.map((user) => {
            if (user.checked) {
                totalChecked++;
            }
        });
        newState = Object.assign({},state, {commonData: showData, parentChkStatus: (totalChecked == showData.length)});
        return newState;
    }  
      

    //console.log(state);
    return state;
}
function operationalData(dataFromBkend,defaultval,state){
    var totalRecord = dataFromBkend.length;
    if(defaultval){
        state = Object.assign({},state,defaultval);
    }
    var numberofPages = totalRecord / state.perPageRecord       
    var showData = dataFromBkend.slice(0, state.perPageRecord)
    let newState = Object.assign({},state,{'commonData': showData, backupData: dataFromBkend, numberofPages: numberofPages})        
    //console.log(newState)
    return newState
}