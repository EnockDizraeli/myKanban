define(['store/modules/checklistItems/state','store/modules/checklistItems/getters','store/modules/checklistItems/mutations','store/modules/checklistItems/actions',],
(state, getters, mutations, actions) => {
    return {
        namespaced: true,
        state,getters,mutations,actions
    };
});