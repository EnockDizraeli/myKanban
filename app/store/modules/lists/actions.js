define(['store/modules/lists/mutationTypes','DAO/Factory','helpers/createID','observers/global'],
(types, DAOFactory, createID, observer) => {
    let DAO = DAOFactory.create("list");

    function set({commit}, lists){
        commit([types.SET_LISTS], lists);
    };

    function create({commit}, list){
        list.id = createID(10);
        list.archived = false;
        
        DAO.create(list)
        .then(list => {
            commit([types.CREATE_LIST], list);
            observer.$emit('list/create', list);
        });
    };

    function update({commit}, list){
        DAO.update(list.id, list)
        .then(list => {
            commit([types.UPDATE_LIST], list);
        });
    };

    
    function move({commit}, list){
        DAO.update(list.id, list)
        .then(list => {
            commit([types.UPDATE_LIST], list);
            observer.$emit('list/move', list);
        });
    };

    function remove({commit}, listID){
        DAO.delete(listID)
        .then(() => {
            commit([types.DELETE_LIST], listID);
        });
    };

    function archive({commit}, list){
        list.archived = true;
        DAO.update(list.id, list)
        .then(list => {
            commit([types.UPDATE_LIST], list);
            observer.$emit('list/archiveUpdate', list);
        });
    };

    function unarchive({commit}, list){
        list.archived = false;
        DAO.update(list.id, list)
        .then(list => {
            commit([types.UPDATE_LIST], list);
            observer.$emit('list/archiveUpdate', list);
        });
    };

    return {
        set,
        create,
        update,
        delete: remove,
        archive,
        unarchive,
        move
    };
});