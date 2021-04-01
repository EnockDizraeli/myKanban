define(['text!components/templates/headerMore.html'],
(template) => {
    let apps = [{
        name: 'VueDoer',
        description: 'To-Do app that is simple and elegant.Free and open source too.',
        url: 'https://github.com/EnockDizraeli/vueDoer/',
        icon: 'images/vueDoer.png'
    }];

    return Vue.extend({
        template,
        data() {
            return {
                opened: false,
                apps
            }
        },
        methods: {
            close(){
                this.opened = false;
            },
            open(){
                this.opened = true;
            }
        }
    });
});