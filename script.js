const billAmount = document.getElementById('bill-amount');
const tipRate = document.getElementById('tip-rate');
const nuOfPeople = document.getElementById('noofpeople');
const tipAmount  = document.getElementById('tip-result-screen');
const totalAmount = document.getElementById('total-result-screen');
const resetButton = document.getElementById('reset');

//constant percent buttons
const percent5 = document.getElementById('percent-rate5');
const percent10 = document.getElementById('percent-rate10');
const percent15 = document.getElementById('percent-rate15');
const percent25 = document.getElementById('percent-rate25');
const percent50 = document.getElementById('percent-rate50');

function calculate (lastTipRate = tipRate.value) {
    const sumBillAmount = parseInt(billAmount.value);
    const people = nuOfPeople.value;

    const lastTipAmount = sumBillAmount * parseInt(lastTipRate) / 100 / parseInt(people);
    const totalBillAmount = sumBillAmount + parseInt(lastTipAmount);

    tipAmount.innerText = `${lastTipAmount.toFixed(1)}$`;
    totalAmount.innerText = `${totalBillAmount.toFixed(1)}$`;
    tipRate.innerText = `${lastTipRate}`;
}

billAmount.addEventListener('input', () => {
    const lastTipRate = parseInt(tipRate.value);
    calculate(lastTipRate);
});

percent5.addEventListener('click', () => {
    const lastTipRate = parseInt(percent5.value);
    calculate(lastTipRate);
});

percent10.addEventListener('click', () => {
    const lastTipRate = parseInt(percent10.value);
    calculate(lastTipRate);
});

percent15.addEventListener('click', () => {
    const lastTipRate = parseInt(percent15.value);
    calculate(lastTipRate);
});

percent25.addEventListener('click', () => {
    const lastTipRate = parseInt(percent25.value);
    calculate(lastTipRate);
});

percent50.addEventListener('click', () => {
    const lastTipRate = parseInt(percent50.value);
    calculate(lastTipRate);
});

tipRate.addEventListener('input', () => {
    const lastTipRate = parseInt(tipRate.value);
    calculate(lastTipRate);
});

nuOfPeople.addEventListener('input', () => {
    const lastTipRate = parseInt(tipRate.value);
    calculate(lastTipRate);
});

resetButton.addEventListener('click', () => {
    const tempBill = parseInt(billAmount.value);
    const tempRate = parseInt(tipRate.value);
    const tempPeople = parseInt(noofpeople.value);

    billAmount.value = 0;
    tipRate.value = 1;
    noofpeople.value = 1;
    calculate();
});

calculate();