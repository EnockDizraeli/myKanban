define(['store/modules/boards/mutationTypes'],
(types) => {
    return {
        [types.SET_BOARDS](state, boards){
            state.boards = [];
            boards.forEach(board => {
                state.boards.push( board );
            });
        },
        [types.CREATE_BOARD](state, board){
            state.boards.push( board );
        },
        [types.UPDATE_BOARD](state, board){
            let boardIndex = state.boards.indexOf( state.boards.find(b => String(b.id) === String(board.id)) );
            for(let prop in board){
                state.boards[boardIndex][prop] = board[prop];
            }
        },
        [types.DELETE_BOARD](state, id){
            let index = state.boards.indexOf( state.boards.find(c => String(c.id) === String(id)) );
            state.boards.splice(index, 1);
        }
    };
});