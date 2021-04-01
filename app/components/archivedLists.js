define(['text!components/templates/archivedlists.html','store/index'],
(template, store) => {
    return Vue.extend({
        template,
        props: ['lists'],
        methods: {
            unarchiveList(list){
                store.dispatch('lists/unarchive', list);
                this.$emit('update');
            },
        },
    });
})