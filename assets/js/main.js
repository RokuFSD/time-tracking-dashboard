const selector = document.querySelectorAll('a[href="javascript:void(0)"]');

const getSelected = () => {
  return selector.forEach(element => {
    if(element.className == 'selected'){
      return element.id;
    }
  })
}


const changeCards = (valor) => {
  console.log(getSelected());
}

