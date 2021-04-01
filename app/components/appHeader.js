define(['text!components/templates/appHeader.html',
'components/headerMore','components/headerBoards',
'components/headerCreate','components/headerSearch','components/headerInformation',
'components/headerNotifications','components/headerAccount','observers/global'],
(template, headerMore, headerBoards, headerCreate, headerSearch, headerInformation, headerNotifications, headerAccount, observer) => {
    return Vue.extend({
        template,
        components: {
            headerMore,
            headerBoards,
            headerSearch,
            headerCreate,
            headerInformation,
            headerNotifications,
            headerAccount
        },
        data() {
            return {
                inBoard: false
            }
        },
        methods: {
            goHome(){
                let inHomePage = this.$router.currentRoute.path.includes('boards');
                if (!inHomePage) this.$router.push('/boards');
            },
            handleEvents(){
                let self = this;
                observer.$on('board/enter', () => {
                    self.inBoard = true;
                });
                observer.$on('board/leave', () => {
                    self.inBoard = false;
                });
            }
        },
        created() {
            this.handleEvents();
        },
    });
});