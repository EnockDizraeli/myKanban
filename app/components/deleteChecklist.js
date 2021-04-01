define(['text!components/templates/deleteChecklist.html','mixins/openAndClose','store/index'],
(template, openAndClose, store) => {
    return Vue.extend({
        template,
        props: ['checklist'],
        mixins: [openAndClose],
        methods: {
            deleteChecklist(){
                this.dispatchToStore();
            },
            dispatchToStore(){
                store.dispatch('checklists/delete', this.checklist.id);
            }
        }
    });
});