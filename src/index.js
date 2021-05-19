import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import details from './details';
import Carousel from './Carousel';

function createCard(details){
  return(
    <Card img={details.img} text={details.text} ></Card>
  )
}


ReactDOM.render(
<div>
<Carousel></Carousel>
<div class="album py-5" >
        <div class="container">
            <br></br>
            <h1>Articles : </h1>
            <hr></hr>
          <div class="row">
              {details.map(createCard)}           
          </div>
        </div>
      </div>
</div>
  
   
,
  document.getElementById('root')
);


