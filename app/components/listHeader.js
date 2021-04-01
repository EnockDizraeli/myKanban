define(['text!components/templates/listHeader.html','components/editListTitle','components/listActions'],
(template, editListTitle, listActions) => {
    return Vue.extend({
        template,
        props: ['list'],
        components: {
            editListTitle,
            listActions
        },
        data() {
            return {
                editing: false
            }
        },
        methods: {
            enterEditMode(){
                this.editing = true;
            },
            leaveEditMode(){
                this.editing = false;
            }
        },
    });
});