define(['text!components/templates/headerBoardsList.html',
'components/boardTape','components/createBoard','store/index'],
(template, boardTape, createBoard, store) => {

    return Vue.extend({
        template,
        data() {
            return {
                showingStarred: true,
                showingPersonal: false
            }
        },
        components: {
            boardTape,
            createBoard,
        },
        computed: {
            starredBoards(){
                return this.boards.filter(b => b.starred);
            },
            boards(){
                return store.getters['boards/getAll'].filter(b => !b.closed);
            }
        }
    });
});