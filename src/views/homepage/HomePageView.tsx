import React from "react"

import AboutUs from "./containers/about-us/AboutUs"
import Advertisement from "./containers/advertisement/Advertisement"
import LastAdded from "./containers/last-added/LastAdded"
import Search from "./containers/search/Search"

type Props = {}

const HomepageView = (props: Props) => {
	return (
		<>
			<Advertisement />
			<Search />
			<LastAdded />
			<AboutUs />
		</>
	)
}

export default HomepageView
