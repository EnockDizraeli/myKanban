define(['text!components/templates/addCard.html','components/addCardOptions','components/cardLabelChips','mixins/openAndClose','helpers/createID','store/index'],
(template, addCardOptions, cardLabelChips, openAndClose, createID, store) => {
    function isEnterKey(event){
        return event.key === 'Enter';
    };

    return Vue.extend({
        template,
        props: ['list'],
        mixins: [openAndClose],
        components: {
            addCardOptions,
            cardLabelChips
        },
        data() {
            return {
                title: '',
                card: {
                    id: createID(10),
                    boardID: this.list.boardID,
                    listID: this.list.id
                }
            }
        },
        computed: {
            valid(){
                return (/\S/).test( this.title );
            }
        },
        methods: {
            addCard(){
                if (!this.valid) return;
                this.dispatchToStore();
                this.reset();
            },
            dispatchToStore(){
                let card = Object.assign({}, this.card);
                card.title = this.title;
                store.dispatch('cards/create', card);
            },
            reset(){
                this.title = '';
                this.card = {
                    id: createID(10),
                    boardID: this.list.boardID,
                    listID: this.list.id
                };
            },
            handleKeyDown(evt){
                /*--Pressing the enter key submits the card for adding--*/
                if ( isEnterKey(evt) ) { 
                    evt.preventDefault();
                    this.addCard();
                };
                return true;
            }
        }
    });
});