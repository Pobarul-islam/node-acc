const fs = require('fs');
const readStream = fs.createReadStream('./data.text');
readStream.on('data', (chunk) => {
    console.log('.................');
    console.log(chunk);
    
    
})

readStream.on(('open', () => {
    console.log('stream is open');
    
}))