function timeshow(){
    let date;
    let time = document.querySelector('.time');

    setInterval(() => {
        date = new Date().toLocaleTimeString();
        time.innerHTML = date;    
    }, 1000);
}

timeshow();