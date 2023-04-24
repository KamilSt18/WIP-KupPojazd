import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import HomepageView from "../../views/homepage/HomePageView"
import ErrorPage from "../shared/ErrorPage"
import ResultsView from "../../views/results/ResultsView"
import DetailsView from "../../views/details/DetailsView"
import Login from "../../views/authentication/login/Login"
import Register from "../../views/authentication/register/Register"
import SocialSignIn from "../../views/authentication/social-sign-in/SocialSignIn"
import AddOfferView from "../../views/add-offer/AddOfferView"
import ForgotPassword from "../../views/authentication/forgot-password/ForgotPassword"

export const routes = (
	<Routes>
		<Route path="/" element={<HomepageView />} />

		<Route path="/results" element={<ResultsView />} />
		<Route path="/details" element={<DetailsView />} />
		<Route path="/add-offer" element={<AddOfferView />} />
		<Route path="/forgot-password" element={<ForgotPassword />} />

		<Route path="/authentication/login" element={<Login />} />
		<Route path="/authentication/register" element={<Register />} />
		<Route
			path="/authentication"
			element={<Navigate to="/authentication/login" />}
		/>
		<Route path="/authentication/social-sign-in" element={<SocialSignIn />} />

		<Route path="*" element={<ErrorPage />} />
	</Routes>
)
