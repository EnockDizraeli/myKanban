define(['store/modules/checklists/state','store/modules/checklists/getters','store/modules/checklists/mutations','store/modules/checklists/actions',],
(state, getters, mutations, actions) => {
    return {
        namespaced: true,
        state,getters,mutations,actions
    };
});