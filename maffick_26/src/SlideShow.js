import fest from "./img/fest.png";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import "./SlideShow.css";

function SlideShow() {
  return (
    <div id="carouselExampleInterval" className="carousel slide ss" data-bs-ride="carousel" data-bs-interval="4000">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="4000">
          <img src={fest} className="d-block w-100" alt="Fest" />
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <img src={img2} className="d-block w-100" alt="Image 2" />
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <img src={img3} className="d-block w-100" alt="Image 3" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default SlideShow;
