define(['text!components/templates/card.html','mixins/openAndClose','components/cardChips','components/cardLabelChips','components/openCard'],
(template, openAndClose, cardChips, cardLabelChips, openCard) => {
    return Vue.extend({
        template,
        props: {
            card: {
                required: true
            },
            editable: {
                required: false,
                default: true
            }
        },
        mixins: [openAndClose],
        components:{
            cardChips,
            openCard,
            cardLabelChips
        }
    });
});