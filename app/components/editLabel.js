define(['text!components/templates/editLabel.html',
'mixins/openAndClose','model/jsonLoader','components/labelColorPicker','components/deleteLabel','store/index'],
(template, openAndClose, jsonLoader, labelColorPicker, deleteLabel, store) => {
    return Vue.extend({
        template,
        mixins: [openAndClose],
        props: ['label'],
        components: {
            labelColorPicker,
            deleteLabel
        },
        watch: {
            label(){
                this.loadLabel();
            }
        },
        data() {
            return {
                colors: [],
                color: '',
                name: ''
            }
        },
        methods: {
            editLabel(){ 
                this.dispatchToStore();
                this.close();
            },
            dispatchToStore(){
                let label = Object.assign({}, this.label);
                label.color = this.color;
                label.name = this.name;
                store.dispatch('labels/update', label);
            },
            loadColors(){
                let self = this;
                jsonLoader.load('label/colors').then(colors => {
                    self.colors = colors;
                }).catch(console.log);
            },
            loadLabel(){
                this.name = this.label.name;
                this.color = this.label.color;
            }
        },
        created() {
            this.loadColors();
            this.loadLabel();
        },
    });
});