const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
  ];
  
  // creazione div per immagine
  const containerImg = document.querySelector (".slide")
  console.log(containerImg)
  
  const arrowsTop = document.getElementById ('cr_arrows_top_a')
  console.log(arrowsTop)
  
  const arrowsBottom = document.getElementById ('cr_arrows_bottom_b')
  console.log(arrowsBottom)
  
  let cambiaImmagine = 0;
  
  // immagini appese in container
  for (let i = 0; i < items.length; i++){
  
    const crItem = document.createElement ('div')
    crItem.classList.add('cr_item')
    containerImg.append(crItem)
  
    crItem.innerHTML = `<img src="${items[i]}"></img>`
  
    if (cambiaImmagine == i) {
      crItem.classList.add('cr_active')
    }
  }
  

  const allDivItem = document.querySelectorAll(".cr_item")
  
  arrowsBottom.addEventListener('click', function(){
    console.log('indietro')
  
    allDivItem[cambiaImmagine].classList.remove("cr_active");
    cambiaImmagine++;
    allDivItem[cambiaImmagine].classList.add("cr_active");
  
  })
  
  arrowsTop.addEventListener('click', function(){
    console.log('indietro')
  
    allDivItem[cambiaImmagine].classList.remove("cr_active");
    cambiaImmagine--;
    allDivItem[cambiaImmagine].classList.add("cr_active");
  
  })
  

  
  const containerImgAnte = document.querySelector (".arrows")
  console.log(containerImgAnte)
  
  for (let y = 0; y < items.length; y++){
  
    const crItemAnte = document.createElement ('div')
    crItemAnte.classList.add('item_g')
    containerImgAnte.append(crItemAnte)
  
    crItemAnte.innerHTML = `<img src="${items[y]}"></img>`
  
  }