import { getComments, getPoints, getUsers, getImages, getAllPoints } from "./getPoints.js";

const introducao = document.getElementById("introducao");
const AllPoints = await getAllPoints();

if (introducao){
  const id = sessionStorage.getItem("id");
  const [points] = await getPoints(id);
  const comments = await getComments(id);
  
  introducao.innerHTML = `
  <section id="content">
    <h1>${points.name}</h1>
    <h2>${points.location}</h2>
    <div class="carrouselcontainer">
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../img/baner.png" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../img/baner.png" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../img/baner.png" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>
  <section id="text">
    <div id="cardstyle" class="card">
      <div class="card-header">
        <h2>Sobre</h2>
      </div>
      <div class="card-body">
        <p class="card-text">${points.description}</p>
      </div>
    </div>
  </section>
  <div class="ratingMedia">
    <p class="numeroRating">${points.mediaRating}</p>
    <div class="Stars" id="mediaStars"  style="--rating: ${points.mediaRating};" aria-label=""></div>
  </div>
  `;
  
  const comentcard = document.getElementById('comentcard')
  
  async function renderComments() {
  
    function commentsList(comments) {
      const commentCard = document.createElement('div');
      commentCard.classList.add('card');
      commentCard.classList.add('comment');
  
      const authorCard = document.createElement('h3');
      const authorname = getUsers(comments.user_id)  
      authorname.then(data => {
        const [name] = data.map(user => user.name);
        authorCard.textContent = name;
        console.log(name);
      });
  
      const commentTitle = document.createElement('h4');
      commentTitle.textContent = comments.title;
  
      const commentText = document.createElement('p');
      commentText.classList.add('card-text');
      commentText.textContent = comments.comment;
  
      const commentRating = document.createElement('div');
      commentRating.classList.add('ratingMedia1');
  
      const commentRatingStars = document.createElement('div');
      commentRatingStars.classList.add('Stars');
      commentRatingStars.classList.add('starsWidth');
      commentRatingStars.setAttribute('id','mediaStars');
      commentRatingStars.setAttribute('style', `--rating: ${comments.rating};`);
  
      commentCard.appendChild(authorCard);
      commentCard.appendChild(commentTitle);
      commentCard.appendChild(commentText);
      commentCard.appendChild(commentRating);
      commentRating.appendChild(commentRatingStars);
      
      return commentCard;
    }
  
    comentcard.innerHTML = ''
  
    comments.forEach(comments => {
      const newComment = commentsList(comments)
      comentcard.appendChild(newComment);
    });
  
  }
  
  renderComments();
}

const chokei = document.getElementById("chokei");

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
    botao.setAttribute('class','btn btn-primary')
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