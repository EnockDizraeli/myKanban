define(['text!components/templates/boardLabel.html','components/editLabel'],
(template, editLabel) => {
    return Vue.extend({
        template,
        props: ['label'],
        components: {
            editLabel
        }
    });
});