define(['text!components/templates/checklistItem.html','components/editChecklistItem','mixins/openAndClose','store/index'],
(template, editChecklistItem, openAndClose, store) => {
    return Vue.extend({
        template,
        props: ['item'],
        mixins: [openAndClose],
        components: {
            editChecklistItem
        },
        methods: {
            toggleComplete(){
                let item = Object.assign({}, this.item);
                item.completed ^= true;
                store.dispatch('checklistItems/update', item);
            },
            deleteItem(){
                store.dispatch('checklistItems/delete', this.item.id);
            }
        },
    });
});