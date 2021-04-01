define(['text!components/templates/editCardLabels.html','components/searchLabels','components/createLabel','components/labelsList','mixins/openAndClose','store/index'],
(template, searchLabels, createLabel, labelsList, openAndClose, store) => {

    return Vue.extend({
        template,
        data() {
            return {
                searching: false
            }
        },
        props: ['card'],
        mixins: [openAndClose],
        components: {
            createLabel,
            searchLabels,
            labelsList
        },
        computed: {
            labels(){
                return store.getters['labels/getAll'].filter(l => l.boardID === this.card.boardID).sort((a, b) => a.created - b.created);
            },
            board(){
                return store.getters['boards/getAll'].find(b => b.id === this.card.boardID);
            }
        },
    });
});