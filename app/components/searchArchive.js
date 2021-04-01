define(['text!components/templates/searchArchive.html','components/searchArchiveResults','fuse','store/index'],
(template, searchArchiveResults, Fuse, store) => {
    
    let mergeArrays = function(){
        let merged = [];
        for( let index in arguments){
            arguments[index].forEach(element => {
                merged.push(element);
            });
        };
        return merged;
    };

    let isNotEmpty = (val) => { 
        if (val === null) return false;
        return (/\S/.test(val));
    };

    return Vue.extend({
        template,
        props: ['board','showingList'],
        components: {
            searchArchiveResults
        },
        data() {
            return {
                keyword: '',
                results: []
            }
        },
        computed: {
            cards(){
                return store.getters['cards/getAll'].filter(c => c.archived && c.boardID === this.board.id);
            },
            lists(){
                return store.getters['lists/getAll'].filter(l => l.archived && l.boardID === this.board.id);
            },
            noResults(){
                return (this.results.length <= 0) && isNotEmpty(this.keyword);
            }
        },
        methods: {
            emitEvents(){
                let isValid = isNotEmpty(this.keyword);
                let event = (isValid) ? 'start' : 'end';
                this.$emit(event);
            },
            clearKeyword(){
                this.keyword = '';
                return this;
            },
            updateResults(){
                let lists = this.fuseSearch( this.lists, ['title']).map((x) => { x.type = 'LIST'; return x;})
                let cards = this.fuseSearch( this.cards, ['title']).map((x) => { x.type = 'CARD'; return x;});
                this.results = mergeArrays(lists, cards);
            },
            clearResults(){
                this.results = [];
            },
            fuseSearch(list, keys = ['title']){
                let options = {keys};
                let fuse = new Fuse(list, options);
                return fuse.search(`=${this.keyword}`).map(r => r.item);
            }
        },
        created() {
            let self = this;

            this.$on('start', () => {
                self.updateResults();
            });
            this.$on('end', () => {
                self.clearResults();
            });
        },
    });
});