import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Menu() {
  return (
    <div>
      <h1 className="text-center my-3">MENU</h1>
      <section className="container">
        <div className="row">
          <div className="col-md-3">
            <div class="card">
              <img src="../../assets/dhonis-head-turning-hairstyle.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">MSD</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Read More</a>
                </div>
            </div>
          </div>

          <div className="col-md-3">
            <div class="card">
              <img src="../../assets/Rohit-Sharma.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Rohit</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Read More</a>
                </div>
            </div>
          </div>

          <div className="col-md-3">
            <div class="card">
              <img src="../../assets/Virat-Kohli-X-Puma_One8featured.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Virat</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Read More</a>
                </div>
            </div>
          </div>

          <div className="col-md-3">
            <div class="card">
              <img src="../../assets/21yuvraj.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Yuvi</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Read More</a>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Menu