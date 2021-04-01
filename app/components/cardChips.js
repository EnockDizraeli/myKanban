define(['text!components/templates/cardChips.html','components/cardChecklistChip','components/cardDescriptionChip',
'components/cardArchiveChip','components/cardScheduleChip'],
(template, cardChecklistChip, cardDescriptionChip, cardArchiveChip, cardScheduleChip) => {
    return Vue.extend({
        template,
        props: ['card'],
        components: {
            cardChecklistChip,
            cardDescriptionChip,
            cardArchiveChip,
            cardScheduleChip
        }
    });
});