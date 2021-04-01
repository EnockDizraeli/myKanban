define(['text!components/templates/list.html','components/listHeader','components/listBody','components/addCard'],
(template, listHeader, listBody, addCard, ) => {
    return Vue.extend({
        template,
        props: ['list'],
        components: {
            listHeader,
            listBody,
            addCard
        }
    });
});