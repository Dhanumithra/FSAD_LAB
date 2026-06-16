import promptSync from "prompt-sync";
const prompt = promptSync();
let num1 = parseInt(prompt("Enter a number: "));
let num2 = 17;
let iseven = (num) => {
    return (num % 2 == 0);
};
console.log("Num 1 : ", num1, "Is even? ", iseven(num1));
console.log("Num 2 : ", num2, "Is even? ", iseven(num2));
