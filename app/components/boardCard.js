define(['text!components/templates/boardCard.html','store/index'],
(template, store) => {
    return Vue.extend({
        template,
        props: ['board'],
        methods: {
            toggleStarred(){
                let board = Object.assign({}, this.board);
                board.starred ^= true;
                store.dispatch('boards/update', board);
            }
        },
    });
});