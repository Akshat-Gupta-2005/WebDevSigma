const { log } = require('console');
const fs = require('fs');


// //read
// fs.readFile('./Node/docs/blog1.txt', (err, data) => { // Asynchronous read
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// log('------------------'); // This will run before the readFile callback due to its asynchronous nature

// //write
// fs.writeFile('./Node/docs/blog1.txt', 'Hello, World!', () => { // Asynchronous write
//     console.log('File was written!');
// })
// fs.writeFile('./Node/docs/blog2.txt', 'Hello, World!', () => { // Asynchronous write
//     console.log('File was written!');
// })


// //directories
// if (!fs.existsSync('./Node/assets')) { // Check if directory exists
//     fs.mkdir('./Node/assets', (err) => { // Asynchronous directory creation
//         if (err) {
//             console.log(err);
//         }
//         console.log('Directory created!');
//     })
// } else {
//     fs.rmdir('./Node/assets', (err) => { // Asynchronous directory removal
//         if (err) {
//             console.log(err);
//         }
//         console.log('Directory removed!');
//     })
// }

//deleting files
if (fs.existsSync('./Node/docs/deleteme.txt')) { // Check if file exists
    fs.unlink('./Node/docs/deleteme.txt', (err) => { // Asynchronous file deletion
        if (err) {
            console.log(err);
        }
        console.log('File deleted!');
    })
} else {
    fs.writeFile('./Node/docs/deleteme.txt', 'Hello, World!', () => { // Asynchronous write
        console.log('File was written!');
    })
}