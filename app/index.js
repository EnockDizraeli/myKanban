requirejs.config({
    paths: {
        text: '../thirdParty/text',
        axios: '../thirdParty/axios.min',
        dexie: '../thirdParty/dexie.min',
        fuse: '../thirdParty/fuse.min',
        moment: '../thirdParty/moment.min'
    },
    waitSeconds: 0
});

require(['text','router','components/appHeader','helpers/initModules','store/index'],
(text, router, appHeader, initModules, store) => {
    function removePreloader(){
        let elem = document.getElementById('preloader');
        document.body.removeChild( elem );
    };

    return new Vue({
        router,
        el: '#app',
        vuetify: new Vuetify(),
        components: {
            appHeader
        },
        mounted() {
            removePreloader();
            initModules.init();
        },
        created() {
            store.loadData();
        },
    });
});