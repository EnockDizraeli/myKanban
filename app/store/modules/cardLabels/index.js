define(['store/modules/cardLabels/state','store/modules/cardLabels/getters','store/modules/cardLabels/mutations','store/modules/cardLabels/actions',],
(state, getters, mutations, actions) => {
    return {
        namespaced: true,
        state,getters,mutations,actions
    };
});