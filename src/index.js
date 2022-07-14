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

function decode(expr) {
    let Arr = [];
  
  for (let i = 0; i < expr.length / 10; i++) {
  Arr.push(expr.slice(i*10,i*10+10).replace(/^0{0,}/g,''));
  }
  
  let stringArr = [];
  for (let i = 0; i < Arr.length; i++) {
      stringArr.push(Arr[i].replace(/10/g, '.').replace(/11/g, '-').replace(/[*{10,10}]/g, ' '));
    
  };

    let word = [];
    stringArr.forEach(morse => {
         word.push(MORSE_TABLE[morse]) ;
      if (morse == '          ') {
        word.push(' ') ;
      }
    });

    return word.join('');
}

module.exports = {
    decode
}