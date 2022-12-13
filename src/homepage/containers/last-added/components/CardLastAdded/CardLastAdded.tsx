import React from "react"

import './card-last-added.scss'

import { Car } from "../../../../../core/model/Car"

type Props = {
	car: Car;
  onClick: () => void;
}

const CardLastAdded = ({ car, onClick }: Props) => {
	return (
		<div className="mb-2 col">
      <div className="card cursor-pointer shadow-sm" role="button" onClick={onClick}>
        <img
          src={car.img}
          className="card-img-top"
          alt={car.title}
          loading="lazy"
        />
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <p className="card-text">{car.condition}</p>
            </li>
            <li className="p-0 text-md-center list-group-item">
              <h4 className="m-0 ms-3 ms-md-0 card-title">{car.title}</h4>
            </li>
            <li className="list-group-item">
              <p className="card-text">{car.mileage} km</p>
            </li>
          </ul>
        </div>
        <div className="card-footer bg-white">
          <span className="vehicle-price">
            {car.price} <sup>PLN</sup>
          </span>
        </div>
      </div>
    </div>
	)
}

export default CardLastAdded
