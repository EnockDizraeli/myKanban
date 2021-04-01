define(['store/modules/checklists/mutationTypes'],
(types) => {
    return {
        [types.SET_CHECKLISTS](state, checklists){
            state.checklists = [];
            checklists.forEach(checklist => {
                state.checklists.push( checklist );
            });
        },
        [types.CREATE_CHECKLIST](state, checklist){
            state.checklists.push( checklist );
        },
        [types.UPDATE_CHECKLIST](state, checklist){
            let checklistIndex = state.checklists.indexOf( state.checklists.find(b => String(b.id) === String(checklist.id)) );
            for(let prop in checklist){
                state.checklists[checklistIndex][prop] = checklist[prop];
            }
        },
        [types.DELETE_CHECKLIST](state, id){
            let index = state.checklists.indexOf( state.checklists.find(c => String(c.id) === String(id)) );
            state.checklists.splice(index, 1);
        }
    };
});