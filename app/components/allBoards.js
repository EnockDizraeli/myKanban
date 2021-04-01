define(['text!components/templates/allBoards.html','components/boardCard','components/createBoard','store/index'],
(template, boardCard, createBoard, store) => {
    return Vue.extend({
        template,
        computed: {
            boards(){
                return store.getters['boards/getAll'].filter(b => !b.closed);
            },
            starredBoards(){
                return this.boards.filter(b => b.starred);
            },
            closedBoards(){
                return store.getters['boards/getAll'].filter(b => b.closed);
            }
        },
        components: {
            boardCard,
            createBoard
        }
    });
});