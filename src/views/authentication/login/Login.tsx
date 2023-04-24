import React from "react"
import { NavLink } from "react-router-dom"
import VerticalLine from "../components/VerticalLine"
import SocialSignIn from "../social-sign-in/SocialSignIn"

type Props = {}

const Login = (props: Props) => {
	return (
		<div className="p-3 mt-3">
			<div className="row">
				<div className="col-sm-12 col-xl-6">
					<h1>Zaloguj się</h1>
					<h5>
						Nie masz konta?{" "}
						<NavLink
							to="/authentication/register"
							className="text-decoration-none">
							Zarejestruj się!
						</NavLink>
					</h5>
					<form>
						<div className="my-3 row">
							<div className="col">
								<input
									type="email"
									className="form-control form-control-lg"
									placeholder="Adres e-mail"
								/>
							</div>
						</div>

						<div className="my-3 row">
							<div className="col">
								<input
									type="password"
									className="form-control form-control-lg"
									placeholder="Hasło"
								/>
							</div>
						</div>
						<p>
							{/* <NavLink to="/forgot-password" style={{textDecoration: 'none'}}>Nie pamiętam hasła</NavLink> */}
							<NavLink to="/" style={{textDecoration: 'none'}}>Nie pamiętam hasła</NavLink>
						</p>
						<button type="button" className="mb-3 btn btn-danger btn-lg">
							<span className="mx-3">Zaloguj</span>
						</button>

						<p>
							<small>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
								aspernatur.
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

export default Login
