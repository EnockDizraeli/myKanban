define(['text!components/templates/headerNotifications.html'],
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