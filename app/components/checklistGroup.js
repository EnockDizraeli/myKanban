define(['text!components/templates/checklistGroup.html','components/checklist','store/index'],
(template, checklist, store) => {
    return Vue.extend({
        template,
        props: ['card'],
        components :{
            checklist
        },
        computed: {
            checklists(){
                return store.getters['checklists/getAll'].filter(c => c.cardID === this.card.id);
            }
        },
    });
});