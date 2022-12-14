import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const AddOfferView = (props: Props) => {
  return (
    <div className="p-3 mt-3">
  <div className="row">
    <div className="col-sm-12 col-xl-6">
        <h1 className="mb-3">Dodaj ogłoszenie</h1>
        <div className="alert alert-info rounded-0 border-0" role="alert">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis error illum modi nam cupiditate consectetur aut asperiores explicabo quibusdam itaque similique, molestiae cumque quia, corrupti sit a tenetur ad praesentium!
          </div>
        <h3>Rodzaj</h3>
        <select
        name="AdType"
        id="AdType"
        className="form-select my-1"
      >
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
      <h3>VIN</h3>
      <input
      type="text"
      className="form-control my-1"
      placeholder="Wpisz VIN pojazdu"
    />
      <h3>Tytuł</h3>
      <input
                type="text"
                className="form-control my-1"
                placeholder="Opisz samochód"
              />
      <h3>Stan pojazdu</h3>
      <select
      name="conditionVehicle"
      id="conditionVehicle"
      className="form-select my-1"
    >
      <option selected>Wybierz...</option>
      <option>Nowy</option>
      <option>Używany</option>
    </select>
      <h3>Rodzaj nadwozia</h3>
      <select name="bodyType" id="bodyType" className="form-select my-1">
        <option selected>Wybierz...</option>
      </select>
      <h3>Marka pojazdu</h3>
      <select
      name="vehicleBrand"
      id="vehicleBrand"
      className="form-select my-1"
    >
      <option selected>Wybierz...</option>
    </select>
      <h3>Model pojazdu</h3>
      <select
      name="vehicleModel"
      id="vehicleModel"
      className="form-select my-1"
    >
      <option selected>Wybierz...</option>
    </select>
      <h3>Generacja pojazdu</h3>
      <select
      name="vehicleGeneration"
      id="vehicleGeneration"
      className="form-select my-1"
    >
      <option selected>Wybierz...</option>
    </select>
      <h3>Wersja silnika</h3>
      <select
      name="motorVersion"
      id="motorVersion"
      className="form-select my-1"
    >
      <option selected>Wybierz...</option>
    </select>
      <h3>Zdjęcia</h3>
      <input className="form-control my-1" type="file" id="vehiclePhotos" multiple />
      <h3>Cena [PLN]</h3>
      <input
      type="text"
      className="form-control my-1"
      placeholder="Wpisz cene"
    />
      <h3>Rok produkcji</h3>
      <input
      type="text"
      className="form-control my-1"
      placeholder="Wpisz rok produkcji pojazdu"
    />
      <h3>Przebieg [km]</h3>
      <input
      type="text"
      className="form-control my-1"
      placeholder="Wpisz przebieg"
    />
    <h3>Numer telefonu</h3>
    <input
    type="text"
    className="form-control my-1"
    placeholder="Wpisz numer do kontaktu"
  />
      <h3>Miejscowość</h3>
      <select name="city" id="city" className="form-select my-1">
        <option selected>Wybierz...</option>
      </select>
      <h3>Opis</h3>
      <textarea className="form-control my-1" id="offerDescription" rows={5}></textarea>

      <div className="row float-end my-3 me-0">
        <NavLink type="button" className="btn btn-danger btn-lg" to="/">
          <h6 className="m-0 p-1">DODAJ OGŁOSZENIE</h6>
        </NavLink>
      </div>

    </div>
    <div className="col-sm-12 col-xl-6"></div>
  </div>
</div>

  )
}

export default AddOfferView