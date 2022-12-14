import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react"
import { useNavigate } from "react-router-dom"

type Props = {}

const CardResults = (props: Props) => {
	const navigate = useNavigate();
	return (
		<div className="my-3 card" style={{ cursor: "pointer" }} onClick={() => {
			navigate('/details')
		}}>
			<div className="g-0 row">
				<div className="col-md-4">
					<img
						src="https://platform.cstatic-images.com/xlarge/in/v2/a70e4473-c609-5cf8-8208-6c8dae4d41fb/70c39aba-6947-40ad-951f-0c4d70a95f7b/rzjAQwbeCrmRPSsVWuaP_MbcPps.jpg"
						className="img-fluid rounded-start"
						alt="..."
						loading="lazy"
					/>
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<p className="card-text">
							<small className="text-muted">Używany</small>
						</p>
						<h5 className="card-title">BMW 435 Gran Coupe i xDrive</h5>
						<p className="card-text">
							<span className="vehicle-price">138 500 PLN</span>
						</p>
						<p className="card-text">
							<FontAwesomeIcon icon={faLocationDot} /> Wrocław
						</p>
						<ul className="p-0 m-0 car-attributes-list">
							<li>2002</li>
							<li>1 984 cm3</li>
							<li>130 KM</li>
							<li>Diesel</li>
							<li>546 423 km</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CardResults
