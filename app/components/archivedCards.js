define(['text!components/templates/archivedCards.html','components/card','store/index'],
(template, card, store) => {
    return Vue.extend({
        template,
        props: ['cards'],
        components: {
            card
        },
        methods: {
            unarchiveCard(card){
                store.dispatch('cards/unarchive', card);
                this.$emit('update');
            },
            deleteCard(card){
                store.dispatch('cards/delete', card.id);
                this.$emit('update');
            }
        },
    });
})