exports.humanizeHours = function(periods) {
    let lines = reduceLines(periods);
    return lines.map((el) => humanizeLine(el));
};

function reduceLines(periods) {
    if (!periods) return false;
    let lines = [];
    let line = Object.assign(periods[0]);
    periods.forEach((el, i, arr) => {
        if (i > 0) {
            let prevEl = arr[i - 1];
            if (
                el.open.day - 1 != prevEl.open.day ||
                el.open.time != line.open.time ||
                el.open.time != line.open.time ||
                i == arr.length - 1
            ) {
                line.close.day = prevEl.close.day;
                lines.push(line);
                line = Object.assign(el);
            }
        }
    });
    return lines;
}

function humanizeLine(period) {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let line = days[period.open.day];
    if (period.close.day != period.open.day)
        line += "&mdash;" + days[period.close.day];
    line +=
        " " + toAmPm(period.open.time) + "&mdash;" + toAmPm(period.close.time);
    return line;
};

function toAmPm(hhmm) {
    const meridien = hhmm.substring(0, 2) >= 12 ? "PM" : "AM";
    const hours = hhmm.substring(0, 2) % 12 || 12;
    const minutes = eval(hhmm.substring(2, 2));

    let time = hours;
    if (minutes) time += ":" + minutes;
    time += meridien;
    return time;
};

function simplifyLine(line) {
    line = line.replace(/:|00| /g, "");
    line = line.replace(
        /Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday/gi,
        function(match) {
            return match.substring(0, 1).toUpperCase() + " ";
        }
    );
    line = line.replace(/closed/i, "&mdash;");

    return line;
};