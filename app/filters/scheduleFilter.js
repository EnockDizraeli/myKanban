define(['moment'],(moment) => {
    let now = moment();
    
    
    function isLessThanAWeekAway(day){
        //Must be same year
        if (!isSameYear(day, now)) return false;
        let differenceInDays = getDifferenceInDays(day,now);
        return ( differenceInDays >= 1 && differenceInDays <= 7);       
     };
    
    
    function getDifferenceInDays(dayA, dayB){
       return dayA.dayOfYear() - dayB.dayOfYear();      
    };
    
    
    function isToday(day){
       return ( isSameYear(day, now) && isSameDayOfYear(day, now));
    };
    
    function isTomorrow(day){
       if (!isSameYear(day, now)) return false;       
       return ( getDifferenceInDays(day, now) === 1);
    };
    
    
    function isSameYear(dayA, dayB){
       return dayA.year() === dayB.year();
    };
    
    function isSameDayOfYear(dayA, dayB){
       return dayA.dayOfYear() === dayB.dayOfYear();
    };
    
    
    function formatSameWeek(day){
       if ( isToday(day) ) return `Today ${day.format('h:mm a')}`;
       if ( isTomorrow(day) ) return `Tomorrow ${day.format('h:mm a')}`;
       return day.format('dddd  h:mm a');
    };
    
    
    function isAnotherMonth(day){
       if (! isSameYear(day, now)) return false;
       return (day.month() !== now.month());
    };

    function wasYesterday(day){
        var difference = getDifferenceInDays(day, now);
        return difference === -1;
    }

    /*Expects schedule: {
        date: String,
        time: String
    }*/
    return function(schedule){        
        var day = moment(schedule.date);
        
        var dayString = '',timeString = '';

        /*Formatting the date part*/
        if ( wasYesterday(day) ){
            dayString = 'Yesterday';
        }else if ( isToday(day,now) ){
            dayString = 'Today';
        }else if ( isTomorrow(day, now)){
            dayString = 'Tomorrow';
        }else if ( isLessThanAWeekAway(day, now) ){
            dayString = day.format('dddd');
        }else if( isAnotherMonth(day,now) ){
            dayString = day.format('MMM Do');
        }else if ( isSameYear(day,now) ){
            dayString = day.format('MMM Do');
        }else{
            dayString = day.format('MMM Do YYYY');
        }

        /*Formatting the time part*/
        if(schedule.time){
            var time = moment(schedule.time,'h:mm');
            timeString = time.format('h:mm A');
            timeString = ' at '+timeString;
        }

        return `${dayString} ${timeString}`;
    }
});