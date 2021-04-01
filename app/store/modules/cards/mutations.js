define(['store/modules/cards/mutationTypes'],
(types) => {
    return {
        [types.SET_CARDS](state, cards){
            state.cards = [];
            cards.forEach(card => {
                state.cards.push( card );
            });
        },
        [types.CREATE_CARD](state, card){
            state.cards.push( card );
        },
        [types.UPDATE_CARD](state, card){
            let cardIndex = state.cards.indexOf( state.cards.find(b => String(b.id) === String(card.id)) );
            for(let prop in card){
                state.cards[cardIndex][prop] = card[prop];
            }
        },
        [types.DELETE_CARD](state, id){
            let index = state.cards.indexOf( state.cards.find(c => String(c.id) === String(id)) );
            state.cards.splice(index, 1);
        }
    };
});