
let btn = document.querySelectorAll('.main__button'), result = [], sum, disp = document.querySelector('.display');

// function calc(array, sym){

//     let right = [], left = [];

//     let symfind = array.indexOf(sym);

//     for(let i = 0; i < symfind; i++){
//         left.push(array[i]);
//     }

//     let leftnum = left.join("");

//     for(let i = symfind + 1; i < array.length; i++){
//         right.push(array[i]);
//     }

//     let rightnum = right.join("");

//     switch (sym) {
//         case sym = "+":
//             disp.value += sum = Number(leftnum) + Number(rightnum);            
//             break;

//         case sym = "-":
//             disp.value += sum = Number(leftnum) - Number(rightnum);            
//             break;

//         case sym = "*":
//             disp.value += sum = Number(leftnum) * Number(rightnum);            
//             break;

//         case sym = "/":
//             disp.value += sum = Number(leftnum) / Number(rightnum);            
//             break;
//     }

//     result = [""];
//     result.push(sum);
// }

function calc(){
    let resultJoin = result.join(""),
        resultClear = resultJoin.split(/(\+|\-|\*|\/)/),
        symbolId = (Array.from(resultClear.entries()).filter(i => i[1] == "/" || i[1] == "+" || i[1] == "-" || i[1] == "*")).map(i => i[0]);

    for(let i = 0; i < symbolId.length; i++){

        if(resultClear[symbolId[i]] == "+" && symbolId[i] == 1){
            sum = parseFloat(resultClear[symbolId[i] - 1]) + parseFloat(resultClear[symbolId[i] + 1]);
        } else if(resultClear[symbolId[i]] == "+"){
            sum += parseFloat(resultClear[symbolId[i] + 1]);
        }

        if(resultClear[symbolId[i]] == "-" && symbolId[i] == 1){
            sum = parseFloat(resultClear[symbolId[i] - 1]) - parseFloat(resultClear[symbolId[i] + 1]);
        } else if(resultClear[symbolId[i]] == "-"){
            sum -= parseFloat(resultClear[symbolId[i] + 1]);
        }

        if(resultClear[symbolId[i]] == "*" && symbolId[i] == 1){
            sum = parseFloat(resultClear[symbolId[i] - 1]) * parseFloat(resultClear[symbolId[i] + 1]);
        } else if(resultClear[symbolId[i]] == "*"){
            sum *= parseFloat(resultClear[symbolId[i] + 1]);
        }

        if(resultClear[symbolId[i]] == "/" && symbolId[i] == 1){
            sum = parseFloat(resultClear[symbolId[i] - 1]) / parseFloat(resultClear[symbolId[i] + 1]);
        } else if(resultClear[symbolId[i]] == "/"){
            sum /= parseFloat(resultClear[symbolId[i] + 1]);
        }
    }

    disp.value += sum;
}

btn.forEach(elem => {
    elem.addEventListener('click', function() {

        if(this.value == "C"){
            disp.value = "";
            result = [""];
        }
        
        if(!isNaN(this.value) || this.value == "."){
            result.push(this.value);
            disp.value += this.value;
        }
        
        if(this.value == "+" || this.value == "-" || this.value == "/" || this.value == "*"){
            result.push(this.value);
            symbol = this.value;
            disp.value += this.value;
        }

        if(this.value == "="){
            disp.value += this.value;
            calc();
        }

    })
  });


