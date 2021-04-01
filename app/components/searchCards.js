define(['text!components/templates/searchCards.html','components/card','fuse','store/index'],
(template, card, Fuse, store) => {

    function cardHasLabel(cardID, labelID){
        return store.getters['cardLabels/getAll'].find(c => c.cardID === cardID && c.labelID === labelID);
    };

    return Vue.extend({
        template,
        props: ['board'],
        watch: {
            keyword(){
                this.updateSearchByTerm();
            }
        },
        components: {
            card
        },
        data() {
            return {
                keyword: '',
                cards: []
            }
        },
        computed: {
            allCards(){
                return store.getters['cards/getAll'].filter(c => c.boardID === this.board.id);
            },
            labels(){
                return store.getters['labels/getAll'].filter(l => l.boardID === this.board.id);
            },
            showingNoResultsPrompt(){
                return (this.cards.length < 1 && this.keyword.length >= 1); 
            }
        },
        methods: {
            clearSearch(){
                this.cards = [];
                this.keyword = '';
            },
            searchByLabel(label){
                this.cards = this.allCards.filter(card => {
                    return cardHasLabel(card.id, label.id);
                });
            },
            updateSearchByTerm(){
                this.cards = this.fuseSearch( this.allCards, ['title']);
            },
            fuseSearch(list, keys = ['title']){
                let options = {keys};
                let fuse = new Fuse(list, options);
                return fuse.search(`=${this.keyword}`).map(r => r.item);
            }
        },
    });
});