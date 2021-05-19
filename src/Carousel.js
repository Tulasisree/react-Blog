import React from 'react';


function Carousel(){
    return(
       
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="2000">
        <div className="carousel-inner">
          <div className="carousel-item active ci1">
            <div className="c1">
              <h1>What do you want to learn:</h1>
              <button type="button" className="btn btn-secondary btn-lg">Data Science</button>
              <button type="button" className="btn btn-secondary btn-lg">Machine Learning</button>
              <button type="button" className="btn btn-secondary btn-lg">Artificial Intelligence</button>
              <br></br>
              <button type="button" className="btn btn-secondary btn-lg">DevOps</button>
              <button type="button" className="btn btn-secondary btn-lg">Microsoft Azure</button>
              <button type="button" className="btn btn-secondary btn-lg">HADOOP</button>
              <br></br>
              
              <a href="#"><u>--Click here to know more--</u></a>
              
            </div>
          </div>

          <div className="carousel-item ci2" >
            <div className="c1">
            <h1>All the Full-Stack Technologies you need</h1>
            <br></br>
            <button type="button" className="btn btn-secondary btn-lg">FULLSTACK Data Science</button>
            <br></br>
              <button type="button" className="btn btn-secondary btn-lg">FULLSTACK JAVA DEVELOPER</button>
              <button type="button" className="btn btn-secondary btn-lg">FULLSTACK .NET DEVELOPER</button>
            </div>
          </div>

          <div className="carousel-item ci3" >
            <div className="c1">
                <h1>Programming tutorials</h1>
                <br></br>
                <button type="button" className="btn btn-secondary btn-lg">C , C++</button>
              <button type="button" className="btn btn-secondary btn-lg">JAVA</button>
              <button type="button" className="btn btn-secondary btn-lg">PYTHON</button>
              <br></br>
              <button type="button" className="btn btn-secondary btn-lg">AngularJS</button>
              <button type="button" className="btn btn-secondary btn-lg">PHP</button>
              <button type="button" className="btn btn-secondary btn-lg">.NET</button>
              <br></br>
                </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

    )
}

export default Carousel;