define(['text!components/templates/cardSearchResult.html','components/card','store/index'],
(template, card, store) => {
    return Vue.extend({
        template,
        props: ['card'],
        components: {
            card
        },
        computed: {
            list(){
                return store.getters['lists/getAll'].find(l => l.id === this.card.listID);
            },
            board(){
                return store.getters['boards/getAll'].find(b => b.id === this.card.boardID);
            }
        },
    });
});