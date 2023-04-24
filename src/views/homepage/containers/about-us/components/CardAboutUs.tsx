import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

type Props = {
	icon: IconDefinition
	text: string
}

const CardAboutUs = ({ icon, text }: Props) => {
	return (
		<div className="my-5 w-100 d-flex">
			<div className="col-3 d-flex justify-content-center align-items-center">
				<FontAwesomeIcon icon={icon} className="fa-2x" />
			</div>
			<div className="col">{text}</div>
		</div>
	)
}

export default CardAboutUs
