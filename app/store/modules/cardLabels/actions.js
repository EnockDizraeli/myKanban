define(['store/modules/cardLabels/mutationTypes','DAO/Factory','helpers/createID','observers/global'],
(types, DAOFactory, createID, observer) => {
    let DAO = DAOFactory.create("cardLabel");

    function set({commit}, cardLabels){
        commit([types.SET_CARD_LABELS], cardLabels);
    };

    function create({commit}, cardLabel){
        cardLabel.id = createID(10);
        cardLabel.created = (new Date()).getTime();
        
        DAO.create(cardLabel)
        .then(cardLabel => {
            commit([types.CREATE_CARD_LABEL], cardLabel);
            observer.$emit('cardLabel/create', cardLabel);
        });
    };

    function update({commit}, cardLabel){
        DAO.update(cardLabel.id, cardLabel)
        .then(cardLabel => {
            commit([types.UPDATE_CARD_LABEL], cardLabel);
        });
    };
    
    function remove({commit}, cardLabelID){
        DAO.delete(cardLabelID)
        .then(() => {
            commit([types.DELETE_CARD_LABEL], cardLabelID);
        });
    };

    return {
        set,
        create,
        update,
        delete: remove
    };
});