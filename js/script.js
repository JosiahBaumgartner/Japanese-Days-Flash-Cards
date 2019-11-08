let randomNum = Math.floor(Math.random() * 7);

const days = [
  {japanese:"にちようび", english:"sunday"},
  {japanese:"げつようび", english:"monday"},
  {japanese:"かようび", english:"tuesday"},
  {japanese:"すいようび", english:"wednesday"},
  {japanese:"もくようび", english:"thursday"},
  {japanese:"きんようび", english:"friday"},
  {japanese:"どようび", english:"saturday"}
];

function eval(){
  event.preventDefault();
  if(document.querySelector("#input").value.toLowerCase() === days[randomNum].english || document.querySelector("#input").value.toLowerCase() === days[randomNum].english + " ") {
    document.querySelector("#day").textContent = "Correct!"
    document.querySelector("#day").classList.add("correct")
  } else {
    document.querySelector("#day").textContent = "Incorrect!"
    document.querySelector("#day").classList.add("incorrect")
  }
  setTimeout(function(){
  randomNum = Math.floor(Math.random() * 7);;
  document.querySelector("#day").textContent = days[randomNum].japanese;
  document.querySelector("#day").classList.remove("correct", "incorrect");
  }, 1000);
}

document.querySelector("#day").textContent = days[randomNum].japanese;
document.querySelector("#button").addEventListener("click", () => eval());
document.addEventListener("submit", () => eval());
