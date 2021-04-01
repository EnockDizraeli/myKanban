define(['text!components/templates/listActions.html','mixins/openAndClose','components/moveList',
'components/archiveList','components/archiveAllCards'],
(template, openAndClose, moveList, archiveList, archiveAllCards) => {
    return Vue.extend({
        template,
        props: ['list'],
        mixins: [openAndClose],
        components: {
            moveList,
            archiveList,
            archiveAllCards
        }
    });
});