    import dayjs from 'dayjs';
    import customParseFormat from 'dayjs/plugin/customParseFormat';
    dayjs.extend(customParseFormat);
    import get from 'just-safe-get';

    exports.humanizeHours = (periods) => {

        if (periods[0].open.day==0) periods.push(periods.shift());

        let lines = periods.reduce((acc,cur,i)=>{
        
            const isLast = i == periods.length-1;
            let prev = get(acc, (acc.length-1).toString());

            if (!prev) return [cur];
            
            if (
                get(prev ,'open.time')!=cur.open.time ||
                get(prev ,'close.time')!=cur.close.time 
            ) {
            
                if ( cur.open.day - prev.open.day > Math.abs(1) ) {
                    (prev.close.day = (+cur.close.day-1).toString());
                } 
                
                return [...acc,cur];
            
            }

            if (isLast) prev.close.day = cur.close.day;  
            return acc;

        },[]);

        lines = lines.reduce((acc,cur)=>{

            let days = [formatDay(cur.open.day)];
            if ( cur.open.day != cur.close.day ) days.push(formatDay( cur.close.day ));
     
            let hours = [formatHour(cur.open.time),formatHour(cur.close.time)];
            const line = {days,hours};
            return [...acc, line];

        },[]);

    return lines;
