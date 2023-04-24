import React from "react"
import { NavLink } from "react-router-dom"

type Props = {}

const AddOfferView = (props: Props) => {
	return (
		<div className="p-3 my-4">
			<div className="row">
				<div className="col-sm-12 col-xl-6">
						<h1 className="mb-4">Dodaj ogłoszenie</h1>
						<select name="AdType" id="AdType" className="form-select">
							<option selected>Wybierz...</option>
							<option>Osobowe</option>
							<option>Motocykle</option>
							<option>Dostawcze</option>
							<option>Ciężarowe</option>
							<option>Rolnicze</option>
							<option>Przyczepy</option>
							<option>Budowlane</option>
							<option>Inne</option>
						</select>
						<div
							className="my-3 alert alert-info rounded-0 border-0"
							role="alert">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
							error illum modi nam cupiditate consectetur aut asperiores
							explicabo quibusdam itaque similique, molestiae cumque quia,
							corrupti sit a tenetur ad praesentium!
						</div>
						<h6>VIN</h6>
						<input
							type="text"
							className="form-control my-1 mb-3"
							placeholder="Wpisz VIN pojazdu"
						/>
						<h6>Tytuł</h6>
						<input
							type="text"
							className="form-control my-1 mb-3"
							placeholder="Opisz samochód"
						/>
						<h6>Stan pojazdu</h6>
						<select
							name="conditionVehicle"
							id="conditionVehicle"
							className="form-select my-1 mb-3">
							<option selected>Wybierz...</option>
							<option>Nowy</option>
							<option>Używany</option>
						</select>
						<h6>Rodzaj nadwozia</h6>
						<select name="bodyType" id="bodyType" className="form-select my-1 mb-3">
							<option selected>Wybierz...</option>
						</select>
						<h6>Marka pojazdu</h6>
						<select
							name="vehicleBrand"
							id="vehicleBrand"
							className="form-select my-1 mb-3">
							<option selected>Wybierz...</option>
						</select>
						<h6>Model pojazdu</h6>
						<select
							name="vehicleModel"
							id="vehicleModel"
							className="form-select my-1 mb-3">
							<option selected>Wybierz...</option>
						</select>
						<h6>Generacja pojazdu</h6>
						<select
							name="vehicleGeneration"
							id="vehicleGeneration"
							className="form-select my-1 mb-3">
							<option selected>Wybierz...</option>
						</select>
						<h6>Wersja silnika</h6>
						<select
							name="motorVersion"
							id="motorVersion"
							className="form-select my-1 mb-3">
							<option selected>Wybierz...</option>
						</select>
						<h6>Zdjęcia</h6>
						<input
							className="form-control my-1 mb-3"
							type="file"
							id="vehiclePhotos"
							multiple
						/>
						<h6>Cena [PLN]</h6>
						<input
							type="text"
							className="form-control my-1 mb-3"
							placeholder="Wpisz cene"
						/>
						<h6>Rok produkcji</h6>
						<input
							type="text"
							className="form-control my-1 mb-3"
							placeholder="Wpisz rok produkcji pojazdu"
						/>
						<h6>Przebieg [km]</h6>
						<input
							type="text"
							className="form-control my-1 mb-3"
							placeholder="Wpisz przebieg"
						/>
						<h6>Numer telefonu</h6>
						<input
							type="text"
							className="form-control my-1 mb-3"
							placeholder="Wpisz numer do kontaktu"
						/>
						<h6>Miejscowość</h6>
						<select name="city" id="city" className="form-select my-1 mb-3">
							<option selected>Wybierz...</option>
						</select>
						<h6>Opis</h6>
						<textarea
							className="form-control my-1 mb-3"
							id="offerDescription"
							rows={5}></textarea>
						<div className="row float-end mt-3 me-0">
							<NavLink type="button" className="btn btn-danger btn-lg" to="/">
								<h6 className="m-0 p-1">DODAJ OGŁOSZENIE</h6>
							</NavLink>
						</div>
					</div>
				</div>

				<div className="col-sm-12 col-xl-6"></div>
			</div>
	)
}

export default AddOfferView
