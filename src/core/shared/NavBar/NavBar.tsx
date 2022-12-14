import React, { useState } from "react"
import clsx from "clsx";

import "./nav-bar.scss"
import logo from '../../images/logo.svg'


import { NavLink } from "react-router-dom"

type Props = {}

const NavBar = (props: Props) => {
	const [open, setOpen] = useState(false);
	return (
		<nav className="sticky-top navbar navbar-expand-xl navbar-light bg-white shadow menu-border">
			<div className="container">
				<NavLink to={"/"} className="navbar-brand">
					<img src={logo} alt="Logo" className="logo" />
				</NavLink>
				<button className="navbar-toggler" type="button" onClick={() => setOpen(!open)}>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className={clsx("collapse navbar-collapse", open && "show")}>
					<ul className="my-1 navbar-nav">
						<li className="nav-item">
							<NavLink to={"/"} className="nav-link">
								Osobowe
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink to={"/"} className="nav-link">
								Motocykle
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink to={"/"} className="nav-link">
								Dostawcze
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink to={"/"} className="nav-link">
								Ciężarowe
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink to={"/"} className="nav-link">
								Rolnicze
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink to={"/"} className="nav-link">
								Przyczepy
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink to={"/"} className="nav-link">
								Budowlane
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink to={"/"} className="nav-link">
								Inne
							</NavLink>
						</li>
						<li className="nav-item d-xl-none">
							<NavLink
								to={"/"}
								className="text-decoration-none nav-link text-primary">
								Zaloguj się
							</NavLink>
						</li>

						<li className="nav-item d-xl-none">
							<NavLink
								to={"/"}
								className="text-decoration-none nav-link text-primary">
								Zarejestruj się
							</NavLink>
						</li>

						<li className="d-xl-none my-2 nav-item">
							<button type="button" className="btn btn-primary">
								Dodaj ogłoszenie
							</button>
						</li>
					</ul>
					<div className="ms-auto d-none d-xl-flex align-items-center">
						<span className="mx-xl-4 text-nowrap">
							<NavLink to={"/authentication/login"} className="text-decoration-none text-primary">
								Zaloguj się
							</NavLink>
							<span className="mx-2">/</span>
							<NavLink to={"/authentication/register"} className="text-decoration-none text-primary">
								Zarejestruj się
							</NavLink>
						</span>

						<NavLink to="/add-offer" className="btn btn-primary">
							Dodaj ogłoszenie
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
