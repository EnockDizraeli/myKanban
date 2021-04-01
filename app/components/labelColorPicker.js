define(['text!components/templates/labelColorPicker.html'],
(template) => {
    return Vue.extend({
        template,
        props: {
            value: {
                required: true
            },
            colors: {
                required: true
            },
            setDefault: {
                required: false,
                default: true
            }
        },
        methods: {
            setValue(value){
                this.value = value;
                this.$emit('input', value);
            }
        },
        created() {
            if (this.setDefault){
                this.setValue(this.colors[0].value);
            }
        },
    });
});