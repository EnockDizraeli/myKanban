define(['text!pages/templates/board.html','components/boardHeader','components/boardBody',
'components/boardMenu','components/closedBoardMessage','components/noBoardMessage','store/index','observers/global'],
(template, boardHeader, boardBody, boardMenu, closedBoardMessage, noBoardMessage, store, observer) => {

    return Vue.extend({
        template,
        components: {
            boardHeader,
            boardBody,
            boardMenu,
            closedBoardMessage,
            noBoardMessage
        },
        data() {
            return {
                loading: true,
                boardIsClosed: false,
                board: false
            }
        },
        methods: {
            loadBoard(boardID){
                let self = this;
                self.loading = true;
                setTimeout(() => {
                    let board = self.getBoardFromStore(boardID);
                    if ( typeof board !== 'undefined') { 
                        self.doLoadBoard(board);
                    }else{
                        self.setBoard(false);
                    }
                }, (Math.random() * 500) + 1000 );
            },

            doLoadBoard(board){
                this.setBoard(board);
                this.updateData(board);
                observer.$emit('board/load', board);
                this.$refs.boardBody.load();
            },

            getBoardFromStore(boardID){
                return store.getters['boards/getAll'].find(b => b.id === boardID);
            },

            setBoard(board){
                this.loading = false;
                this.board = board;
            },

            updateData(board){
                this.boardIsClosed = board.closed;
            },

            handleEvents(){
                let self = this;
                observer.$on('board/close', board => {
                    if (self.isBoard(board)){
                        self.updateData(board);
                    }
                });
            },
            isBoard(board){
                return board.id === this.board.id;
            }
        },
        created() {
            this.handleEvents();
        },
        beforeRouteEnter (to, from, next) {
            let boardID = to.params.id;
            next(self => {
                self.boardID = boardID;
                observer.$emit('board/enter', boardID);
                self.loadBoard(boardID);
            });
        },
        beforeRouteUpdate (to, from, next) {
            let boardID = to.params.id;
            this.boardID = boardID;
            observer.$emit('board/enter', boardID);

            /*--Only load the board if id has changed--*/
            if ( !this.isBoard({ id: boardID})){
                this.loadBoard(boardID);
            };

            next();
        },
        beforeRouteLeave (to, from, next) {
            observer.$emit('board/leave');
            next();
        }
    });
});