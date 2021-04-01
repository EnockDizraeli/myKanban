define(['text!components/templates/cardChecklistChip.html','store/index'],
(template, store) => {
    function getItems(checklistID){
        return store.getters['checklistItems/getAll'].filter(i => i.checklistID === checklistID);
    };

    return Vue.extend({
        template,
        props: ['card'],
        computed: {
            checklists(){
                return store.getters['checklists/getAll'].filter(l => l.cardID === this.card.id);
            },
            items(){
                /*--Get all items from across all checklists--*/
                let allItems = [];
                this.checklists.forEach(checklist => {
                    getItems(checklist.id).forEach(item => {
                        allItems.push(item);
                    });
                });
                return allItems;
            },
            completed(){
                return this.items.filter(i => i.completed).length;
            },
            total(){
                return this.items.length;
            }
        }
    });
});