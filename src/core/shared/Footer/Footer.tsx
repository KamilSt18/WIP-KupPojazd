import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"

import "./footer.scss"
import { faCar, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import {
	faAppStore,
	faFacebook,
	faGooglePlay,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons"

type Props = {}

const Footer = (props: Props) => {
	return (
		<footer className="mt-3 text-center text-xl-start bg-white text-muted">
			<div className="mx-auto col-10">
				<section className="p-4 d-flex justify-content-center justify-content-xl-between border-bottom">
					<div className="me-5 d-none d-xl-block">
						<span>
							Dołącz do nas w mediach społecznościowych i innych platformach:
						</span>
					</div>
					<div>
						<NavLink to={"/"} className="me-4 text-reset">
							<FontAwesomeIcon icon={faFacebook} />
						</NavLink>
						<NavLink to={"/"} className="me-4 text-reset">
							<FontAwesomeIcon icon={faYoutube} />
						</NavLink>
						<NavLink to={"/"} className="me-4 text-reset">
							<FontAwesomeIcon icon={faGooglePlay} />
						</NavLink>
						<NavLink to={"/"} className="me-4 text-reset">
							<FontAwesomeIcon icon={faAppStore} />
						</NavLink>
					</div>
				</section>

				<section>
					<div className="mt-5 container text-center text-md-start">
						<div className="mt-3 row">
							<div className="mx-auto mb-4 col-md-3 col-lg-4 col-xl-3">
								<h6 className="mb-4 fw-bold">
									<FontAwesomeIcon icon={faCar} className="me-1" /> KupPOJAZD
								</h6>
								<p>
									Ullam sint est temporibus sint nulla. Qui autem porro
									quibusdam deserunt officia maxime. Omnis repellendus
									consequatur nobis consectetur.
								</p>
							</div>

							<div className="mx-auto mb-4 col-md-4 col-lg-4 col-xl-3">
								<h6 className="mb-4 text-uppercase fw-bold">Kontakt</h6>
								<p>
									<FontAwesomeIcon icon={faEnvelope} className="me-3" />
									kontakt@kuppojazd.pl
								</p>
								<p>
									<FontAwesomeIcon icon={faPhone} className="me-3" />+ 48 512
									627 452
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>

			<div className="footer text-center p-4">
				<div className="copyright">
					<span>KupPOJAZD.pl © {new Date().getFullYear()}</span> | Wszelkie
					prawa zastrzeżone
				</div>
			</div>
		</footer>
	)
}

export default Footer
