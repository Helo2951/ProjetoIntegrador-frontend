import { getComments, getPoints, getUsers } from "./getPoints.js";

const introducao = document.getElementById("introducao");

const [points] = await getPoints();
const comments = await getComments();

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
