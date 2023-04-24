import React, { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faHeart as faHeartSolid,
	faLocationDot,
} from "@fortawesome/free-solid-svg-icons"
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons"

import Breadcrumb from "../../core/shared/Breadcrumb"
import PictureFrame from "../../core/shared/PictureFrame"
import DetailsTable from "./components/DetailsTable"
import Map from "./components/Map"
import ContactSeller from "./containers/ContactSeller"

import "./details-view.scss"

import SimilarAds from "./containers/SimilarAds"

type Props = {}

const DetailsView = (props: Props) => {
	const [observe, setobserve] = useState(false)
	const observeHandler = () => setobserve(val => !val)

	return (
		<div className="p-3 mt-3 bg-white rounded-3">
			<div className="row">
				<Breadcrumb />
				<div className="mb-3 row">
					<h1 className="m-0 col-12 col-xl-6">BMW 435 Gran Coupe i xDrive</h1>
					<div className="mt-3 mt-xl-0 col-12 col-xl-6 d-flex justify-content-xl-end">
						<button
							onClick={observeHandler}
							className="btn btn-outline-primary align-self-center"
							style={{ height: 45 }}>
							<FontAwesomeIcon icon={observe ? faHeartSolid : faHeartRegular} />{" "}
							<span className="h6">{observe ? "Obserwujesz" : "Obserwuj"}</span>
						</button>
					</div>
				</div>
				<div className="col-12 col-xl-6">
					<PictureFrame />

					<div className="my-3 row align-items-center">
						<div className="col">
							<div className="m-0 h2">
								Cena:
								<span className="ms-2 h2 vehicle-price">
									138 500 <span className="h3"><sup className="text-dark">PLN</sup></span>
								</span>
							</div>
						</div>
						<div className="col">
							<p className="me-1 h5 card-text d-flex justify-content-end">
								<FontAwesomeIcon
									icon={faLocationDot}
									className="me-1 text-primary"
								/>
								Wrocław
							</p>
						</div>
					</div>

					<hr />
					<DetailsTable />
					<h3 className="mt-3">Opis</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
						nisi alias, omnis, quisquam dolores neque dolor rerum ad nobis iusto
						dolore earum! Eos ab unde cum iusto voluptas sequi dolorem! Lorem
						ipsum dolor sit amet consectetur adipisicing elit. Odio perspiciatis
						aliquid fugit voluptates id fuga, reprehenderit ipsam adipisci iure
						aut ab consequuntur placeat. Quos, fugit nulla eligendi ullam
						exercitationem quae. Lorem ipsum, dolor sit amet consectetur
						adipisicing elit. Aliquam minus molestias saepe! Neque incidunt
						doloribus, perferendis placeat consequuntur at velit enim nulla
						vitae quasi, esse porro. Repellendus consectetur iusto vel?
					</p>
					<Map />

					<div className="my-2">
						<p className="m-0">
							<small>Dodano: 19:12, 11 grudnia 2022</small>
						</p>
						<p className="m-0">
							<small>ID: 61087a77-f681-480c-b99b-7827dedfef61</small>
						</p>
					</div>
				</div>

				<ContactSeller />
			</div>
			<SimilarAds />
		</div>
	)
}

export default DetailsView
