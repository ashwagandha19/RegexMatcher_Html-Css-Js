const input = document.getElementById("input");
let pattern = document.getElementById("pattern");
let flag = document.getElementById("flag");

//here I will display the matching result
const result = document.getElementById("result");

const regexCheck = document.getElementById("regexCheck");


document.getElementById("submitBtn").addEventListener("click", (e) => {
    e.preventDefault();

    //here I construct the regular expression from the user input
    const reg = new RegExp(pattern.value, flag.value);

    //here I show the user what is the regex he introduced
    regexCheck.textContent = reg;

    //here I take he user input and compare it to regular expression
    const userInput = input.value;
    const matched = userInput.match(reg);

    //here I check if there's a match, and if it is I show the result, otherwise I show the string "No match"
    if(matched) {
        result.textContent = matched;
    } else result.textContent = "No match"
})






















