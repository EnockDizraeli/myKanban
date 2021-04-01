define(['text!components/templates/addCardOptions.html','components/editCardLabels','mixins/openAndClose'],
(template, editCardLabels, openAndClose) => {
    return Vue.extend({
        template,
        mixins: [openAndClose],
        props: ['card'],
        components: {
            editCardLabels
        }
    });
});