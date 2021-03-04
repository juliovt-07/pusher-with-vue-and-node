'use strict';

const Pusher = require('pusher');

var pusher = new Pusher({
    appId: '1166223',
    key: 'b9fd36fe72d986cec08f',
    secret: '1fac1927d525e214945a',
    cluster: 'us2',
    encrypted: true
});

process.stdin.on('data', (chunk) => {
    const str = chunk.toString().trim();
  
    if (str === 'exit') {
        process.exit(0);
    }

    pusher.trigger('my-channel', 'my-event', { 
        message: str
    });
});

console.log('Enter message...');