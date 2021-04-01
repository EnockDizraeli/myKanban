define(['text!components/templates/changeBoardBackground.html','model/jsonLoader','store/index'],
(template, jsonLoader, store) => {
    return Vue.extend({
        template,
        props: ['board'],
        data() {
            return {
                colors: []
            }
        },
        methods: {
            loadColors(){
                let self = this;
                jsonLoader.load('board/colors').then(colors => {
                    self.colors = colors;
                }).catch(console.log);
            },
            setBackground(color){
                this.dispatchToStore( color );
            },
            dispatchToStore(color){
                let board = Object.assign({}, this.board);
                board.background = color.value;
                store.dispatch('boards/update', board);
            },
            isBackground(color){
                return (this.board.background === color.value);
            }
        },
        created() {
            this.loadColors();
        },
    });
});