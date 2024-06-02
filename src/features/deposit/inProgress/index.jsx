import FunnelIcon from '@heroicons/react/24/outline/FunnelIcon'
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon'
import { useEffect, useState } from "react"
import TitleCard from '../../../components/Cards/TitleCard'
import SearchBar from "../../../components/Input/SearchBar"
import { RECENT_DEPOSIT_IN_PROGRESS } from "../../../utils/dummyData"
import Table from '../components/Table'

const TopSideButtons = ({ removeFilter, applyFilter, applySearch }) => {

  const [filterParam, setFilterParam] = useState("")
  const [searchText, setSearchText] = useState("")
  const locationFilters = ["Paris", "London", "Canada", "Peru", "Tokyo"]

  const showFiltersAndApply = (params) => {
    applyFilter(params)
    setFilterParam(params)
  }

  const removeAppliedFilter = () => {
    removeFilter()
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
      <div className="dropdown dropdown-bottom dropdown-end">
        <label tabIndex={0} className="btn btn-sm btn-outline"><FunnelIcon className="w-5 mr-2" />Filter</label>
        <ul tabIndex={0} className="dropdown-content menu p-2 text-sm shadow bg-base-100 rounded-box w-52">
          {
            locationFilters.map((l, k) => {
              return <li key={k}><a onClick={() => showFiltersAndApply(l)}>{l}</a></li>
            })
          }
          <div className="divider mt-0 mb-0"></div>
          <li><a onClick={() => removeAppliedFilter()}>Remove Filter</a></li>
        </ul>
      </div>
    </div>
  )
}


function InProgress() {


  const [data, setData] = useState(RECENT_DEPOSIT_IN_PROGRESS)

  const removeFilter = () => {
    setData(RECENT_DEPOSIT_IN_PROGRESS)
  }

  const applyFilter = (params) => {
    let filteredTransactions = RECENT_DEPOSIT_IN_PROGRESS.filter((t) => { return t.location == params })
    setData(filteredTransactions)
  }

  // Search according to name
  const applySearch = (value) => {
    let filteredTransactions = RECENT_DEPOSIT_IN_PROGRESS.filter((t) => { return t.email.toLowerCase().includes(value.toLowerCase()) || t.email.toLowerCase().includes(value.toLowerCase()) })
    setData(filteredTransactions)
  }

  return (
    <>

      <TitleCard title="Recent Transactions" topMargin="mt-2" TopSideButtons={<TopSideButtons applySearch={applySearch} applyFilter={applyFilter} removeFilter={removeFilter} />}>

        {/* Team Member list in table format loaded constant */}
        <div className="overflow-x-auto w-full">
          <Table data={data} />
        </div>
      </TitleCard>
    </>
  )
}


export default InProgress
