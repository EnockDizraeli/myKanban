define(['text!components/templates/mainNavigation.html'],
(template) => {
    let items = [{
        name: 'Boards',
        icon: 'mdi-credit-card-multiple',
        path: '/boards'
    },{
        name: 'Upcoming Features',
        icon: 'mdi-newspaper',
        path: '/upcoming'
    }];

    return Vue.extend({
        template,
        data() {
            return {
                items
            }
        },
        computed: {
            path(){
                return this.$router.currentRoute.path;
            }
        }
    });
});