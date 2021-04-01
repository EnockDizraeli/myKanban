define(['text!components/templates/createList.html','store/index'],
(template, store) => {
    let isEmpty = (val) => !(/\S/.test(val));

    return Vue.extend({
        template,
        props: ['board'],
        data() {
            return {
                opened: false,
                title: ''
            }
        },
        computed: {
            lists(){
                return store.getters['lists/getAll'].filter(l => l.boardID === this.board.id);
            }
        },
        methods: {
            createList(){
                if ( isEmpty(this.title) ) return;
                store.dispatch('lists/create', {
                    title: this.title,
                    boardID: this.board.id
                });
                this.title = '';
            },
            open(){
                this.opened = true;
            },
            close(){
                this.opened = false;
            }
        },
    });
});