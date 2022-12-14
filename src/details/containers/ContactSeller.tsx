import { faEnvelope, faMessage, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

type Props = {}

const ContactSeller = (props: Props) => {
	return (
		<div className="col-12 col-xl-6">
			<div className="details-info-seller">
				<h3>Kontakt ze sprzedającym</h3>
				<h4>
					<FontAwesomeIcon icon={faUser} className="mx-1" /> Zdzisław -{" "}
					<span>Tel.</span> 500 600 700
				</h4>

				<p className="mb-2 mt-3">Szybki formularz kontaktowy (bez konta)</p>

				<form>
					<div className="row">
						<div className="my-3 my-xl-0 col-12 col-xl-6">
							<input type="text" className="form-control" placeholder="Imię" />
						</div>
						<div className="col-12 col-xl-6">
							<input
								type="text"
								className="form-control"
								placeholder="Nazwisko (opcjonalnie)"
							/>
						</div>
					</div>

					<div className="mt-3 row">
						<div className="col-12 col-xl-6">
							<input
								type="text"
								className="form-control"
								placeholder="Telefon (opcjonalnie)"
							/>
						</div>
						<div className="mt-3 mt-xl-0 col-12 col-xl-6">
							<input
								type="text"
								className="form-control"
								placeholder="Adres e-mail"
							/>
						</div>
					</div>
					<textarea
						className="mt-3 form-control"
						id="messageText"
						rows={3}
						placeholder="Treść wiadomości"></textarea>
					<div className="d-grid">
						<button type="button" className="mt-3 btn btn-outline-primary">
							<FontAwesomeIcon icon={faEnvelope} className="mx-2" />Wyślij
						</button>

						<div className="my-3 strike">
							<span>lub</span>
						</div>
						<button type="button" className="btn btn-danger">
							<FontAwesomeIcon icon={faMessage} className="mx-2" />Przejdz do chatu z
							użytkownikiem
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default ContactSeller
