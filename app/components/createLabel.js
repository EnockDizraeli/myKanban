define(['text!components/templates/createLabel.html','mixins/openAndClose','components/labelColorPicker','model/jsonLoader','store/index'],
(template, openAndClose, labelColorPicker, jsonLoader, store) => {

    return Vue.extend({
        template,
        data() {
            return {
                colors: [],
                color: '',
                name: ''
            }
        },
        props: ['board'],
        mixins: [openAndClose],
        components: {
            labelColorPicker
        },
        methods: {
            loadColors(){
                let self = this;
                jsonLoader.load('label/colors').then(colors => {
                    self.colors = colors;
                }).catch(console.log);
            },
            createLabel(){
                this.dispatchToStore();
                this.close();
                this.reset();
            },
            dispatchToStore(){
                let label = {
                    boardID: this.board.id,
                    color: this.color,
                    name: this.name
                };
                store.dispatch('labels/create', label);
            },
            reset(){
                this.name = '';
            }
        },
        created() {
            this.loadColors();
        },
    });
});