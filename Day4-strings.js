let s ="Hello World";
let str = s.split(" ");
let word = str[str.length-1]
console.log(word.length)



function lastWordLength(s1) {
    let str1 = s1.trim().split(" ");
    let word1 = str1[str1.length - 1];
    return word1.length;
}

console.log(lastWordLength("   fly me   to   the moon  "));

function  isAnagram(w1, w2) {
    let string1 = w1.trim().toLowerCase()
    let string2 = w2.trim().toLowerCase()
    string1 =  string1.split("").sort().join();
    string2 =  string2.split("").sort().join();
    return string1==string2
        
}
console.log(isAnagram('listen', 'silent'));
console.log(isAnagram('hello', 'world'));
//'listen', 'silent'