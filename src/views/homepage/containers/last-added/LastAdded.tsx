import React from "react"

import { mockCars } from "../../../../core/model/mockCars"

import CardLastAdded from "./components/CardLastAdded/CardLastAdded"

import { NavLink } from "react-router-dom"
import WhiteBox from "../../../../core/shared/WhiteBox"
import { Col, Row } from "react-bootstrap"

type Props = {}

const LastAdded = (props: Props) => {
	return (
		<WhiteBox>
			<Row>
				<Col>
					<h2 className="m-2 text-nowrap">Ostatnio dodane</h2>
				</Col>
				<Col className="align-self-center">
					<div className="m-2 text-end">
						<NavLink
							to={"/results"}
							className="text-decoration-none text-primary h6">
							Zobacz wszystkie
						</NavLink>
					</div>
				</Col>
			</Row>

			<Row className="mt-1 mb-3 g-2 row-cols-1 row-cols-md-2 row-cols-lg-4">
				{mockCars
					.filter(car => car.id < 4)
					.map(car => (
						<CardLastAdded
							key={car.id}
							car={car}
							onSelectCar={() => console.log(car.title)}
						/>
					))}
			</Row>
		</WhiteBox>
	)
}

export default LastAdded
