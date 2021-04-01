define(['text!components/templates/boardLabels.html','components/searchLabels','components/createLabel','components/labelsList','store/index'],
(template, searchLabels, createLabel, labelsList, store) => {

    return Vue.extend({
        template,
        props: ['board'],
        data() {
            return {
                searching : false
            }
        },
        computed: {
            labels(){
                return store.getters['labels/getAll'].filter(l => l.boardID === this.board.id).sort((a, b) => a.created - b.created);
            }
        },
        components: {
            searchLabels,
            labelsList,
            createLabel
        }
    });
});