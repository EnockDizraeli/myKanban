define(['text!components/templates/searchLabels.html','components/label','fuse','store/index'],
(template, appLabel, Fuse, store) => {
    let isEmpty = (val) => !(/\S/.test(val));
        
    return Vue.extend({
        template,
        props: {
            card: {
                required: false,
                default: false
            },
            board: {
                required: true,
            }
        },
        components: {
            appLabel
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
            results(){
                let list = store.getters['labels/getAll'].filter((l => l.boardID === this.board.id));
                let keys = ['name'];
                return this.fuseSearch(list, keys);
            },
            keywordIsValid(){
                return !isEmpty(this.keyword);
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