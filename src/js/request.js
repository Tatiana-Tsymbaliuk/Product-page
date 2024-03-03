let counterValue = 1; 

const buttonWithId = document.querySelector("#counter");
const counterValueId = document.querySelector("#values");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');


const handleIncrement = () => {
        counterValue += 1;
counterValueId.textContent = counterValue;
};
incrementBtn.addEventListener('click', handleIncrement);

const  handleDecrement  = () => {
        counterValue -= 1;
counterValueId.textContent = counterValue;
}
decrementBtn.addEventListener('click', handleDecrement);