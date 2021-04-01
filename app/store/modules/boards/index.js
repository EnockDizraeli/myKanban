define(['store/modules/boards/state','store/modules/boards/getters','store/modules/boards/mutations','store/modules/boards/actions',],
(state, getters, mutations, actions) => {
    return {
        namespaced: true,
        state,getters,mutations,actions
    };
});