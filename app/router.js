define(['pages/boards','pages/board','pages/card','pages/upcoming'],
(boards, board, card, upcoming) => {

    let boardsRoute = {
        path: '/boards',
        name: 'boards',
        component: boards
    };

    let blogRoute = {
        path: '/upcoming',
        name: 'upcoming',
        component: upcoming
    };

    let boardRoute = {
        path: '/board/:id',
        name: 'board',
        component: board,
        children: [{
            name: 'boardCard',
            path: 'card/:cardID',
            component: card
        }]
    };

    let homeRoute = {
        path: '/',
        redirect: '/boards'
    };

    let fallbackRoute = {
        path: '/*',
        redirectTo: '/boards'
    };

    let routes = [
        boardsRoute,
        boardRoute,
        blogRoute,
        homeRoute,
        fallbackRoute
    ];

    return new VueRouter({
        routes
    });
});