define(['text!components/templates/archiveList.html','mixins/openAndClose','store/index'],
(template, openAndClose, store) => {
    return Vue.extend({
        template,
        props: ['list'],
        mixins: [openAndClose],
        methods: {
            archiveList(){
                this.dispatchToStore();
            },
            dispatchToStore(){
                store.dispatch('lists/archive', this.list);
            }
        },
    });
});