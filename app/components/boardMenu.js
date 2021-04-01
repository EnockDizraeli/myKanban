define(['text!components/templates/boardMenu.html','mixins/openAndClose',
'components/aboutBoard','components/changeBoardBackground','components/searchCards','components/boardArchive','components/boardLabels'
,'components/closeBoard','observers/global'],
(template, openAndClose, aboutBoard, changeBoardBackground, searchCards, boardArchive, boardLabels, closeBoard, observer) => {
    return Vue.extend({
        template,
        props: ['board'],
        data() {
            return {
                window: 0
            }
        },
        components : {
            aboutBoard,
            changeBoardBackground,
            searchCards,
            boardArchive,
            boardLabels,
            closeBoard
        },
        mixins: [openAndClose],
        methods: {
            handleEvents(){
                observer.$on('boardMenu/toggle', this.toggle);
            },
            toggle(){
                if (!this.opened) 
                    this.open();
                else
                    this.close();
            }
        },
        created() {
            this.handleEvents();
        }
    });
});