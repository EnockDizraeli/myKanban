define(['text!components/templates/openCardEdit.html','components/editCardTitle','components/cardLabelChips','components/cardChips','store/index'],
(template, editCardTitle, cardLabelChips, cardChips, store) => {
    let isEmpty = (val) => !(/\S/.test(val));
    return Vue.extend({
        template,
        props: ['card'],
        components: {
            editCardTitle,
            cardLabelChips,
            cardChips
        },
        methods: {
            close(){
                this.$emit('close');
            },
            saveCard(){
                this.dispatchToStore();
                this.$emit('close');
            },
            dispatchToStore(){
                if (isEmpty(this.title)) return;
                let card = Object.assign({}, this.card);
                card.title = this.$refs.editTitle.title;
                store.dispatch('cards/update', card);
            }
        },
    })
});