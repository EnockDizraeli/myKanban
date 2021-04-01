define(['DAO/Factory'],
(DAOFactory) => {
    let store;

    return {
        init
    };

    function init(arg){
        store = arg;
        loadBoards();
        loadLists();
        loadCards();
        loadChecklists();
        loadChecklistItems();
        loadLabels();
        loadCardLabels();
    };

    function loadBoards(){
        getDAO('board').getAll().then(boards => {
            store.dispatch('boards/set', boards);
        });
    };

    function loadLists(){
        getDAO('list').getAll().then(lists => {
            store.dispatch('lists/set', lists);
        });
    };

    function loadCards(){
        getDAO('card').getAll().then(cards => {
            store.dispatch('cards/set', cards);
        });
    };

    function loadChecklists(){
        getDAO('checklist').getAll().then(checklists => {
            store.dispatch('checklists/set', checklists);
        });
    };

    function loadChecklistItems(){
        getDAO('checklistItem').getAll().then(checklistItems => {
            store.dispatch('checklistItems/set', checklistItems);
        });
    };

    function loadLabels(){
        getDAO('label').getAll().then(labels => {
            store.dispatch('labels/set', labels);
        });
    };

    function loadCardLabels(){
        getDAO('cardLabel').getAll().then(cardLabels => {
            store.dispatch('cardLabels/set', cardLabels);
        });
    };

    function getDAO(name){
        return DAOFactory.create(name);
    };
});