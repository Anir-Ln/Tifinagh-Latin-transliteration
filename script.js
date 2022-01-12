const tifinaghToLatin = {
    'ⴰ': 'a',
	'ⴱ': 'b',
    'ⴳ': 'g',
    'ⴷ': 'd',
    'ⴻ': 'e',
	'ⴼ': 'f',
    'ⴽ': 'k',
	'ⵀ': 'h',
	'ⵄ': 'ɛ',
	'ⵎ': 'm',
	'ⵜ': 't',
	'ⵞ': 'č',
	'ⵟ': 'ṭ',
	'ⵙ': 's',
	'ⵣ': 'z',
	'ⵕ': 'ṛ',
	'ⴹ': 'ḍ',
	'ⵏ': 'n',
	'ⵍ': 'l',
	'ⵔ': 'r',	
	'ⵚ': 'ṣ',
	'ⵛ': 'c',
	'ⵊ': 'j',
	'ⵅ': 'x',
	'ⵃ': 'ḥ',
	'ⵡ': 'w',
	'ⵖ': 'ɣ',
	'ⵯ': 'ʷ',
	'ⵥ': 'ẓ',
	'ⵇ': 'q',
	'ⵢ': 'y',
	'ⵉ': 'i',
	'ⵓ': 'u',
    'ⵒ': 'p',
    'ⵠ': 'v',
    '\n': '<br>'
};

const LatinToTifinagh = {
    'a': 'ⴰ',
	'b': 'ⴱ',
    'g': 'ⴳ',
    'd': 'ⴷ',
    'e': 'ⴻ',
	'f': 'ⴼ',
    'k': 'ⴽ',
	'h': 'ⵀ',
	'ɛ': 'ⵄ',
	'm': 'ⵎ',
	't': 'ⵜ',
	'č': 'ⵞ',
	'ṭ': 'ⵟ',
	's': 'ⵙ',
	'z': 'ⵣ',
	'ṛ': 'ⵕ',
	'ḍ': 'ⴹ',
	'n': 'ⵏ',
	'l': 'ⵍ',
	'r': 'ⵔ',	
	'ṣ': 'ⵚ',
	'c': 'ⵛ',
	'j': 'ⵊ',
	'x': 'ⵅ',
	'ḥ': 'ⵃ',
	'w': 'ⵡ',
	'ɣ': 'ⵖ',
	'ʷ': 'ⵯ',
	'ẓ': 'ⵥ',
	'q': 'ⵇ',
	'y': 'ⵢ',
	'i': 'ⵉ',
	'u': 'ⵓ',
    'p': 'ⵒ',
    'v': 'ⵠ',
    '\n': '<br>'
};

// const dictionary = ['ⴰ','ⴱ','ⴳ','ⴷ','ⴻ','ⴼ','ⴽ','ⵀ','ⵄ','ⵎ','ⵜ','ⵞ','ⵟ','ⵙ','ⵣ','ⵕ','ⴹ','ⵏ','ⵍ','ⵔ','ⵚ','ⵛ','ⵊ','ⵅ','ⵃ','ⵡ','ⵖ','ⵯ','ⵥ','ⵇ','ⵢ','ⵉ','ⵓ','ⵒ'];
// const latin = ['a','b','ɡ','d','e','f','k','h','ɛ','m','t','č','ṭ','s','z','ṛ','ḍ','n','l','r',	'ṣ','c','j','x','ḥ','w','ɣ','ʷ','ẓ','q','y','i','u','p'];

const min = 11568; // ascii code of the letter 'ⴰ'
const max = 11631; // ascii code of the letter 'ⵥ'

let inputText = document.getElementById('inputText');
let outputText = document.getElementById('outputText');

inputText.addEventListener('input', translateration);

function translateration(){
    // from latin to tifinagh => tr = 0
    // from tifinagh to latin => tr = 1  
    
    value = inputText.value.toLowerCase();
    
    if(value.length === 0){
        outputText.innerHTML = '';
        inputText.style.height = '5px';
        return;
    }

    inputText.style.height = (inputText.scrollHeight + 2)+"px";

    const tr = value.trim()[0].charCodeAt(0);
    // console.log(tr);
    let output = '<p>';
    // console.log(value);
    if(tr < min || tr > max){
        for(let i in value){
            output += LatinToTifinagh[value[i]] ?? value[i];
        }
    } else {
        for(let i in value){
            output += tifinaghToLatin[value[i]] ?? value[i];
        }
    }

    output += '</p>';
    outputText.innerHTML = output;   
}
