define(['text!pages/templates/boards.html','components/mainNavigation','components/allBoards'],
(template, navigation, allBoards) => {
    return Vue.extend({
        template,
        components: {
            navigation,
            allBoards
        }
    });
});