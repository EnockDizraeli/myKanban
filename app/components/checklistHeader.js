define(['text!components/templates/checklistHeader.html','components/deleteChecklist','components/editChecklist','mixins/openAndClose','store/index'],
(template, deleteChecklist, editChecklist, openAndClose, store) => {
    return Vue.extend({
        template,
        props: ['checklist','showingCompleted'],
        computed: {
            completedItems(){
                return store.getters['checklistItems/getAll'].filter(c => c.checklistID === this.checklist.id && c.completed);
            }
        },
        components: {
            deleteChecklist,
            editChecklist
        },
        mixins: [openAndClose]
    });
});