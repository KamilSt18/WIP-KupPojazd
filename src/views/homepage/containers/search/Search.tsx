import React, { useState } from "react"

import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

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
						<FormSearch />
					</TabPanel>
					<TabPanel>
						<FormSearch />
					</TabPanel>
					<TabPanel>
						<FormSearch />
					</TabPanel>
					<TabPanel>
						<FormSearch />
					</TabPanel>
					<TabPanel>
						<FormSearch />
					</TabPanel>
					<TabPanel>
						<FormSearch />
					</TabPanel>
					<TabPanel>
						<FormSearch />
					</TabPanel>
				</Tabs>
			</div>
		</div>
	)
}

export default Search
