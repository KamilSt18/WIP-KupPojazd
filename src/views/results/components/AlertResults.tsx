import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react"

type Props = { headline: string; text: string }

const AlertResults = ({ headline, text }: Props) => {
	return (
		<div className="col">
			<div className="results-alert">
				<div className="mb-3 d-flex align-items-center text-primary">
					<FontAwesomeIcon icon={faCircleInfo} className="mx-2 fa-2x " />
					<span>{headline}</span>
				</div>
				<p className="m-0 ms-5">{text}</p>
			</div>
		</div>
	)
}

export default AlertResults
