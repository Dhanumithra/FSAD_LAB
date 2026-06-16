import promptSync from "prompt-sync";
const prompt = promptSync();
let word:string = prompt("Enter a string: ");
let count = (word: string):number => {
    let i:number;
    for (i=0;word[i]!=undefined;i++){}
    return i;
}
console.log("Count is : ", count(word));