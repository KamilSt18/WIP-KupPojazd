import React from "react"

type Props = {}

const SelectFilter = (props: Props) => {
	return (
		<div className="form-group col-lg-6 ms-lg-auto">
			<label htmlFor="inputSortBy">Sortuj według</label>
			<select id="inputSortBy" className="mt-1 form-select">
				<option>Najnowsze</option>
				<option>...</option>
			</select>
		</div>
	)
}

export default SelectFilter
