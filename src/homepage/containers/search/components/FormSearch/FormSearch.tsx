import React from "react"
import { NavLink } from "react-router-dom"

import "./form-search.scss"

type Props = {}

const FormSearch = (props: Props) => {
	return (
		<form action="" className="mt-3 mb-4">
			<div className="row">
				<div className="col-12">
					<input
						type="text"
						className="form-control shadow-sm"
						placeholder="Jakiego samochodu szukasz?"
					/>
				</div>
			</div>

			<div className="mt-2 row">
				<div className="col-lg-6 col-xl-3">
					<label htmlFor="conditionVehicle" className="my-1 search-form-text">
						Stan pojazdu
					</label>
					<select
						name="conditionVehicle"
						id="conditionVehicle"
						className="my-1 form-select">
						<option>Wybierz...</option>
						<option>Nowy</option>
						<option>Używany</option>
					</select>
				</div>

				<div className="col-lg-6 col-xl-3">
					<label htmlFor="bodyType" className="my-1 search-form-text">
						Rodzaj nadwozia
					</label>
					<select name="bodyType" id="bodyType" className="my-1 form-select">
						<option>Wybierz...</option>
					</select>
				</div>

				<div className="col-lg-6 col-xl-3">
					<label htmlFor="vehicleBrand" className="my-1 search-form-text">
						Marka pojazdu
					</label>
					<select
						name="vehicleBrand"
						id="vehicleBrand"
						className="my-1 form-select">
						<option>Wybierz...</option>
					</select>
				</div>

				<div className="col-lg-6 col-xl-3">
					<label htmlFor="vehicleModel" className="my-1 search-form-text">
						Model pojazdu
					</label>
					<select
						name="vehicleModel"
						id="vehicleModel"
						className="form-select my-1">
						<option>Wybierz...</option>
					</select>
				</div>

				<div className="col-lg-6 col-xl-3">
					<label htmlFor="vehicleGeneration" className="my-1 search-form-text">
						Generacja pojazdu
					</label>
					<select
						name="vehicleGeneration"
						id="vehicleGeneration"
						className="my-1 form-select">
						<option>Wybierz...</option>
					</select>
				</div>

				<div className="col-lg-6 col-xl-3">
					<label className="my-1 search-form-text">Cena [PLN]</label>
					<div className="row">
						<div className="col">
							<input
								name="priceFrom"
								type="text"
								className="my-1 form-control"
								placeholder="Od"
							/>
						</div>
						<div className="col">
							<input
								name="priceTo"
								type="text"
								className="my-1 form-control"
								placeholder="Do"
							/>
						</div>
					</div>
				</div>

				<div className="col-lg-6 col-xl-3">
					<label className="my-1 search-form-text">Rok produkcji</label>
					<div className="row">
						<div className="col">
							<input
								name="yearProductionFrom"
								type="text"
								className="my-1 form-control"
								placeholder="Od"
							/>
						</div>
						<div className="col">
							<input
								name="yearProductionTo"
								type="text"
								className="my-1 form-control"
								placeholder="Do"
							/>
						</div>
					</div>
				</div>

				<div className="col-lg-6 col-xl-3">
					<label className="my-1 search-form-text">Przebieg [km]</label>
					<div className="row">
						<div className="col">
							<input
								name="carMileageFrom"
								type="text"
								className="my-1 form-control"
								placeholder="Od"
							/>
						</div>
						<div className="col">
							<input
								name="carMileageTo"
								type="text"
								className="my-1 form-control"
								placeholder="Do"
							/>
						</div>
					</div>
				</div>

				<div className="col-lg-6 col-xl-3">
					<label htmlFor="city" className="my-1 search-form-text">
						Miejscowość
					</label>
					<select name="city" id="city" className="my-1 form-select">
						<option>Wybierz...</option>
					</select>
				</div>
			</div>

			<div className="m-2 mt-3 mt-xl-0 me-0 row float-end">
				<NavLink to={"/results"} className="btn btn-danger btn-lg">
					<h6 className="m-0 p-1">POKAŻ OGŁOSZENIA</h6>
				</NavLink>
			</div>
		</form>
	)
}

export default FormSearch
