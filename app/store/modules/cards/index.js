define(['store/modules/cards/state','store/modules/cards/getters','store/modules/cards/mutations','store/modules/cards/actions',],
(state, getters, mutations, actions) => {
    return {
        namespaced: true,
        state,getters,mutations,actions
    };
});