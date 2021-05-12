import React from 'react';

export function mapOverHunts(array) {
    return array.map((hunt) => {
        return <div class="col">
        <div class="card h-100">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{hunt.label}</h5>
          </div>
        </div>
      </div>
    })
}