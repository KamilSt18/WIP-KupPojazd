import React from "react"

import "react-tabs/style/react-tabs.css"
import "./App.scss"

import NavBar from "./core/shared/NavBar/NavBar"
import Footer from "./core/shared/Footer/Footer"

import { routes } from "./core/router/routes"

import { Container, Row } from "react-bootstrap"

type Props = {}

const App = (props: Props) => {
	return (
			<Container fluid className="p-0">
		
			<Row className="m-0 justify-content-center">
				<NavBar />
				<div className="col-xl-10">{routes}</div>
				<Footer />
			</Row>
		
			</Container>
	)
}

export default App
