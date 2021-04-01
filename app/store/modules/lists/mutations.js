define(['store/modules/lists/mutationTypes'],
(types) => {
    return {
        [types.SET_LISTS](state, lists){
            state.lists = [];
            lists.forEach(list => {
                state.lists.push( list );
            });
        },
        [types.CREATE_LIST](state, list){
            state.lists.push( list );
        },
        [types.UPDATE_LIST](state, list){
            let listIndex = state.lists.indexOf( state.lists.find(b => String(b.id) === String(list.id)) );
            for(let prop in list){
                state.lists[listIndex][prop] = list[prop];
            }
        },
        [types.DELETE_LIST](state, id){
            let index = state.lists.indexOf( state.lists.find(c => String(c.id) === String(id)) );
            state.lists.splice(index, 1);
        }
    };
});