define(['text!components/templates/createBoard.html','components/createBoardBackgroundPicker','store/index'],
(template, createBoardBackgroundPicker, store) => {
    return Vue.extend({
        template,
        data() {
            return {
                opened: false,
                title: '',
                background: null,
                valid: false,

                titleRules: [
                    v => !!v || 'Please type in a title'
                ]
            }
        },
        components: {
            createBoardBackgroundPicker
        },
        methods: {
            createBoard(){
                store.dispatch('boards/create', {
                    title: this.title,
                    background: this.background 
                });
                this.reset();
            },
            setTitle(title){
                this.title = title;
            },
            reset(){
                this.$refs.form.reset();
            },
            open(){
                this.opened = true;
                return this;
            }
        },
    });
});