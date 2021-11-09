const power = document.querySelector(".power");
const time = document.querySelector(".time");
const price = document.querySelector(".price");
const days = document.querySelector(".day");
const unit = document.querySelector(".unit");
const bill = document.querySelector(".bill");
const head = document.querySelector(".head");
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  head.classList.add("active");
  watt = parseFloat(power.value * time.value * days.value) / 1000;
  cost = parseFloat(watt * price.value);
  unit.innerHTML = `You have used ${watt} Unit.`;
  bill.innerHTML = `Your bill is ${cost} TK.`;
});
