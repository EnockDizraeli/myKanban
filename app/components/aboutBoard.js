define(['text!components/templates/aboutBoard.html','components/boardDescription'],
(template, boardDescription) => {
    return Vue.extend({
        template,
        props: ['board'],
        components: {
            boardDescription
        }
    });
});