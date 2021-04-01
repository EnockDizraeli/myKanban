define(['text!components/templates/headerCreate.html','components/createBoard'],
(template, createBoard) => {
    return Vue.extend({
        template,
        data() {
            return {
                opened: false
            }
        },
        components: {
            createBoard
        },
        methods: {
            close(){
                this.opened = false;
            }
        },
    });
});