define(['text!components/templates/editCardSchedule.html','mixins/openAndClose','store/index'],
(template, openAndClose, store) => {
    return Vue.extend({
        template,
        props: ['card'],
        mixins: [openAndClose],
        data() {
            return {
                date: (this.card.schedule) ? this.card.schedule.date : new Date().toISOString().substr(0, 10)
            }
        },
        methods: {
            scheduleCard(){
                store.dispatch('cards/addSchedule', {
                    cardID: this.card.id,
                    date: this.date,
                    time: null
                });
                this.close();
            },
            removeCardSchedule(){
                store.dispatch('cards/removeSchedule', this.card.id);
                this.close();
            }
        },
    })
})