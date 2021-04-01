define(['observers/global'],
(observer) => {
    const DEFAULT_TITLE = 'myKanban | Kanban Board App';
    const TITLE_MAP = {
        'boards' : 'Boards',
        'upcoming': 'Upcoming Features'
    };

    return {
        init
    };

    function init(){
        handleEvents();
    };

    function handleEvents(){
        handleBoardLoad();
        handleRouteUpdate();
    };

    function handleBoardLoad(){
        observer.$on('board/load', board => {
            setTitle(board.title);
        });
    };

    function handleRouteUpdate(){
        require(['router'], router => {
            router.onReady(() => {
                setTitleUsingRoute(router.currentRoute);
            });

            router.beforeEach((to, from, next) => {
                setTitleUsingRoute(to);
                next();
            });
        });
    };

    function setTitleUsingRoute(route){
        let title = getValue(route.name) || DEFAULT_TITLE;
        setTitle(title);
    };

    function getValue(key){
        return TITLE_MAP[key];
    };

    function setTitle(value){
        document.title = value;
    };
});