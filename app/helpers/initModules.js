define(['helpers/backgroundChange','helpers/titleChange','helpers/labelCreator','helpers/boardOpener'],
(backgroundChange, titleChange, labelCreator, boardOpener) => {
    /**This module handles the initialization of all modules usign their init interface*/
    return {
        init
    };

    function init(){
        backgroundChange.init();
        titleChange.init();
        labelCreator.init();
        boardOpener.init();
    };
});