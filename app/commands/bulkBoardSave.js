define(['store/index'], (store) => {

    return {
        execute
    };

    function execute(board){
        let lists = board.lists;
        getCards(lists).forEach(card => {
            saveCard(card);
        });
    };

    function getCards(lists){
        let cards = [];
        lists.forEach(list => {
            list.cards.forEach((card, index) => {
                cards.push( Object.assign({}, card) );
            });
        });
        return cards;
    };

    function cardHasChanged(updatedCard){
        let initialCard = store.getters['cards/getAll'].find(c => c.id === updatedCard.id);
        console.log(updatedCard.listID, initialCard.listID);
        return false;
        // return (cardInStore.index !== card.index) || (cardInStore.listID !== card.listID);
    };

    function getCard(cardID){
        return store.getters['cards/getAll'].find(c => c.id === cardID);
    };
    
    function saveCard(card){
        store.dispatch('cards/update', card);
    };
});