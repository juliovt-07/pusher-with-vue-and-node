'use strict';

const Pusher = require('pusher-js');
  
let pusher = new Pusher('b9fd36fe72d986cec08f', {
    cluster: 'us2',
    encrypted: true
});

let channel = pusher.subscribe('my-channel');
 
channel.bind('my-event', (data) => {
    console.log(data.message);
});

console.log('Listening messages...');