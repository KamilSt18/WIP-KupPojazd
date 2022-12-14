import { faSquarePollVertical } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import CardResults from "../components/CardResults"
import Pagination from "../components/Pagination"
import SelectFilter from "../components/SelectFilter"

type Props = { numberOfAnnouncements: number }

const VehicleList = ({ numberOfAnnouncements }: Props) => {
	return (
		<div className="col-12 col-lg-9">
			<div className="row">
				<div className="col-12 col-lg-6 d-flex align-items-center">
					<div className="results-message">
						<FontAwesomeIcon icon={faSquarePollVertical} /> Wyświetlono{" "}
						<span> {numberOfAnnouncements.toLocaleString()} ogłoszeń </span>{" "}
						powiązanych z kryteriami wyszukiwania.
					</div>
				</div>
				<div className="col-12 col-lg-6">
					<SelectFilter />
				</div>
			</div>

			<CardResults />

			<Pagination />
		</div>
	)
}

export default VehicleList
