define(['store/modules/checklists/mutationTypes','DAO/Factory','helpers/createID','observers/global'],
(types, DAOFactory, createID, observer) => {
    let DAO = DAOFactory.create("checklist");

    function set({commit}, checklists){
        commit([types.SET_CHECKLISTS], checklists);
    };

    function create({commit}, checklist){
        checklist.id = createID(10);
        
        DAO.create(checklist)
        .then(checklist => {
            commit([types.CREATE_CHECKLIST], checklist);
        });
    };

    function update({commit}, checklist){
        DAO.update(checklist.id, checklist)
        .then(checklist => {
            commit([types.UPDATE_CHECKLIST], checklist);
        });
    };
    
    function remove({commit}, checklistID){
        DAO.delete(checklistID)
        .then(() => {
            commit([types.DELETE_CHECKLIST], checklistID);
            observer.$emit('checklist/delete', checklistID);
        });
    };

    return {
        set,
        create,
        update,
        delete: remove
    };
});