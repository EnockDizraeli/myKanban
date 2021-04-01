define(['observers/global'],
(observer) => {
    return { 
        init
    };

    function init(){
        handleEvents();
    };
    
    function handleEvents(){
        observer.$on('board/load', (board) => {
            setBackground(board.background);
        });
        observer.$on('board/leave', () => {
            setBackground('#fff');
        });
    };

    function setBackground(color){
        document.getElementsByClassName('v-application--wrap')[0].style.background = color;
    };
});