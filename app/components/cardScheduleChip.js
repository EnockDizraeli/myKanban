define(['text!components/templates/cardScheduleChip.html','filters/scheduleFilter','moment'],
(template, scheduleFilter, moment) => {

    function getDifferenceInDays(dayA, dayB){
        if ( dayA.year() <  dayB.year()) return -100;
        return dayA.dayOfYear() - dayB.dayOfYear();      
    };


    return Vue.extend({
        template,
        props: ['card'],
        filters: {
            scheduleFilter
        },
        computed: {
            daysDifference(){
                return getDifferenceInDays(
                    moment(this.card.schedule.date),
                    moment()
                );
            },
            overdue(){
                return (this.daysDifference < 0);
            }
        }
    });
});