define(['store/modules/checklistItems/mutationTypes'],
(types) => {
    return {
        [types.SET_CHECKLIST_ITEMS](state, checklistItems){
            state.checklistItems = [];
            checklistItems.forEach(checklistItem => {
                state.checklistItems.push( checklistItem );
            });
        },
        [types.CREATE_CHECKLIST_ITEM](state, checklistItem){
            state.checklistItems.push( checklistItem );
        },
        [types.UPDATE_CHECKLIST_ITEM](state, checklistItem){
            let checklistItemIndex = state.checklistItems.indexOf( state.checklistItems.find(b => String(b.id) === String(checklistItem.id)) );
            for(let prop in checklistItem){
                state.checklistItems[checklistItemIndex][prop] = checklistItem[prop];
            }
        },
        [types.DELETE_CHECKLIST_ITEM](state, id){
            let index = state.checklistItems.indexOf( state.checklistItems.find(c => String(c.id) === String(id)) );
            state.checklistItems.splice(index, 1);
        }
    };
});