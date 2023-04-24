import React from "react"
import { NavLink } from "react-router-dom"
import VerticalLine from "../components/VerticalLine"
import SocialSignIn from "../social-sign-in/SocialSignIn"

type Props = {}

const Register = (props: Props) => {
	return (
		<div className="p-3 mt-3">
			<div className="row">
				<div className="col-sm-12 col-xl-6">
					<h1>Stwórz konto</h1>
					<h5>
						Masz konto?{" "}
						<NavLink
							to="/authentication/login"
							className="text-decoration-none">
							Zaloguj się
						</NavLink>
					</h5>
					<form>
						<div className="row my-3">
							<div className="col">
								<input
									type="email"
									className="form-control form-control-lg"
									placeholder="Adres e-mail"
								/>
							</div>
						</div>

						<div className="row my-3">
							<div className="col-12 col-xl-6">
								<input
									type="password"
									className="form-control form-control-lg"
									placeholder="Hasło"
								/>
							</div>
							<div className="my-3 my-xl-0 col-12 col-xl-6">
								<input
									type="password"
									className="form-control form-control-lg"
									placeholder="Powtórz hasło"
								/>
							</div>
						</div>
						<div className="form-check">
							<input
								className="form-check-input"
								type="checkbox"
								value=""
								id="flexCheckChecked"
							/>
							<label className="form-check-label" htmlFor="flexCheckChecked">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
							</label>
						</div>

						<button type="button" className="mb-3 btn btn-danger btn-lg">
							<span className="mx-3">Zarejestruj</span>
						</button>

						<p>
							<small>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Repudiandae architecto fuga eum alias magnam pariatur, corporis
								veritatis? Voluptates, harum laudantium.
							</small>
						</p>
					</form>
				</div>
				<div className="col-sm-12 col-xl-6">
					<div className="d-flex" style={{ height: "100%" }}>
						<VerticalLine />

						<div className="m-auto">
							<SocialSignIn />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Register
