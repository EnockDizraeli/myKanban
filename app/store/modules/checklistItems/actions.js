define(['store/modules/checklistItems/mutationTypes','DAO/Factory','helpers/createID','observers/global'],
(types, DAOFactory, createID, observer) => {
    let DAO = DAOFactory.create("checklistItem");

    function observeEvents(){
        observer.$on('checklist/delete', (checklistID) => {
            require(['store/index'], (store) => {
                let items = store.getters['checklistItems/getAll'].filter(c => c.checklistID === checklistID);
                bulkDelete(store, items);
            });
        });
    };

    function bulkDelete(store, checklistItems){
        checklistItems.forEach(item => {
            store.dispatch('checklistItems/delete', item.id);            
        });
    };

    function set({commit}, checklistItems){
        commit([types.SET_CHECKLIST_ITEMS], checklistItems);
    };

    function create({commit}, checklistItem){
        checklistItem.id = createID(10);
        checklistItem.completed = false;
        checklistItem.created = (new Date()).getTime();

        DAO.create(checklistItem)
        .then(checklistItem => {
            commit([types.CREATE_CHECKLIST_ITEM], checklistItem);
        });
    };

    function update({commit}, checklistItem){
        DAO.update(checklistItem.id, checklistItem)
        .then(checklistItem => {
            commit([types.UPDATE_CHECKLIST_ITEM], checklistItem);
        });
    };
    
    function remove({commit}, checklistItemID){
        DAO.delete(checklistItemID)
        .then(() => {
            commit([types.DELETE_CHECKLIST_ITEM], checklistItemID);
        });
    };

    observeEvents();
    return {
        set,
        create,
        update,
        delete: remove
    };
});