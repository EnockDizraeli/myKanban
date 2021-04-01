define(['text!components/templates/listBody.html'],
(template) => {
    return Vue.extend({
        template,
        props: ['list']
    });
});