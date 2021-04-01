define(['store/index','observers/global','model/jsonLoader'],
(store, observer, jsonLoader) => {
    let defaultLabels = [];

    return {
        init
    };

    function init(){
        handleEvents();
        loadColors();
    };

    function loadColors(){
        jsonLoader.load('label/default').then(labels => {
            defaultLabels = labels;
        }).catch(console.log);
    };

    function handleEvents(){
        observer.$on('board/create', createBoardLabels);
    };

    function createBoardLabels(board){
        defaultLabels.forEach(label => {
            store.dispatch('labels/create', {
                color: label.value,
                boardID: board.id,
                name: ''
            });
        });
    };

    
});