define(['text!components/templates/archiveAllCards.html','mixins/openAndClose','store/index'],
(template, openAndClose, store) => {
    return Vue.extend({
        template,
        props: ['list'],
        mixins: [openAndClose],
        methods: {
            archiveCards(){
                this.dispatchToStore();
            },
            dispatchToStore(){
                let cards = store.getters['cards/getAll'].filter(c => c.listID === this.list.id && !c.archived);
                cards.forEach(card => {
                    store.dispatch('cards/archive', card);                    
                });
            }
        },
    });
});