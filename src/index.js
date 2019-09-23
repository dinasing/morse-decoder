const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(encodedString) { 
    let array = encodedString.split('');
    let encodedLetters = [];
    let symbols = [];
    let morseLetters = [];
    let decodedString;
    
    for (let i = 2; i < array.length + 2; i+=2)
    {
        encodedLetters.push(array.slice(i-2, i).join(''));
    }

    symbols = encodedLetters.map(item => {
        if(item == '**') return '*';
        else if(item == '10') return '.';
        else if (item == '11') return '-';
        else return '';
    })    
    for (let i = 5; i < symbols.length + 5; i += 5)
    {
        morseLetters.push(symbols.slice(i-5, i).join(''));

    }
    decodedString = morseLetters.map(code => {
        if(code == '*****') return ' ';
        else return MORSE_TABLE[code];         
    });
    return decodedString.join('');    
}

module.exports = {
    decode
}