define(['text!components/templates/cardLabelChips.html','store/index'],
(template, store) => {
    return Vue.extend({
        template,
        props: ['card'],
        computed: {
            cardLabels(){
                return store.getters['cardLabels/getAll'].filter(c => c.cardID === this.card.id);
            },
            labels(){
                let labels = [];
                this.cardLabels.forEach(cardLabel => {
                    labels.push(
                        store.getters['labels/getAll'].find(l => l.id === cardLabel.labelID)
                    );
                });
                return labels;
            }
        },
    });
});