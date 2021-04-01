define(['text!components/templates/boardBody.html','components/createList','components/list',
'components/card','store/index','helpers/dndUtils','observers/global','commands/bulkBoardSave'],
(template, createList, list, card, store, utils, observer, bulkBoardSave) => {
    let { applyDrag } = utils;

    function getLists(boardID){
        return store.getters['lists/getAll'].filter(l => l.boardID === boardID && !l.archived).map(x => {
            x.cards = getCards(x.id);
            return x;
        }).sort((a, b) => a.index - b.index);
    };

    function getCards(listID){
        return store.getters['cards/getAll'].filter(c => c.listID === listID && !c.archived)
        .sort((a, b) => a.index - b.index);
    };

    return Vue.extend({
        template,
        components: {
            createList,
            list,
            card
        },
        props: ['board'],
        data() {
            return {
                lists: [],
                /*--We can only drag sroll when a card or list is not being moved (by dragging)--*/
                dragging: false
            }
        },
        computed: {
            listPlaceholder(){
                return {
                    className: 'list-placeholder',
                    showOnTop: true
                }
            },
            cardPlaceholder(){
                return {
                    className: 'card-placeholder',
                    showOnTop: true
                }
            }
        },
        methods: {
            /**List methods-- */
            handleListDrop(dropResult){
                this.lists = applyDrag(this.lists, dropResult);   
                this.saveListOrder();
            },
            saveListOrder(){
                this.lists.forEach((list, index) => {
                    list.index = index;
                    store.dispatch('lists/update', list);
                });
            },
            
            load(){
                let self = this;
                self.loadLists();
                setTimeout(() => {
                    self.loadLists();
                }, 50);
                setTimeout(() => {
                    self.loadLists();
                }, 100);
                setTimeout(() => {
                    self.loadLists();
                }, 150);
            },

            clearLists(){
                this.lists = [];
            },

            loadLists(){
                this.lists = getLists(this.board.id);
            },

            /**--Card methods */
            handleCardDrop(listID, dropResult){                
                /**--Get list and apply drag--*/
                let list = this.lists.find(l => l.id === listID);
                list.cards = applyDrag(list.cards, dropResult);

                /**--Update the model--*/
                // Vue.set(this.lists, this.lists.indexOf(list), list);
                this.saveCardOrder();

            },

            saveCardOrder(){
                /*--Offload the saving of the board--*/
                this.lists.forEach(list => {
                    list.cards.forEach((card, index) => {
                        card.index = index;
                        card.listID = list.id;
                    });
                });

                bulkBoardSave.execute({lists: this.lists });
            },

            handleEvents(){
                let self = this;
                observer.$on('list/create', () => {
                    self.loadLists();
                    self.saveListOrder();
                });

                observer.$on('list/move', () => {
                    self.loadLists();
                    self.saveListOrder();
                });

                observer.$on('list/archiveUpdate', () => {
                    self.loadLists();
                    self.saveListOrder();
                });
                
                observer.$on('card/create', () => {
                    self.loadLists();
                    self.saveCardOrder();
                });

                observer.$on('card/archiveUpdate', () => {
                    self.loadLists();
                    self.saveListOrder();
                });

                observer.$on('card/move', () => {
                    self.loadLists();
                    self.saveCardOrder();
                });

                observer.$on('board/load', () => {
                    self.loadLists();
                    self.saveCardOrder();
                });
            }
        },
        created() {
            this.handleEvents();
        }
    });
});