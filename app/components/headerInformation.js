define(['text!components/templates/headerInformation.html'],
(template) => {
    return Vue.extend({
        template,
        data() {
            return {
                opened: false
            }
        },
        methods: {
            close(){
                this.opened = false;
            }
        },
    });
});