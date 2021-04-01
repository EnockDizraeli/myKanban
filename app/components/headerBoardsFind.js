define(['text!components/templates/headerBoardsFind.html','components/boardTape','components/createBoard','store/index','fuse'],
(template, boardTape, createBoard, store, Fuse) => {

    let isEmpty = (val) => !(/\S/.test(val));
    return Vue.extend({
        template,
        components: {
            boardTape,
            createBoard
        },
        data() {
            return {
                keyword: ''
            }
        },
        watch: {
            keyword(val){
                let event = (isEmpty(val)) ? 'end' : 'start';
                this.$emit(event);
            }
        },
        computed: {
            searching(){
                return !isEmpty( this.keyword );
            },
            boards(){
                let list = store.getters['boards/getAll'];
                let keys = ['title'];
                return this.fuseSearch(list, keys);
            }
        },
        methods: {
            fuseSearch(list, keys = ['name']){
                let options = {keys};
                let fuse = new Fuse(list, options);
                return fuse.search(`=${this.keyword}`).map(r => r.item);
            }
        },
    });
});