const checkVowel = (char) => {
var char = char.toLowerCase();

    if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
        console.log('vowel') ;
    }else{
        console.log('consonant')
    }
}
checkVowel('b');
