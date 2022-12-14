import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import "react-tabs/style/react-tabs.css"
import "./App.scss"

// Components
import NavBar from "./core/shared/NavBar/NavBar"
import Footer from "./core/shared/Footer/Footer"

// Views
import HomepageView from "./homepage/HomePageView"
import ErrorPage from "./core/shared/ErrorPage"
import ResultsView from "./results/ResultsView"
import DetailsView from "./details/DetailsView"

import Login from "./authentication/login/Login"
import Register from "./authentication/register/Register"
import SocialSignIn from "./authentication/social-sign-in/SocialSignIn"
import AddOfferView from "./add-offer/AddOfferView"

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
						<Route path="/add-offer" element={<AddOfferView />} />

						<Route path="/authentication/login" element={<Login />} />
						<Route path="/authentication/register" element={<Register />} />
						<Route
							path="/authentication"
							element={<Navigate to="/authentication/login" />}
						/>
						<Route
							path="/authentication/social-sign-in"
							element={<SocialSignIn />}
						/>

						<Route path="*" element={<ErrorPage />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</div>
	)
}

export default App
