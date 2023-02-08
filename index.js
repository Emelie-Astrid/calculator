const calculator = document.querySelector("#calculator");
const input = document.querySelector("#input");

const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const comma = document.querySelector("#comma");

const divisonBtn = document.querySelector("#division");
const multiplicationBtn = document.querySelector("#multiplication");
const subsractionBtn = document.querySelector("#substraction");
const additionBtn = document.querySelector("#addition");

const result = document.querySelector("#equal");
const clear = document.querySelector("#clear");


clear.addEventListener ("click", (e) => {
    clearInput();
})

result.addEventListener ("click", (e) => {
    displayResult();
    console.log("click " + e.target.id)
})

//display + value av input för alla siffror? 
zero.addEventListener ("click", (e) => {
    input.value = zero.value;
    console.log("zero = " + zero.value);
    console.log("input = " + input.value);
})


result.addEventListener ("click", (e) => {
    displayResult();
    console.log("click " + e.target.id)
})

function clearInput() {
    input.value = "";
}

function displayResult() {
    input.value = "Resultatet";
}










// additionBtn.addEventListener ("click", () => {

//     let firstValue = document.querySelector("#input").value;
//     let secondValue = document.querySelector("#input").value;

//     let sum = firstValue + secondValue;
//     console.log(sum);

// })

