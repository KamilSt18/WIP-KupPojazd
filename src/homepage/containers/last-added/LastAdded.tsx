import React from "react"

import { mockCars } from "../../../core/model/mockCars"

import CardLastAdded from "./components/CardLastAdded/CardLastAdded"

import { NavLink } from "react-router-dom"

type Props = {}

const LastAdded = (props: Props) => {
	return (
		<div className="p-3 bg-white rounded-3">
			<div className="row">
				<div className="col">
					<h2 className="m-2 text-nowrap">Ostatnio dodane</h2>
				</div>
				<div className="col align-self-center">
					<div className="m-2 text-end">
						<NavLink to={"/results"} className="text-decoration-none text-primary h6">
							Zobacz wszystkie
						</NavLink>
					</div>
				</div>
			</div>

			<div className="mt-1 mb-3 g-2 row row-cols-1 row-cols-md-2 row-cols-lg-4">
				{mockCars.map(car => (
					<CardLastAdded key={car.id} car={car} onClick={() => console.log(car.title)}/>
				))}
			</div>
		</div>
	)
}

export default LastAdded
