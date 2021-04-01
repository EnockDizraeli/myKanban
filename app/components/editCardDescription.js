define(['text!components/templates/editCardDescription.html','store/index'], 
(template, store) => {
    let isEmpty = (val) => !(/\S/.test(val));

    return Vue.extend({
        template,
        props: ['card'],
        data() {
            return {
                description: ''
            }
        },
        watch: {
            card(){
                this.loadDescription();
            }
        },
        methods: {
            saveDescription(){
                if (isEmpty(this.title)){
                    this.loadDescription();
                }else{
                    this.dispatchToStore();
                }

                this.close();
            },
            dispatchToStore(){
                let card = Object.assign({}, this.card);
                card.description = this.description;
                store.dispatch('cards/update', card);
            },
            close(){
                this.$emit('close');
            },
            loadDescription(){
                this.description = this.card.description;
            }
        },
        created() {
            this.loadDescription();
        }
    });
});