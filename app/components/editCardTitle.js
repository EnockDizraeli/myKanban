define(['text!components/templates/editCardTitle.html'],
(template) => {
    let isEmpty = (val) => !(/\S/.test(val));
    let isEnterKey = (event) => event.key === 'Enter';

    return Vue.extend({
        template,
        props: ['card'],
        watch: {
            card(newCard){
                this.title = newCard.title;
            }
        },
        data() {
            return {
                title: ''
            }
        },
        methods: {
            saveCard(){
                this.$emit('save');
            },
            handleKeyDown(evt){
                /*--Pressing the enter key submits the card for adding--*/
                if ( isEnterKey(evt) ) { 
                    evt.preventDefault();
                    this.saveCard();
                };
                return true;
            }
        },
        created() {
            this.title = this.card.title;
        }
    });
});