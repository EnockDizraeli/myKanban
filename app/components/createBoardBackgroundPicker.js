define(['text!components/templates/createBoardBackgroundPicker.html','model/jsonLoader'],
(template, jsonLoader) => {

    return Vue.extend({
        template,
        props: {
            value: {
                required: true,
            }
        },
        data() {
            return {
                colors: [],
                value: null
            }
        },
        computed: {
            firstEightColors(){
                return new Array(8).fill(0).map((value, index)=> {
                    return this.colors[index];
                });
            }
        },
        methods: {
            setValue(value){
                this.value = value;
                this.$emit('input', value);
                return this;
            },
            placeChosenColorFirst(){
                let chosen = this.colors.find(c => c.value === this.value);
                /**Remove it from array */
                this.colors.splice( this.colors.indexOf(chosen) , 1);
                /**Add it at the beginning */
                this.colors.unshift(chosen);
            },
            loadColors(){
                let self = this;
                jsonLoader.load('board/colors').then(colors => {
                    self.colors = colors;
                    self.setValue( colors[0].value );
                }).catch(console.log);
            }
        },
        created() {
            this.loadColors();
        }
    });
});