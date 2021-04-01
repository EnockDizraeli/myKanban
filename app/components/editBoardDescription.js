define(['text!components/templates/editBoardDescription.html','store/index'],
(template, store) => {
    return Vue.extend({
        template,
        props: ['board'],
        data() {
            return {
                description: ''
            }
        },
        watch: {
            board(){
                this.loadDescription();
            }
        },
        methods: {
            saveDescription(){
                this.dispatchToStore();
                this.$emit('close');
            },
            dispatchToStore(){
                let board = Object.assign({}, this.board);
                board.description = this.description;
                store.dispatch('boards/update', board);
            },
            loadDescription(){
                this.description = this.board.description;
            }
        },
        created() {
            this.loadDescription();
        },
    });
});