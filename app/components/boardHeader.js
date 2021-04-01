define(['text!components/templates/boardHeader.html','components/boardTitle','observers/global','store/index'],
(template, boardTitle, observer, store) => {
    return Vue.extend({
        template,
        props: ['board'],
        components: {
            boardTitle
        },
        methods: {
            toggleStar(){
                let board = Object.assign({}, this.board);
                board.starred ^= true;
                store.dispatch('boards/update', board);
            },
            toggleMenu(){
                observer.$emit('boardMenu/toggle');
            }
        },
    });
});