import promptSync from "prompt-sync";
const prompt = promptSync();
let word = prompt("Enter a string: ");
let count = (word) => {
    let i;
    for (i = 0; word[i] != undefined; i++) { }
    return i;
};
console.log("Count is : ", count(word));
