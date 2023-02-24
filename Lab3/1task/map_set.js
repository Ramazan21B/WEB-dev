// Create a function unique(arr) that should return an array with unique items of arr.
function unique(arr) {
    return Array.from(new Set(arr));
}
// Write a function aclean(arr) that returns an array cleaned from anagrams.
function aclean(arr) {
    let map = new Map();

    for (let word of arr) {
        // split the word by letters, sort them and join back
        let sorted = word.toLowerCase().split('').sort().join(''); // (*)
        map.set(sorted, word);
    }

    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );
//We’d like to get an array of map.keys() in a variable
// and then apply array-specific methods to it, e.g. .push.
// But that doesn’t work:
// Why? How can we fix the code to make keys.push work?
// That’s because map.keys() returns an iterable, but not an array.
//
// We can convert it into an array using Array.from:
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys); // name, more
