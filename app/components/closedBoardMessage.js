define(['text!components/templates/closedBoardMessage.html','store/index'],
(template, store) => {

    return Vue.extend({
        template,
        props: ['board'],
        methods: {
            openBoard(){
                this.dispatchToStore();
            },
            deleteBoard(){
                store.dispatch('boards/delete', this.board.id);
                this.$router.replace('/');
            },
            dispatchToStore(){
                let board = Object.assign({}, this.board);
                board.closed = false;
                store.dispatch('boards/update', board);
            }
        },
    });

});