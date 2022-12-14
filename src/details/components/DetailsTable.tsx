import React from "react"

type Props = {}

const DetailsTable = (props: Props) => {
	return (
		<>
			<h3 className="mt-3">Dane szczegółowe</h3>
			<table className="my-2 table table-striped">
				<tbody>
					<tr>
						<th scope="row">VIN</th>
						<td>LVYA22ML2MP223094</td>
					</tr>
					<tr>
						<th scope="row">Stan</th>
						<td>Używany</td>
					</tr>
					<tr>
						<th scope="row">Rok produkcji</th>
						<td>2002</td>
					</tr>
					<tr>
						<th scope="row">Pojemność silnika</th>
						<td>1 984 cm3</td>
					</tr>
					<tr>
						<th scope="row">Moc silnika</th>
						<td>130 KM</td>
					</tr>
					<tr>
						<th scope="row">Typ silnika</th>
						<td>Diesel</td>
					</tr>
					<tr>
						<th scope="row">Przebieg</th>
						<td>546 423 km</td>
					</tr>
				</tbody>
			</table>
		</>
	)
}

export default DetailsTable
