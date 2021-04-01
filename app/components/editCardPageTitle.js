define(['text!components/templates/editCardPageTitle.html','store/index'],
(template, store) => {
    let isEmpty = (val) => !(/\S/.test(val));
    let isEnterKey = (event) => event.key === 'Enter';

    return Vue.extend({
        template,
        props: ['card'],
        watch: {
            card(newCard){
                this.loadTitle();
            }
        },
        data() {
            return {
                title: ''
            }
        },
        methods: {
            saveCard(){
                this.dispatchToStore();
                this.$emit('close');
            },
            dispatchToStore(){
                if (isEmpty(this.title)) return;
                
                let card = Object.assign({}, this.card);
                card.title = this.title;
                store.dispatch('cards/update', card);
            },
            handleKeyDown(evt){
                /*--Pressing the enter key submits the card for adding--*/
                if ( isEnterKey(evt) ) { 
                    evt.preventDefault();
                    this.saveCard();
                };
                return true;
            },
            loadTitle(){
                this.title = this.card.title;
            }
        },
        created() {
            this.loadTitle();
        }
    });
});