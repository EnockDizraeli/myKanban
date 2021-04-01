define(['store/modules/boards/mutationTypes','DAO/Factory','helpers/createID','observers/global'],
(types, DAOFactory, createID, observer) => {
    let DAO = DAOFactory.create("board");

    function set({commit}, boards){
        commit([types.SET_BOARDS], boards);
    };

    function create({commit}, board){
        board.id = createID(10);
        board.starred = false;
        board.closed = false;
        board.created = (new Date()).getTime();
        board.description = !!(board.description) ? board.description : '';
        
        DAO.create(board)
        .then(board => {
            commit([types.CREATE_BOARD], board);
            observer.$emit('board/create', board);
        });
    };

    function update({commit}, board){
        DAO.update(board.id, board)
        .then(board => {
            commit([types.UPDATE_BOARD], board);
        });
    };
    
    function remove({commit}, boardID){
        DAO.delete(boardID)
        .then(() => {
            commit([types.DELETE_BOARD], boardID);
        });
    };

    
    function close({commit}, board){
        board.closed = true;
        DAO.update(board.id, board)
        .then(board => {
            commit([types.UPDATE_BOARD], board);
            observer.$emit('board/close', board);
        });
    };
    

    return {
        set,
        create,
        update,
        delete: remove,
        close
    };
});