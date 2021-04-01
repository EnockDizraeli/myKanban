define(['text!components/templates/openCard.html','components/openCardEdit','components/editCardLabels','components/editCardSchedule','components/copyCard','components/moveCard','store/index'],
(template, openCardEdit, editCardLabels, editCardSchedule, copyCard, moveCard, store) => {
    return Vue.extend({
        template,
        props: ['card'],
        components: {
            openCardEdit,
            editCardLabels,
            editCardSchedule,
            copyCard,
            moveCard
        },
        methods: {
            close(){
                this.$emit('close');
            },
            archive(){
                store.dispatch('cards/archive', this.card);
                return this;
            }
        },
    })
});