// write a script to read and write the streaming data using readable and writable streams

const fs=require('fs')

const readableStream=fs.createReadStream('data.txt', 'utf8')
const writableStream=fs.createWriteStream('output.txt', 'utf8')
readableStream.pipe(writableStream)
 
writableStream.on('finish', () => {
    console.log('Data successfully written to output.txt');
});
 