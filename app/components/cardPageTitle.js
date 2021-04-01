define(['text!components/templates/cardPageTitle.html',
'components/moveCard',
'components/editCardPageTitle','mixins/openAndClose','store/index'],
(template, moveCard, editCardPageTitle, openAndClose, store) => {
    return Vue.extend({
        template,
        props: ['card'],
        components: {
            moveCard,
            editCardPageTitle
        },
        mixins: [openAndClose],
        computed: {
            list(){
                return store.getters['lists/getAll'].find(l => l.id === this.card.listID);
            }
        },
        methods: {            
            openEditor(){
                this.$refs.editor.loadTitle();
                this.open();
            }
        }
    });
});