define(['text!components/templates/checklistBody.html','components/checklistItem','store/index'],
(template, checklistItem, store) => {
    return Vue.extend({
        template,
        props: ['checklist','showingCompleted'],
        computed: {
            items(){
                return store.getters['checklistItems/getAll'].filter(c => c.checklistID === this.checklist.id);
            },
            shownItems(){
                return this.showingCompleted ? this.items : this.items.filter(i => !i.completed);
            },
            completion(){
                let completedItems = this.items.filter(i => i.completed);
                return Math.floor((completedItems.length) / (this.items.length) * 100);
            },
            color(){
                return this.completion >= 100 ? 'green' : 'blue';
            }
        },
        components: {
            checklistItem
        }
    });
});