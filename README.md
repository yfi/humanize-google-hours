# humanize-google-hours

Utility function to summarize hours of operation provided by google places api.

ie.
```
Mon 9AM–5PM
Tue 9AM–5PM
Wed 9AM–5PM
Thu 9AM–5PM
Fri 9AM–5PM
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

let periods = apiResult.opening_hours.periods;
let hours = humanizeHours(periods);

```
