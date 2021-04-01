define([],
() => {
    return {
        getAll(state){
            return state.cards.sort((a, b) => a.index - b.index);
        }
    };
});