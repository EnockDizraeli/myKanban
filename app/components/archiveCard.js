define(['text!components/templates/archiveCard.html','mixins/openAndClose','store/index'],
(template, openAndClose, store) => {
    return Vue.extend({
        template,
        props: ['card'],
        mixins: [openAndClose],
        methods: {
            toggleArchiveCard(){
                (this.card.archived) ? this.unarchiveCard() : this.archiveCard();
            },
            archiveCard(){
                store.dispatch('cards/archive', this.card);
            },
            unarchiveCard(){
                store.dispatch('cards/unarchive', this.card);
            }
        },
    })
});