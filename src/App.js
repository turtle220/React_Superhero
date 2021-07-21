import React from 'react'
import './styles.css'

import DataTable from './SearchPage/DataTable'
import SearchBox from './SearchPage/SearchBox'

export default function App() {
  return (
    <div>
      <SearchBox />
      <DataTable />
    </div>
  )
}
