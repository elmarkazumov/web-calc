// function timeshow(){
//     let date;
//     let time = document.querySelector('.time');

//     setInterval(() => {
//         date = new Date().toLocaleTimeString();
//         time.innerHTML = date;    
//     }, 1000);
// }

// timeshow();


// function setclass(yourclass){
//     let btn = document.querySelectorAll('div.main__btn_block > input');
//     for (btn of btn){
//         btn.setAttribute("class", 'main__button');
//     }
// }

// setclass();

let btn = document.querySelectorAll('.main__button'),
    result = [], 
    disp = document.querySelector('.display');

function calc(firstnum, secondnum, array,sym){
    let sumright = [], sumleft = [];

    let symfind = array.indexOf(sym);

    for(let i = 0; i < symfind; i++){
        sumleft.push(result[i]);
    }

    let leftnum = sumleft.join("");

    for(let i = symfind + 1; i < result.length; i++){
        sumright.push(result[i]);
    }

    let rightnum = sumright.join("");

    disp.value += Number(leftnum) + Number(rightnum);
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
        
        
        if(this.value == "+"){
            result.push(this.value);
            disp.value += "+";
        }

        if(this.value == "="){
            disp.value += "=";
            let symfind = result.indexOf('+');

            for(let i = 0; i < symfind; i++){
                sumleft.push(result[i]);
            }
        
            let leftnum = sumleft.join("");

            for(let i = symfind + 1; i < result.length; i++){
                sumright.push(result[i]);
            }

            let rightnum = sumright.join("");

            disp.value += Number(leftnum) + Number(rightnum);
        }

    })
  });


          // switch(this.value) {
        //     case "C":
        //         disp.value = '';
        //         break;

        //     case '1', '4':
        //         first = this.value;
        //         disp.value += first;
        //         break;
                
        //     default:
        //         alert(0);
        //         break;
        // }