import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon'
import { useEffect, useState } from "react"
import TitleCard from '../../../components/Cards/TitleCard'
import SearchBar from "../../../components/Input/SearchBar"
import TableComponent from '../components/Table'

const TopSideButtons = ({ applyFilter, applySearch }) => {

  const [filterParam, setFilterParam] = useState("")
  const [searchText, setSearchText] = useState("")
  const locationFilters = ["Paris", "London", "Canada", "Peru", "Tokyo"]

  const showFiltersAndApply = (params) => {
    applyFilter(params)
    setFilterParam(params)
  }

  const removeAppliedFilter = () => {
    setFilterParam("")
    setSearchText("")
  }

  useEffect(() => {
    if (searchText == "") {
      removeAppliedFilter()
    } else {
      applySearch(searchText)
    }
  }, [searchText])

  return (
    <div className="inline-block float-right">
      <SearchBar searchText={searchText} styleClass="mr-4" setSearchText={setSearchText} />
      {filterParam != "" && <button onClick={() => removeAppliedFilter()} className="btn btn-xs mr-2 btn-active btn-ghost normal-case">{filterParam}<XMarkIcon className="w-4 ml-2" /></button>}

    </div>
  )
}


function Dropped() {

  const data = [
    {
      id: 1,
      amount: 150.75,
      code: 'A123',
      status: 'Dropped',
      user: 'John Doe',
      merchant: 'Amazon',
      merchantOrderId: 'M123456',
      payingUUID: 'UUID12345',
      lastUpdated: '2024-05-30T10:30:00Z'
    },
    {
      id: 2,
      amount: 89.99,
      code: 'B456',
      status: 'Dropped',
      user: 'Jane Smith',
      merchant: 'Ebay',
      merchantOrderId: 'M654321',
      payingUUID: 'UUID67890',
      lastUpdated: '2024-06-01T14:45:00Z'
    },
    {
      id: 3,
      amount: 299.99,
      code: 'C789',
      status: 'Dropped',
      user: 'Alice Johnson',
      merchant: 'Walmart',
      merchantOrderId: 'M112233',
      payingUUID: 'UUID11223',
      lastUpdated: '2024-06-02T09:15:00Z'
    },
    {
      id: 4,
      amount: 49.99,
      code: 'D012',
      status: 'Dropped',
      user: 'Bob Brown',
      merchant: 'Best Buy',
      merchantOrderId: 'M445566',
      payingUUID: 'UUID33445',
      lastUpdated: '2024-05-29T11:30:00Z'
    },
    {
      id: 5,
      amount: 120.00,
      code: 'E345',
      status: 'Dropped',
      user: 'Charlie Davis',
      merchant: 'Target',
      merchantOrderId: 'M778899',
      payingUUID: 'UUID55667',
      lastUpdated: '2024-06-03T16:00:00Z'
    }
  ];
  return (
    <>

      <TitleCard title="Recent Transactions" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>

        {/* Team Member list in table format loaded constant */}
        <div className="overflow-x-auto w-full">
          <TableComponent data={data} />
        </div>
      </TitleCard>
    </>
  )
}


export default Dropped;
