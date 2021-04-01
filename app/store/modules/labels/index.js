define(['store/modules/labels/state','store/modules/labels/getters','store/modules/labels/mutations','store/modules/labels/actions',],
(state, getters, mutations, actions) => {
    return {
        namespaced: true,
        state,getters,mutations,actions
    };
});