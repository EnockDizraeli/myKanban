define(['store/modules/lists/state','store/modules/lists/getters','store/modules/lists/mutations','store/modules/lists/actions',],
(state, getters, mutations, actions) => {
    return {
        namespaced: true,
        state,getters,mutations,actions
    };
});