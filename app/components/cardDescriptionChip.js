define(['text!components/templates/cardDescriptionChip.html'],
(template) => {
    let isEmpty = (val) => !(/\S/).test(val);
    
    return Vue.extend({
        template,
        props: ['card'],
        computed: {
            hasDescription(){
                return !isEmpty(this.card.description);
            }
        },
    });
});