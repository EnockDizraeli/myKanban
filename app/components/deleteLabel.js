define(['text!components/templates/deleteLabel.html','mixins/openAndClose','store/index'],
(template, openAndClose, store) => {
    return Vue.extend({
        template,
        props: ['label'],
        mixins: [openAndClose],
        methods: {
            deleteLabel(){
                this.dispatchToStore();
            },
            dispatchToStore(){
                store.dispatch('labels/delete', this.label.id);
            }
        }
    });
});