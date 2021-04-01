define(['text!components/templates/cardPageLabels.html','components/editCardLabels','store/index'],
(template, editCardLabels, store) => {
    return Vue.extend({
        template,
        props: ['card'],
        components: {
            editCardLabels
        },
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
        }
    });
});