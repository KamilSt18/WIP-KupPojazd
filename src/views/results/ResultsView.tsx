import React from "react"

import HeaderSection from "./containers/HeaderSection"
import SearchForm from "./containers/SearchForm"
import VehicleList from "./containers/VehicleList"

import "./results-view.scss"

type Props = {}

const ResultsView = (props: Props) => {
	return (
		<div className="p-3 mt-3 bg-white rounded-3">
			<div className="row">
				<HeaderSection />
				<div className="col-12 col-lg-3">
					<SearchForm/>
				</div>
				<VehicleList numberOfAnnouncements={184_724} />
			</div>
		</div>
	)
}

export default ResultsView
