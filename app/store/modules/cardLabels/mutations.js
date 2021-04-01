define(['store/modules/cardLabels/mutationTypes'],
(types) => {
    return {
        [types.SET_CARD_LABELS](state, cardLabels){
            state.cardLabels = [];
            cardLabels.forEach(cardLabel => {
                state.cardLabels.push( cardLabel );
            });
        },
        [types.CREATE_CARD_LABEL](state, cardLabel){
            state.cardLabels.push( cardLabel );
        },
        [types.UPDATE_CARD_LABEL](state, cardLabel){
            let cardLabelIndex = state.cardLabels.indexOf( state.cardLabels.find(b => String(b.id) === String(cardLabel.id)) );
            for(let prop in cardLabel){
                state.cardLabels[cardLabelIndex][prop] = cardLabel[prop];
            }
        },
        [types.DELETE_CARD_LABEL](state, id){
            let index = state.cardLabels.indexOf( state.cardLabels.find(c => String(c.id) === String(id)) );
            state.cardLabels.splice(index, 1);
        }
    };
});