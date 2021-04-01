define(['observers/global'],
(observer) => {
    return { 
        init
    };

    function init(){
        handleEvents();
    };
    
    function handleEvents(){
        observer.$on('board/create', (board) => {
            openBoard(board);
        });
    };

    function openBoard(board){
        require(['router'] , router => {
            router.push({
                name: 'board',
                params: {
                    'id': board.id
                }
            })
        })
    };
    
});