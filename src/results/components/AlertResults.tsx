import React from "react"

type Props = { headline: string; text: string }

const AlertResults = ({ headline, text }: Props) => {
	return (
		<div className="col">
			<div className="results-alert">
				<div className="d-flex align-items-center mb-3">
					<i className="fa-solid fa-circle-info mx-2 fa-2x text-secondary"></i>
					{headline}
				</div>
				<p className="m-0 ms-5">{text}</p>
			</div>
		</div>
	)
}

export default AlertResults
