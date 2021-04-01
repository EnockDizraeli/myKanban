define(['text!components/templates/cardLabel.html','components/editLabel','store/index'],
(template, editLabel, store) => {

    return Vue.extend({
        template,
        props: {
            label: {
                required: true
            },
            card: {
                required: true,
                default: false
            }
        },
        computed: {
            labeled(){
                return store.getters['cardLabels/getAll'].find(c => c.cardID === this.card.id  && c.labelID === this.label.id);
            }
        },
        components: {
            editLabel
        },
        methods: {
            toggleLabel(){
                if (this.labeled) this.unLabelCard()
                else this.labelCard();
            },
            labelCard(){
                store.dispatch('cardLabels/create',{
                    cardID: this.card.id,
                    labelID: this.label.id
                });
            },
            unLabelCard(){
                /*Remove all instances--*/
                let cardLabels = store.getters['cardLabels/getAll'].filter(c => c.cardID === this.card.id  && c.labelID === this.label.id);
                cardLabels.forEach(cardLabel => {
                    store.dispatch('cardLabels/delete', cardLabel.id);       
                });
            }
        },
    });
    
});