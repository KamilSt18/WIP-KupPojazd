import React from "react"
import { Button } from "react-bootstrap"

type Props = {}

const SearchForm = (props: Props) => {
	return (
		<form onSubmit={e => {
      e.preventDefault()
    }}>
			<div className="row gy-3">
				<div className="col-12">
					<label htmlFor="conditionVehicle" className="mb-2 search-form-text">Stan pojazdu
					</label>
					<select
						name="conditionVehicle"
						id="conditionVehicle"
						className=" form-select">
						<option>Wybierz...</option>
						<option>Nowy</option>
						<option>Używany</option>
					</select>
				</div>

				<div className="col-12">
					<label htmlFor="bodyType" className="mb-2 search-form-text">
						Rodzaj nadwozia
					</label>
					<select name="bodyType" id="bodyType" className="form-select ">
						<option>Wybierz...</option>
					</select>
				</div>

				<div className="col-12">
					<label htmlFor="vehicleBrand" className="mb-2 search-form-text">
						Marka pojazdu
					</label>
					<select
						name="vehicleBrand"
						id="vehicleBrand"
						className="form-select ">
						<option>Wybierz...</option>
					</select>
				</div>

				<div className="col-12">
					<label htmlFor="vehicleModel" className="mb-2 search-form-text">
						Model pojazdu
					</label>
					<select
						name="vehicleModel"
						id="vehicleModel"
						className="form-select ">
						<option>Wybierz...</option>
					</select>
				</div>

				<div className="col-12">
					<label htmlFor="vehicleGeneration" className="mb-2 search-form-text">
						Generacja pojazdu
					</label>
					<select
						name="vehicleGeneration"
						id="vehicleGeneration"
						className="form-select ">
						<option>Wybierz...</option>
					</select>
				</div>

				<div className="col-12">
					<label htmlFor="city" className="mb-2 search-form-text">
						Miejscowość
					</label>
					<select name="city" id="city" className="form-select ">
						<option>Wybierz...</option>
					</select>
				</div>

				<div className="col-12">
					<label className="mb-2 search-form-text">Cena [PLN]</label>
					<div className="row">
						<div className="col">
							<input
								name="priceFrom"
								type="text"
								className="form-control "
								placeholder="Od"
							/>
						</div>
						<div className="col">
							<input
								name="priceTo"
								type="text"
								className="form-control "
								placeholder="Do"
							/>
						</div>
					</div>
				</div>

				<div className="col-12">
					<label className="mb-2 search-form-text">Rok produkcji</label>
					<div className="row">
						<div className="col">
							<input
								name="yearProductionFrom"
								type="text"
								className="form-control "
								placeholder="Od"
							/>
						</div>
						<div className="col">
							<input
								name="yearProductionTo"
								type="text"
								className="form-control "
								placeholder="Do"
							/>
						</div>
					</div>
				</div>

				<div className="col-12">
					<label className="mb-2 search-form-text">Przebieg [km]</label>
					<div className="row">
						<div className="col">
							<input
								name="carMileageFrom"
								type="text"
								className="form-control "
								placeholder="Od"
							/>
						</div>
						<div className="col">
							<input
								name="carMileageTo"
								type="text"
								className="form-control "
								placeholder="Do"
							/>
						</div>
					</div>
				</div>

      <div className="d-grid">
      <Button className="btn btn-danger" type="submit">
					<h6 className="m-0 p-1">ZASTOSUJ FILTRY</h6>
				</Button>
                </div>
			</div>


		</form>
	)
}

export default SearchForm
