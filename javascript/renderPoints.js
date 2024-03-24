import { getAllPoints, getImages } from "./gets.js";

const chokei = document.getElementById("chokei");
const AllPoints = await getAllPoints();

export async function renderPoints() {
  
    function pointsList(AllPoints, valor) {
      const imgs = getImages(AllPoints.id);
      const pointsCard = document.createElement('div');
      pointsCard.classList.add('tourismCard');
      
      const carouselExampleIndicators = document.createElement('div')
      carouselExampleIndicators.setAttribute('id',`carouselExampleIndicators${valor}`)
      carouselExampleIndicators.classList.add('carousel')
      carouselExampleIndicators.classList.add('slide')
  
      const carouselIndicators = document.createElement('div')
      carouselIndicators.classList.add('carousel-indicators')
  
      const button1 = document.createElement('button')
      button1.setAttribute('type','button')
      button1.setAttribute('data-bs-target',`#carouselExampleIndicators${valor}`)
      button1.setAttribute('data-bs-slide-to','0')
      button1.setAttribute('class','active')
      button1.setAttribute('aria-current','true')
      button1.setAttribute('aria-label','Slide 1')
  
      const button2 = document.createElement('button')
      button2.setAttribute('type','button')
      button2.setAttribute('data-bs-target',`#carouselExampleIndicators${valor}`)
      button2.setAttribute('data-bs-slide-to','1')
      button2.setAttribute('aria-label','Slide 2')
  
      const button3 = document.createElement('button')
      button3.setAttribute('type','button')
      button3.setAttribute('data-bs-target',`#carouselExampleIndicators${valor}`)
      button3.setAttribute('data-bs-slide-to','2')
      button3.setAttribute('aria-label','Slide 3')
  
      const carouselInner = document.createElement('div')
      carouselInner.classList.add('carousel-inner')
  
      const carouselItem1 = document.createElement('div')
      carouselItem1.classList.add('carousel-item')
      carouselItem1.classList.add('active')
  
      const img1 = document.createElement('img')
      imgs.then(data => {
        img1.setAttribute('src', data[0].link_image)
      })
      img1.setAttribute('class','d-block w-100')
      img1.setAttribute('alt','...')
  
      const carouselItem2 = document.createElement('div')
      carouselItem2.classList.add('carousel-item')
  
      const img2 = document.createElement('img')
      imgs.then(data => {
        img2.setAttribute('src', data[1].link_image)
      })
      img2.setAttribute('class','d-block w-100')
      img2.setAttribute('alt','...')
  
      const carouselItem3 = document.createElement('div')
      carouselItem3.classList.add('carousel-item')
  
      const img3 = document.createElement('img')
      imgs.then(data => {
        img3.setAttribute('src', data[2].link_image)
      })
      img3.setAttribute('class','d-block w-100')
      img3.setAttribute('alt','...')
  
      const carouselControlPrev = document.createElement('button')
      carouselControlPrev.setAttribute('class','carousel-control-prev')
      carouselControlPrev.setAttribute('type','button')
      carouselControlPrev.setAttribute('data-bs-target',`#carouselExampleIndicators${valor}`)
      carouselControlPrev.setAttribute('data-bs-slide','prev')
  
      const carouselControlPrevicon = document.createElement('span')
      carouselControlPrevicon.setAttribute('class','carousel-control-prev-icon')
      carouselControlPrevicon.setAttribute('aria-hidden','true')
  
      const visuallyHidden1 = document.createElement('span')
      visuallyHidden1.setAttribute('class','visually-hidden')
      visuallyHidden1.textContent = 'Previous'
      
      const carouselControlNext = document.createElement('button')
      carouselControlNext.setAttribute('class','carousel-control-next')
      carouselControlNext.setAttribute('type','button')
      carouselControlNext.setAttribute('data-bs-target',`#carouselExampleIndicators${valor}`)
      carouselControlNext.setAttribute('data-bs-slide','next')
      
      const carouselControlNexticon = document.createElement('span')
      carouselControlNexticon.setAttribute('class','carousel-control-next-icon')
      carouselControlNexticon.setAttribute('aria-hidden','true')
  
      const visuallyHidden = document.createElement('span')
      visuallyHidden.setAttribute('class','visually-hidden')
      visuallyHidden.textContent = 'Next'
  
      const cardContent = document.createElement('div')
      cardContent.classList.add('cardContent')
  
      const titulo = document.createElement('h2')
      titulo.textContent = AllPoints.name
  
      const conteudo = document.createElement('p')
      conteudo.textContent = AllPoints.description
  
      const aLink = document.createElement('a')
      aLink.setAttribute('href', '../comentarios/comentarios.html')
  
      const botao = document.createElement('button')
      botao.setAttribute('class','btn btn-info')
      botao.setAttribute('type','button')
      botao.textContent = 'Saiba Mais'
      botao.onclick = () => {
        const a = AllPoints.id
        sessionStorage.setItem("id", a)
        location.href = '../comentarios/comentarios.html' 
      }
  
      const icon = document.createElement('i')
      icon.setAttribute('class','bi bi-geo-alt-fill')
  
      pointsCard.appendChild(carouselExampleIndicators)
      carouselExampleIndicators.appendChild(carouselIndicators)
      carouselIndicators.appendChild(button1)
      carouselIndicators.appendChild(button2)
      carouselIndicators.appendChild(button3)
      carouselExampleIndicators.appendChild(carouselInner)
      carouselInner.appendChild(carouselItem1)
      carouselItem1.appendChild(img1)
      carouselInner.appendChild(carouselItem2)
      carouselItem2.appendChild(img2)
      carouselInner.appendChild(carouselItem3)
      carouselItem3.appendChild(img3)
      carouselExampleIndicators.appendChild(carouselControlPrev)
      carouselControlPrev.appendChild(carouselControlPrevicon)
      carouselControlPrev.appendChild(visuallyHidden1)
      carouselExampleIndicators.appendChild(carouselControlNext)
      carouselControlNext.appendChild(carouselControlNexticon)
      carouselControlNext.appendChild(visuallyHidden)
      pointsCard.appendChild(cardContent)
      cardContent.appendChild(titulo)
      cardContent.appendChild(conteudo)
      cardContent.appendChild(aLink)
      aLink.appendChild(botao)
      botao.appendChild(icon)
      
      return pointsCard;
    }
    console.log(AllPoints);
  
    if (chokei) {
        chokei.innerHTML = ''
  
        let valor = 1
  
        AllPoints.forEach(AllPoints => {
          valor++
          const newPoints = pointsList(AllPoints, valor)
          chokei.appendChild(newPoints);
        });
    }
  }

renderPoints();
