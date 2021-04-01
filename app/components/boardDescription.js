define(['text!components/templates/boardDescription.html','mixins/openAndClose','components/editBoardDescription'],
(template, openAndClose, editBoardDescription) => {
    let isEmpty = (val) => !(/\S/.test(val));
    let isUndefined = (val) => (typeof val === 'undefined');

    return Vue.extend({
        template,
        props: ['board'],
        mixins: [openAndClose],
        computed: {
            hasDescription(){
                /*--A description exists if it is neither empty nor undefined*/
                return !isEmpty(this.board.description) && !isUndefined(this.board.description);
            }
        },
        components : {
            editBoardDescription
        }
    })
});