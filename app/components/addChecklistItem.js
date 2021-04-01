define(['text!components/templates/addChecklistItem.html','mixins/openAndClose','store/index'],
(template, openAndClose, store) => {
    let isEmpty = (val) => !(/\S/.test(val));

    return Vue.extend({
        template,
        data() {
            return {
                title: ''
            }
        },
        props: ['checklist'],
        mixins: [openAndClose],
        methods: {
            addItem(){
                this.dispatchToStore();
                this.reset();
            },
            dispatchToStore(){
                if (isEmpty(this.title)) return;
                store.dispatch('checklistItems/create',{
                    title: this.title,
                    checklistID: this.checklist.id
                });
            },
            reset(){
                this.title = '';
            }
        },
    });
});