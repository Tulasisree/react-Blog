import React from 'react';

function Card(props){
    return (
        <div class="col-lg-4 col-md-6">
        <div class="card mb-4 border-dark bg-secondary text-white shadow-sm">
          
          <img src={props.img} class="card-img-top" alt="dsimage"/>
          <div class="card-body">
            <h4 class="card-text">{props.text}</h4>
                <button type="button" class="btn btn-lg btn-dark">Start Reading</button>
          </div>
        </div>
      </div>
    )
}

export default Card;