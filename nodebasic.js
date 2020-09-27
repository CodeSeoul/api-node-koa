'use strict';

import axios from 'axios';

// Not necessary but just for demonstration
// could also do: const Timers = require('timers');
import Timers from 'timers';

// Single line comment
/*
Multi-line comment
*/
console.log('Hello world');

function delayedExecute() {
    console.log('printing delayed');
}

Timers.setTimeout(delayedExecute, 2000);
console.log('print now!');

function nodeback(err, data) {
    if (err) {
        console.error('it broke!');
        throw err; // or return, your choice
    }

    // do something with data
}

/*
httpRequest.get('www.google.com', nodeback);

// This won't do what you think it does
try {
    // assume httpRequest.get is an asynchoronous function
    httpRequest.get(...);
} catch (err) {
    // error handling
}
*/

// Promise example
axios.get('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
    console.log(response.data);
}).catch((err) => {
    console.error(err);
});
