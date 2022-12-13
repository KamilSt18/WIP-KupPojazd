import React, { useState } from "react"

import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"

import FormSearch from "./components/FormSearch/FormSearch"

type Props = {}

const Search = (props: Props) => {
  const [tabIndex, setTabIndex] = useState(0);
	return (
		<div className="bg-white rounded-3 p-3 my-3">
			<div className="row">
				<h2 className="mb-4">Wyszukiwarka pojazdów</h2>

				<Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
					<TabList>
						<Tab>Samochód osobowy</Tab>
						<Tab>Motocykl</Tab>
						<Tab>Dostawcze</Tab>
						<Tab>Samochód ciężarowy</Tab>
						<Tab>Rolnicze</Tab>
						<Tab>Przyczepy</Tab>
						<Tab>Budowlane</Tab>
						<Tab>Inne</Tab>
					</TabList>

					<TabPanel>
						<FormSearch />
					</TabPanel>
					<TabPanel>
						<h2>Any content 2</h2>
					</TabPanel>
					<TabPanel>
						<h2>Any content 3</h2>
					</TabPanel>
					<TabPanel>
						<h2>Any content 4</h2>
					</TabPanel>
					<TabPanel>
						<h2>Any content 5</h2>
					</TabPanel>
					<TabPanel>
						<h2>Any content 6</h2>
					</TabPanel>
					<TabPanel>
						<h2>Any content 7</h2>
					</TabPanel>
					<TabPanel>
						<h2>Any content 8</h2>
					</TabPanel>
				</Tabs>
			</div>
		</div>
	)
}

export default Search
