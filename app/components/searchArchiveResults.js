define(['text!components/templates/searchArchiveResults.html','components/archivedCards','components/archivedLists'],
(template, archivedCards, archivedLists) => {
    return Vue.extend({
        template,
        props: ['results'],
        computed: {
            cards(){
                return this.results.filter(r => r.type === 'CARD');
            },
            lists(){
                return this.results.filter(r => r.type === 'LIST');
            }
        },
        components: {
            archivedCards,
            archivedLists
        }
    });
});