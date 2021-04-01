define([],
() => {
    return {
        getAll(state){
            return state.lists.sort((a, b) => a.index - b.index);
        }
    };
});