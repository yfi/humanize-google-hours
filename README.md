# humanize-google-hours

Utility function to summarize hours of operation provided by google places api into fewest possible lines.

For Example
```
Monday: 9AM–5PM
Tuesday: 9AM–5PM
Wednesday: 9AM–5PM
Thursday: 9AM–5PM
Friday: 9AM–5PM
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
