import React from "react"

import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {}

const SocialSignIn = (props: Props) => {
	return (
		<>
			<h3>Logowanie przez portale społecznościowe</h3>
			<div className="mt-4 d-grid">
				<button className="my-2 btn btn-primary">
					<FontAwesomeIcon icon={faFacebookF} /> Login with Facebook
				</button>
				<button className="my-2 btn btn-danger">
					<FontAwesomeIcon icon={faGoogle} /> Login with Google
				</button>
			</div>
		</>
	)
}

export default SocialSignIn
