define(['text!components/templates/archiveBody.html','components/archivedCards','components/archivedLists','store/index'],
(template, archivedCards, archivedLists, store) => {
    return Vue.extend({
        template,
        props: ['board','showingList'],
        components: {
            archivedCards,
            archivedLists
        },
        computed: {
            lists(){
                return store.getters['lists/getAll'].filter(l => l.boardID === this.board.id && l.archived);
            },
            cards(){
                return store.getters['cards/getAll'].filter(c => c.boardID === this.board.id && c.archived);
            }
        }
    })
});