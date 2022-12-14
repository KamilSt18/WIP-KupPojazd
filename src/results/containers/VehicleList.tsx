import React from "react"
import CardResults from "../components/CardResults"
import Pagination from "../components/Pagination"

type Props = { numberOfAnnouncements: number }

const VehicleList = ({ numberOfAnnouncements }: Props) => {
	return (
		<div className="col-12 col-lg-9">
			<div className="results-message text-center">
				<i className="me-2 fa-solid fa-square-poll-vertical"></i>Wyświetlono{" "}
				<span>{numberOfAnnouncements.toLocaleString()} ogłoszeń</span>{" "}
				powiązanych z kryteriami wyszukiwania.
			</div>

			<CardResults />

			<Pagination />
		</div>
	)
}

export default VehicleList
