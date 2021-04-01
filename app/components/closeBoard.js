define(['text!components/templates/closeBoard.html','mixins/openAndClose','store/index'],
(template, openAndClose, store) => {
    return Vue.extend({
        template,
        props: ['board'],
        mixins: [openAndClose],
        methods: {
            closeBoard(){
                this.dispatchToStore();
            },
            dispatchToStore(){
                store.dispatch('boards/close', this.board);
            }
        },
    });
});