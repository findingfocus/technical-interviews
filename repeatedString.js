'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
    let aCountInString = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            aCountInString++;
        }
    }
    
    const fullRepetitions = Math.floor(n / s.length);
    
    const remainderLength = n % s.length;
    
    let aCount = fullRepetitions * aCountInString;
    
    //Add the remainder A count
    for (let i = 0; i < remainderLength; i++) {
        if (s[i] === 'a') {
            aCount++;
        }
    }
    return aCount;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine().trim(), 10);

    const result = repeatedString(s, n);

    ws.write(result + '\n');

    ws.end();
}
