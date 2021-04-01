define(['text!components/templates/addChecklist.html','mixins/openAndClose','store/index'],
(template, openAndClose, store) => {
    let isEmpty = (val) => !(/\S/.test(val));

    return Vue.extend({
        template,
        props: ['card'],
        mixins: [openAndClose],
        data() {
            return {
                title: 'Checklist'
            }
        },
        methods: {
            addChecklist(){
                this.dispatchToStore();
                this.reset();
                this.close();
            },
            dispatchToStore(){
                if (isEmpty(this.title)) return;
                store.dispatch('checklists/create',{
                    cardID: this.card.id,
                    title: this.title
                });
            },
            reset(){
                this.title = 'Checklist';
            }
        },
    });

});