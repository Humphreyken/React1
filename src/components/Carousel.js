export default function Carousel(){
return<>
()
<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="CAR10.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="CAR20.webp" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="CAR30.webp" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="car1000.webp" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="car50.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="car60.webp" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>


</>
}