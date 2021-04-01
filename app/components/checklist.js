define(['text!components/templates/checklist.html','components/checklistHeader','components/checklistBody','components/addChecklistItem'],
(template, checklistHeader, checklistBody, addChecklistItem) => {
    return Vue.extend({
        template,
        props: ['checklist'],
        data() {
            return {
                showingCompleted: true
            }
        },
        components : {
            checklistHeader,
            checklistBody,
            addChecklistItem
        },
        methods: {
            toggleShowingCompleted(){
                this.showingCompleted ^= true;
            }
        },
    });
});