define(['store/modules/boards/index','store/modules/lists/index','store/modules/cards/index','store/modules/checklists/index',
'store/modules/checklistItems/index','store/modules/labels/index','store/modules/cardLabels/index','store/offlineDB'],
(boards, lists, cards, checklists, checklistItems, labels, cardLabels, offlineDB) => {
    const store = new Vuex.Store({
        modules: {
            boards,
            lists,
            cards,
            checklists,
            checklistItems,
            labels,
            cardLabels
        }
    });

    store.loadData = () => {
        offlineDB.init( store );
    };
    return store;
});