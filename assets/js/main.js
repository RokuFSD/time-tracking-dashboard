const selector = document.querySelectorAll('a[href="javascript:void(0)"]');

const getSelected = () => {
  selector.forEach(element => {
    if(element.className == 'selected'){
      console.log(element);
      return element;
    }
  })
}

const changeCards = (valor) => {
  getSelected();
  console.log(valor);

}

