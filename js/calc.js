
// function setclass(yourclass){
//     let btn = document.querySelectorAll('div.main__btn_block > input');
//     for (btn of btn){
//         btn.setAttribute("class", 'main__button');
//     }
// }

// setclass();

let btn = document.querySelectorAll('.main__button'),
    result = [], symbol,
    disp = document.querySelector('.display');

function calc(array, sym){
    // массивы для чисел находящиеся в зависимости от знака операции
    let right = [], left = [];

    // поиск индекса знака оператора
    let symfind = array.indexOf(sym);

    // запись чисел находящиеся слева от знака в массив
    for(let i = 0; i < symfind; i++){
        left.push(array[i]);
    }

    // "соединяем" цифры в одно число
    let leftnum = left.join("");

    // запись чисел находящиеся справа от знака в массив
    for(let i = symfind + 1; i < array.length; i++){
        right.push(array[i]);
    }

    let rightnum = right.join("");

    switch (sym) {
        case sym = "+":
            disp.value += Number(leftnum) + Number(rightnum);            
            break;

        case sym = "-":
            disp.value += Number(leftnum) - Number(rightnum);            
            break;

        case sym = "*":
            disp.value += Number(leftnum) * Number(rightnum);            
            break;

        case sym = "/":
            disp.value += Number(leftnum) / Number(rightnum);            
            break;
    }
}


btn.forEach(elem => {
    elem.addEventListener('click', function() {

        if(this.value == "C"){
            disp.value = "";
            result = [""];
        }

        if(!isNaN(this.value)){
            result.push(this.value);
            disp.value += this.value;
        }
        
        
        if(this.value == "+" || this.value == "-" || this.value == "/" || this.value == "*"){
            result.push(this.value);
            symbol = this.value;
            disp.value += this.value;
        }

        if(this.value == "="){
            disp.value += "=";
            calc(result, symbol);
        }

    })
  });
