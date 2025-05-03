const fs = require('fs');

const readStream = fs.createReadStream('./Node/docs/blog3.txt', { encoding: 'utf-8' }); //Auto detect encoding and convert to string
const writeStream = fs.createWriteStream('./Node/docs/blog4.txt');

// readStream.on('data', (chunk) => {
//     console.log('------------------');
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK:\n');
//     writeStream.write(chunk); // Write the chunk to the new file
// })

//pipe method
readStream.pipe(writeStream); // Pipe the read stream to the write stream