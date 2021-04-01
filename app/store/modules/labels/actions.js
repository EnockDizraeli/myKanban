define(['store/modules/labels/mutationTypes','DAO/Factory','helpers/createID','observers/global'],
(types, DAOFactory, createID, observer) => {
    let DAO = DAOFactory.create("label");

    function set({commit}, labels){
        commit([types.SET_LABELS], labels);
    };

    function create({commit}, label){
        label.id = createID(10);
        label.created = (new Date()).getTime();
        
        DAO.create(label)
        .then(label => {
            commit([types.CREATE_LABEL], label);
            observer.$emit('label/create', label);
        });
    };

    function update({commit}, label){
        DAO.update(label.id, label)
        .then(label => {
            commit([types.UPDATE_LABEL], label);
        });
    };
    
    function remove({commit}, labelID){
        DAO.delete(labelID)
        .then(() => {
            commit([types.DELETE_LABEL], labelID);
        });
    };

    return {
        set,
        create,
        update,
        delete: remove
    };
});