const inputBtn = document.querySelectorAll('.input-btn');
const operateBtn = document.querySelectorAll('.oparate-btn');
const calBtn = document.querySelector('.cal-btn');
const clearBtn = document.querySelector('.clear-btn');
const delBtn = document.querySelector('.del-btn');
const result = document.getElementById('result');

inputBtn.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.value);
        result.textContent = result.textContent + button.value;
    });
});

operateBtn.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.value);
        result.textContent = result.textContent + button.value;
    });
});

calBtn.addEventListener('click' , () => {
    let output = eval(result.textContent);
    if(output.toString().length > 5){
        output = Number(output.toFixed(4));
    }
    console.log(output);
    result.textContent= output;

})
clearBtn.addEventListener('click', () => {
    result.textContent= '';
})
delBtn.addEventListener('click', () => {
    result.textContent= result.textContent.toString().slice(0,-1);
})
