define(['text!components/templates/boardArchive.html','components/archiveBody','components/searchArchive'],
(template, archiveBody, searchArchive) => {
    return Vue.extend({
        template,
        data() {
            return {
                searching: false,
                showingList: false
            }
        },
        props: ['board'],
        components: {
            archiveBody,
            searchArchive
        },
        methods: {
            toggleShowingList(){
                this.showingList ^= true;
            }
        }
    });
})