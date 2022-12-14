import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import { Button, Form, Row } from "react-bootstrap"

import Breadcrumb from "../../core/shared/Breadcrumb"
import AlertResults from "../components/AlertResults"
import SelectFilter from "../components/SelectFilter"

type Props = {}

const HeaderSection = (props: Props) => {
	const [searchValue, setSearchValue] = useState("Super szybki czerwony samochód")
	return (
		<>
			<Breadcrumb />
			<AlertResults headline="Lorem ipsum dolor sit amet." text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, neque!" />
			<div className="mt-3 d-lg-flex align-items-center">
				<div className="col-12 col-lg-6">
					<h1>Wyszukane pojazdy</h1>
				</div>
				<div className="col-12 col-lg-6">
					<SelectFilter />
				</div>
			</div>
			<div className="my-3 col-12">
				<Row>
					<Form
						className="my-2 d-flex"
						onSubmit={e => {
							e.preventDefault()
						}}>
						<Form.Control
							type="search"
							placeholder="Jakiego samochodu szukasz?"
							value={searchValue}
							onChange={val => setSearchValue(val.currentTarget.value)}
							className="me-2"
						/>
						<Button
							type="submit"
							variant="outline-secondary"
							size="lg"
              >
							<FontAwesomeIcon
								icon={faMagnifyingGlass}
							/>
						</Button>
					</Form>
				</Row>
			</div>
		</>
	)
}

export default HeaderSection
