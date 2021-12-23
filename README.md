# humanize-google-hours

Utility function to summarize hours of operation provided by google places api.

ie.
```
<<<<<<< HEAD
Mon 9AM–5PM
Tue 9AM–5PM
Wed 9AM–5PM
Thu 9AM–5PM
Fri 9AM–5PM
=======
Monday: 9AM–5PM
Tuesday: 9AM–5PM
Wednesday: 9AM–5PM
Thursday: 9AM–5PM
Friday: 9AM–5PM
>>>>>>> 9b0ce899828ddd46dad9f58f8beae0c69b4b0bf7
```
becomes
```
Mon-Fri 9AM-5PM
```

### Installation
```
npm -i https://github.com/yfi/humanize-google-hours
```

### Usage
This function accepts the opening_hours.periods array.

```

<<<<<<< HEAD
let periods = apiResult.opening_hours;
let hours = humanizeHours(periods);

```
=======
let periods = apiResult.opening_hours.periods;
let hours = humanizeHours(periods);

```
>>>>>>> 9b0ce899828ddd46dad9f58f8beae0c69b4b0bf7
