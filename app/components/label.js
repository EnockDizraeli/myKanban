define(['text!components/templates/label.html','components/cardLabel','components/boardLabel'],
(template, cardLabel, boardLabel) => {
    return Vue.extend({
        template,
        props: {
            card: {
                required: false,
                default: false
            },
            label: {
                required: true,
            }
        },
        components: {
            boardLabel,
            cardLabel
        }
    });
});