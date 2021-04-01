define(['text!components/templates/boardTitle.html','store/index'],
(template, store) => {
    
    let isEmpty = (val) => !(/\S/.test(val));

    return Vue.extend({
        template,
        props: ['board'],
        data() {
            return {
                editing: false,
                title: ''
            }
        },
        methods: {
            saveTitle(){
                let board = Object.assign({}, this.board);
                board.title = ( isEmpty(this.title) ) ? this.board.title : this.getTitle();
                store.dispatch('boards/update', board);
                return this;
            },
            enterEditMode(){
                this.setTitleFromBoard();
                this.editing = true;
            },
            exitEditMode(){
                this.editing = false;
            },
            getTitle(){
                return this.title;
            },
            setTitleFromBoard(){
                this.title = this.board.title;
            }
        },
        created() {
            this.setTitleFromBoard();
        },
    });
});