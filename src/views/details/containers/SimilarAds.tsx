import React from "react"

import { mockCars } from "../../../core/model/mockCars"

import CardLastAdded from "../../homepage/containers/last-added/components/CardLastAdded/CardLastAdded"

type Props = {}

const SimilarAds = (props: Props) => {
	return (
		<>
			<h2 className="mt-3">Podobne ogłoszenia</h2>
			<div className="my-1 g-2 row row-cols-1 row-cols-md-3 row-cols-lg-5">
				{mockCars.map(car => (
					<CardLastAdded
						key={car.id}
						car={car}
						onSelectCar={() => console.log(car.title)}
					/>
				))}
			</div>
		</>
	)
}

export default SimilarAds
