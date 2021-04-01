define(['text!components/templates/copyCard.html','mixins/openAndClose','store/index'],
(template, openAndClose, store) => {
    return Vue.extend({
        template,
        props: ['card'],
        mixins: [openAndClose],
        data() {
            return {
                boardID: null,
                listID: null,
                index: 0
            }
        },
        computed: {
            boards(){
                return store.getters['boards/getAll'];
            },
            lists(){
                return store.getters['lists/getAll'].filter(l => l.boardID === this.boardID);
            },
            positions(){
                let positions = [];
                let cards = store.getters['cards/getAll'].filter(c => c.listID === this.listID);
                cards.forEach((card, index) => {
                    positions.push({
                        count: index+1,
                        index
                    });
                });

                /*--We only allow a card to be appended to another list i.e Other than the current one--*/
                if (this.card.listID !== this.listID){
                    positions.push({
                        count: cards.length + 1,
                        index: cards.length
                    });
                };
                return positions;
            }
        },
        methods: {
            copyCard(){
                if (!this.isValid()) return;
                this.dispatchToStore();
                this.close();
            },
            dispatchToStore(){
                let card = Object.assign({}, this.card);
                card.boardID = this.boardID;
                card.listID = this.listID;
                card.index = this.index;
                store.dispatch('cards/create', card);
            },
            isValid(){
                return this.lists.length > 0;
            },
            updateList(){
                /*--Select the first list when switching boards--*/
                if (this.lists.length > 0){
                    this.listID = this.lists[0].id;
                }
            },
            updatePosition(){
                /*--
                    Select the first position 
                    when switching from lists 
                    where the last selected position was higher
                    than this one has
                --*/
                if (this.index > this.positions.length - 1)
                this.index = this.positions[0].index;
            },
            initData(){
                this.boardID = this.card.boardID;
                this.listID = this.card.listID;
                this.index = this.card.index || 0;
            }
        },
        created() {
            this.initData();
        },
    });
});