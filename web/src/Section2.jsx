import React from 'react';
import L1 from 'C:/Users/admin/Desktop/Projects/FirstWebsite/web/src/Images/L1.svg';
import L2 from 'C:/Users/admin/Desktop/Projects/FirstWebsite/web/src/Images/L2.svg';
import L3 from 'C:/Users/admin/Desktop/Projects/FirstWebsite/web/src/Images/L3.svg';

const Section2 = () => {
    return(
        <>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={L3} class="d-block w-100" alt="l3"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Music is my ESCAPE</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={L2} class="d-block w-100" alt="l2"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Music is my LIFE</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={L1} class="d-block w-100" alt="l1"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Music is Everything</h5>      <p>Some representative placeholder content for the first slide.</p>
      </div>
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
        </>
    );
};

export default Section2;