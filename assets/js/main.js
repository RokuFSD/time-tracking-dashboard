const selector = document.querySelectorAll('a[href="javascript:void(0)"]');
const cardsData = document.querySelectorAll(".data__stats");


console.log(cardsData);

const changeCards = (option) => {
  console.log(option);

  for (let element of cardsData) {
    console.log(element);
    element.querySelector("p").innerHTML = 'maricon';
    element.querySelector('h2').innerHTML = 'maricoa';
  }
}

for(let boton of selector){
  boton.addEventListener("click", () => {
    const actual = document.querySelector(".selected");
    if(boton.id != actual.id){
      boton.classList.toggle('selected');
      actual.classList.toggle('selected');
      changeCards(boton.id);
    }
  })
}
