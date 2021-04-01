define(['text!components/templates/headerBoards.html','components/headerBoardsFind','components/headerBoardsList'],
(template, headerBoardsFind, headerBoardsList) => {
    return Vue.extend({
        template,
        components: {
            headerBoardsFind,
            headerBoardsList
        },
        data() {
            return {
                opened: false,
                searching: false,
            }
        },
        methods: {
            open(){
                this.opened = true;
            },
            close(){
                this.opened = false;
            }
        },
    });
});