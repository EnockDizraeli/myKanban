define(['text!components/templates/cardPageControls.html','components/addChecklist','components/editCardLabels',
'components/editCardSchedule','components/copyCard','components/moveCard','components/archiveCard'],
(template, addChecklist, editCardLabels, editCardSchedule, copyCard, moveCard, archiveCard) => {
    return Vue.extend({
        template,
        props: ['card'],
        components: {
            addChecklist,
            editCardLabels,
            editCardSchedule,
            copyCard,
            moveCard,
            archiveCard
        }
    });
});