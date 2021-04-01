define(['text!components/templates/cardArchiveChip.html'],
(template) => {
    return Vue.extend({
        template,
        props: ['card']
    })
});