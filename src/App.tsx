import React from "react"
import { Routes, Route } from "react-router-dom"
import "./App.scss"

// Components
import NavBar from "./core/shared/NavBar/NavBar"
import Footer from "./core/shared/Footer/Footer"

// Views
import HomepageView from "./homepage/HomePageView"
import ErrorPage from "./core/shared/ErrorPage"
import ResultsView from "./results/ResultsView"
import DetailsView from "./details/DetailsView"
import AuthenticationView from "./authentication/AuthenticationView"

type Props = {}

const App = (props: Props) => {
	return (
		<div className="p-0 container-fluid">
			<div className="m-0 row justify-content-center">
				<NavBar />
				<div className="col-xl-10">
					<Routes>
						<Route path="/" element={<HomepageView />} />
						<Route path="/results" element={<ResultsView />} />
						<Route path="/details" element={<DetailsView />} />
						<Route path="/authentication" element={<AuthenticationView />} />
						<Route path="*" element={<ErrorPage />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</div>
	)
}

export default App
