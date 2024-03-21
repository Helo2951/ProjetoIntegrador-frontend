import { getPoints } from "./getPoints.js";

const introducao = document.getElementById('introducao');

const [points] = await getPoints()
console.log(points);

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
<div class="Stars" id="mediaStars"  style="--rating: ${points.mediaRating};" aria-label="">
</div>
`