define(['text!components/templates/headersearch.html','mixins/openAndClose',
'components/headerSearchResults','store/index','fuse'],
(template, openAndClose, headerSearchResults, store, Fuse) => {

    let isEmpty = (val) => !(/\S/.test(val));

    let mergeArrays = function(){
        let merged = [];
        for( let index in arguments){
            arguments[index].forEach(element => {
                merged.push(element);
            });
        };
        return merged;
    };

    return Vue.extend({
        template,
        mixins: [openAndClose],
        components: {
            headerSearchResults
        },
        data() {
            return {
                keyword: '',
                results: []
            }
        },
        watch: {
            keyword(val){
                let boards = this.fuseSearch( this.boards, ['title']).map((x) => { x.type = 'BOARD'; return x;})
                let cards = this.fuseSearch( this.cards, ['title']).map((x) => { x.type = 'CARD'; return x;});
                this.results = mergeArrays(boards, cards);
            }
        },
        computed: {
            cards(){
                return store.getters['cards/getAll'];
            },
            boards(){
                return store.getters['boards/getAll'];
            },
            noResults(){
                return (this.results.length <= 0) && !isEmpty(this.keyword);
            },
            prompt(){
                return this.opened && isEmpty(this.keyword);
            }
        },
        methods: {
            fuseSearch(list, keys = ['title']){
                let options = {keys};
                let fuse = new Fuse(list, options);
                return fuse.search(`=${this.keyword}`).map(r => r.item);
            }
        }
    });

})