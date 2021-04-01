define(['store/modules/cards/mutationTypes','DAO/Factory','helpers/createID','observers/global'],
(types, DAOFactory, createID, observer) => {
    let DAO = DAOFactory.create("card");

    function getCard(cardID){
        return new Promise((resolve, reject) => {
            getStore().then(store => {
                resolve( store.getters['cards/getAll'].find(c => c.id === cardID) );
            }).catch(reject);
        });
    };

    function getStore(){
        return new Promise((resolve, reject) => {
            require(['store/index'], store => {
                resolve( store );
            });
        })
    };

    function set({commit}, cards){
        commit([types.SET_CARDS], cards);
    };

    function create({commit}, card){
        card.id = card.id ? card.id : createID(10);
        card.created = (new Date()).getTime();
        card.archived = false;
        card.description = "";
        card.schedule = false;
        
        DAO.create(card)
        .then(card => {
            commit([types.CREATE_CARD], card);
            observer.$emit('card/create', card);
        });
    };

    function update({commit}, card){
        DAO.update(card.id, card)
        .then(card => {
            commit([types.UPDATE_CARD], card);
        });
    };

    function move({commit}, card){
        DAO.update(card.id, card)
        .then(card => {
            commit([types.UPDATE_CARD], card);
            observer.$emit('card/move', card);
        });
    };

    
    function remove({commit}, cardID){
        DAO.delete(cardID)
        .then(() => {
            commit([types.DELETE_CARD], cardID);
        });
    };

    function archive({commit}, card){
        card.archived = true;
        DAO.update(card.id, card)
        .then(card => {
            commit([types.UPDATE_CARD], card);
            observer.$emit('card/archiveUpdate', card);
        });
    };

    function unarchive({commit}, card){
        card.archived = false;
        DAO.update(card.id, card)
        .then(card => {
            commit([types.UPDATE_CARD], card);
            observer.$emit('card/archiveUpdate', card);
        });
    };

    function removeSchedule({commit}, cardID){
        let schedule = false;
        setSchedule( { commit } , cardID, schedule);
    };

    function addSchedule({commit}, {cardID, date, time = null}){
        let schedule = {date,time};
        setSchedule( { commit } , cardID, schedule);
    };

    function setSchedule({ commit }, cardID, schedule){
        getCard(cardID).then(card => {

            let updatedCard = Object.assign({}, card);
            updatedCard.schedule = schedule;

            DAO.update(cardID, updatedCard)
            .then(newCard => {
                commit([types.UPDATE_CARD], newCard);
            });

        }).catch(console.log);
    };

    return {
        set,
        create,
        update,
        move,
        delete: remove,
        archive,
        unarchive,
        addSchedule,
        removeSchedule
    };
});