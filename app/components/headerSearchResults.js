define(['text!components/templates/headerSearchResults.html','components/cardSearchResult','components/boardTape'],
(template, cardSearchResult, boardTape) => {
    return Vue.extend({
        template,
        props: ['results'],
        computed: {
            cardResults(){
                return this.results.filter(c => c.type === 'CARD')
            },
            boardResults(){
                return this.results.filter(b => b.type === 'BOARD')
            }
        },
        components: {
            cardSearchResult,
            boardTape
        }
    });
});