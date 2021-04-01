define(['text!components/templates/cardDescription.html','components/editCardDescription','mixins/openAndClose'],
(template, editCardDescription, openAndClose) => {
    let isEmpty = (val) => !(/\S/.test(val));

    return Vue.extend({
        template,
        props: ['card'],
        mixins: [openAndClose],
        components: {
            editCardDescription
        },
        computed: {
            hasDescription(){
                return !isEmpty(this.card.description);
            }
        },
    });
});