import React from "react"
import { NavLink } from "react-router-dom"

type Props = {}

const Breadcrumb = (props: Props) => {
	return (
		<nav aria-label="breadcrumb">
			<ol className="breadcrumb small">
				<li className="breadcrumb-item">
					<NavLink to={"/"} className="text-decoration-none">
						Strona główna
					</NavLink>
				</li>
				<li className="breadcrumb-item" aria-current="page">
					<NavLink to={"/"} className="text-decoration-none">
						Samochody
					</NavLink>
				</li>
				<li className="breadcrumb-item active" aria-current="page">
					Wyszukiwanie
				</li>
			</ol>
		</nav>
	)
}

export default Breadcrumb
